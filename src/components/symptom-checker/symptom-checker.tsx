/**
 * @fileoverview Main component for the interactive symptom checker.
 * It guides the user through a tree of symptoms to get an analysis.
 */
"use client";

import { useState } from "react";
import type { SymptomNode } from "@/lib/types";
import { symptomTree } from "@/constants/symptom-tree";
import { SymptomSelection } from "./symptom-selection";
import { SymptomAnalysis } from "./symptom-analysis";
import { ProfilePrompt } from "./profile-prompt";
import { useProfile } from "@/contexts/profile-context";
import Image from "next/image";

export default function SymptomChecker() {
  const [currentNode, setCurrentNode] = useState<SymptomNode[]>(symptomTree);
  const [history, setHistory] = useState<SymptomNode[][]>([symptomTree]);
  const [selectedPath, setSelectedPath] = useState<SymptomNode[]>([]);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const { isProfileComplete } = useProfile();

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
        const lastNodeChildren = history[history.length -1];
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
    setCurrentNode(symptomTree);
    setHistory([symptomTree]);
    setSelectedPath([]);
    setAnalysis(null);
  };
  
  const canGoBack = analysis ? true : history.length > 1;

  if (isProfileComplete === false) { // Check for false explicitly to handle initial undefined state
      return <ProfilePrompt />;
  }


  return (
    <div className="mx-auto max-w-2xl w-full py-8 px-4 sm:px-0 space-y-8">
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
