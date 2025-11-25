/**
 * @fileoverview Main component for the interactive symptom checker.
 * It guides the user through a tree of symptoms to get an analysis.
 */
"use client";

import { useState, useMemo, useEffect } from "react";
import type { SymptomNode } from "@/lib/types";
import { symptomTree } from "@/constants/symptom-tree";
import { SymptomSelection } from "./symptom-selection";
import { SymptomAnalysis } from "./symptom-analysis";
import { useProfile } from "@/contexts/profile-context";
import { ProfilePrompt } from "./profile-prompt";
import { Skeleton } from "../ui/skeleton";

function SymptomCheckerSkeleton() {
  return (
    <div className="flex flex-col items-center w-full">
      <Skeleton className="h-96 w-full max-w-lg" />
    </div>
  )
}


export default function SymptomChecker() {
  const { isProfileComplete, profile } = useProfile();

  const filterNodes = (nodes: SymptomNode[], sex: 'homme' | 'femme'): SymptomNode[] => {
    return nodes
      .filter(node => !node.sex || node.sex === sex)
      .map(node => ({
        ...node,
        children: node.children ? filterNodes(node.children, sex) : undefined
      }));
  };

  const filteredTree = useMemo(() => {
    if (!profile?.sex || (profile.sex !== 'homme' && profile.sex !== 'femme')) return symptomTree;
    return filterNodes(symptomTree, profile.sex as 'homme' | 'femme');
  }, [profile?.sex]);

  const [currentNode, setCurrentNode] = useState<SymptomNode[]>(filteredTree);
  const [history, setHistory] = useState<SymptomNode[][]>([filteredTree]);
  const [selectedPath, setSelectedPath] = useState<SymptomNode[]>([]);
  const [analysis, setAnalysis] = useState<string | null>(null);

  // Reset when the tree changes (e.g. profile update)
  useEffect(() => {
    setCurrentNode(filteredTree);
    setHistory([filteredTree]);
    setSelectedPath([]);
    setAnalysis(null);
  }, [filteredTree]);


  const handleSelectNode = (node: SymptomNode) => {
    const newPath = [...selectedPath, node];
    setSelectedPath(newPath);

    if (node.children && node.children.length > 0) {
      setHistory(prev => [...prev, node.children!]);
      setCurrentNode(node.children);
    } else {
      // Leaf node reached, show analysis
      const symptomDescription = newPath.map(p => p.label).join(' -> ');
      setAnalysis(symptomDescription);
      setCurrentNode([]); // Clear nodes to show analysis view
    }
  };

  const handleGoBack = () => {
    if (analysis) {
      // From analysis back to selection
      setAnalysis(null);
      setSelectedPath(prev => prev.slice(0, -1));
      const lastNodeChildren = history[history.length - 1];
      setCurrentNode(lastNodeChildren);

    } else if (history.length > 1) {
      // Within the selection tree
      const prevHistory = history.slice(0, -1);
      const prevNodes = prevHistory[prevHistory.length - 1];
      setHistory(prevHistory);
      setCurrentNode(prevNodes);
      setSelectedPath(prev => prev.slice(0, -1));
    }
  };

  const handleReset = () => {
    setCurrentNode(filteredTree);
    setHistory([filteredTree]);
    setSelectedPath([]);
    setAnalysis(null);
  };

  const canGoBack = analysis ? true : history.length > 1;

  if (isProfileComplete === undefined) {
    return <SymptomCheckerSkeleton />;
  }

  if (!isProfileComplete) {
    return <ProfilePrompt />;
  }

  return (
    <div className="mx-auto w-full max-w-md px-2 sm:px-0">
      {analysis ? (
        <SymptomAnalysis
          symptomDescription={analysis}
          onBack={handleGoBack}
          onReset={handleReset}
        />
      ) : (
        <SymptomSelection
          nodes={currentNode}
          path={selectedPath}
          onSelect={handleSelectNode}
          onBack={handleGoBack}
          onReset={handleReset}
          canGoBack={canGoBack}
        />
      )}
    </div>
  );
}
