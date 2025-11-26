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
import { SportQuestion } from "./sport-question";
import { useProfile } from "@/contexts/profile-context";
import { ProfilePrompt } from "./profile-prompt";
import { Skeleton } from "../ui/skeleton";
import { markSportRelatedSymptoms, buildEnrichedSymptomDescription } from "@/constants/sport-utils";

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
    if (!profile?.sex || (profile.sex !== 'homme' && profile.sex !== 'femme')) {
      return markSportRelatedSymptoms(symptomTree);
    }
    const filtered = filterNodes(symptomTree, profile.sex as 'homme' | 'femme');
    return markSportRelatedSymptoms(filtered);
  }, [profile?.sex]);

  const [currentNode, setCurrentNode] = useState<SymptomNode[]>(filteredTree);
  const [history, setHistory] = useState<SymptomNode[][]>([filteredTree]);
  const [selectedPath, setSelectedPath] = useState<SymptomNode[]>([]);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [showSportQuestion, setShowSportQuestion] = useState(false);
  const [pendingNode, setPendingNode] = useState<SymptomNode | null>(null);
  const [sportData, setSportData] = useState<{
    practicesSport: boolean;
    sportId?: string;
    adaptiveAnswers?: Record<string, string>;
  } | undefined>(undefined);

  // Reset when the tree changes (e.g. profile update)
  useEffect(() => {
    setCurrentNode(filteredTree);
    setHistory([filteredTree]);
    setSelectedPath([]);
    setAnalysis(null);
    setShowSportQuestion(false);
    setPendingNode(null);
    setSportData(undefined);
  }, [filteredTree]);


  const handleSelectNode = (node: SymptomNode) => {
    // Vérifier si ce nœud nécessite des questions sportives
    if (node.requiresSportQuestion && !node.children) {
      // C'est une feuille qui nécessite des questions sportives
      setPendingNode(node);
      setShowSportQuestion(true);
      return;
    }

    const newPath = [...selectedPath, node];
    setSelectedPath(newPath);

    if (node.children && node.children.length > 0) {
      setHistory(prev => [...prev, node.children!]);
      setCurrentNode(node.children);
    } else {
      // Leaf node reached, show analysis
      const symptomDescription = buildEnrichedSymptomDescription(newPath, sportData);
      setAnalysis(symptomDescription);
      setCurrentNode([]); // Clear nodes to show analysis view
    }
  };

  const handleSportQuestionComplete = (data: {
    practicesSport: boolean;
    sportId?: string;
    adaptiveAnswers?: Record<string, string>;
  }) => {
    setSportData(data);
    setShowSportQuestion(false);

    if (pendingNode) {
      const newPath = [...selectedPath, pendingNode];
      setSelectedPath(newPath);

      // Construire la description enrichie avec les données sportives
      const symptomDescription = buildEnrichedSymptomDescription(newPath, data);
      setAnalysis(symptomDescription);
      setCurrentNode([]);
      setPendingNode(null);
    }
  };

  const handleGoBack = () => {
    if (showSportQuestion) {
      // Retour depuis les questions sportives
      setShowSportQuestion(false);
      setPendingNode(null);
      return;
    }

    if (analysis) {
      // From analysis back to selection
      setAnalysis(null);
      setSportData(undefined);
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
    setShowSportQuestion(false);
    setPendingNode(null);
    setSportData(undefined);
  };

  const canGoBack = showSportQuestion || analysis ? true : history.length > 1;

  if (isProfileComplete === undefined) {
    return <SymptomCheckerSkeleton />;
  }

  if (!isProfileComplete) {
    return <ProfilePrompt />;
  }

  return (
    <div className="mx-auto w-full max-w-md px-2 sm:px-0">
      {showSportQuestion && pendingNode ? (
        <SportQuestion
          symptomId={pendingNode.id}
          symptomLabel={pendingNode.label}
          onComplete={handleSportQuestionComplete}
        />
      ) : analysis ? (
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
