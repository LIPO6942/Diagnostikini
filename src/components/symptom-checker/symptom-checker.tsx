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
  const [sequenceNodes, setSequenceNodes] = useState<SymptomNode[]>([]);
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState<number>(-1);
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
    setSequenceNodes([]);
    setCurrentSequenceIndex(-1);
    setSportData(undefined);
  }, [filteredTree]);


  const handleSelectNode = (node: SymptomNode) => {
    // 1. Gestion du mode Séquentiel (Wizard)
    if (currentSequenceIndex !== -1) {
      // L'utilisateur a répondu à une étape de la séquence (ex: "Brûlure" pour "Nature")
      const newPath = [...selectedPath, node];
      setSelectedPath(newPath);

      // Passer à l'étape suivante
      const nextIndex = currentSequenceIndex + 1;
      if (nextIndex < sequenceNodes.length) {
        setCurrentSequenceIndex(nextIndex);
        setCurrentNode(sequenceNodes[nextIndex].children || []);
        // Ajouter les options de l'étape suivante à l'historique pour le bouton retour
        setHistory(prev => [...prev, sequenceNodes[nextIndex].children || []]);
      } else {
        // Fin de la séquence -> Analyse ou Sport
        setSequenceNodes([]);
        setCurrentSequenceIndex(-1);

        // Vérifier si le symptôme parent (qui a déclenché la séquence) nécessite des questions sportives
        // Le parent est le dernier élément du path AVANT d'entrer dans la séquence.
        // Mais ici 'node' est la dernière réponse (ex: "Effort").
        // On doit vérifier si le symptôme initial (ex: "Douleur thoracique") nécessite sport.
        // On peut le retrouver dans selectedPath ou history, mais c'est complexe.
        // Simplification : on vérifie si le nœud actuel (réponse) déclenche quelque chose, 
        // ou on procède directement à l'analyse.

        const symptomDescription = buildEnrichedSymptomDescription(newPath, sportData);
        setAnalysis(symptomDescription);
        setCurrentNode([]);
      }
      return;
    }

    // 2. Vérifier si ce nœud nécessite des questions sportives (cas feuille simple sans séquence)
    if (node.requiresSportQuestion && !node.children) {
      setPendingNode(node);
      setShowSportQuestion(true);
      return;
    }

    const newPath = [...selectedPath, node];
    setSelectedPath(newPath);

    if (node.children && node.children.length > 0) {
      // 3. Détection du début d'une séquence (Nature, Intensité...)
      // On vérifie si le premier enfant est de type "Nature" (id finit par -nature)
      if (node.children[0].id.endsWith('-nature')) {
        // Démarrage du mode séquentiel
        setSequenceNodes(node.children);
        setCurrentSequenceIndex(0);
        setCurrentNode(node.children[0].children || []);
        setHistory(prev => [...prev, node.children![0].children || []]);
      } else {
        // Navigation standard dans l'arbre
        setHistory(prev => [...prev, node.children!]);
        setCurrentNode(node.children);
      }
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

      // Si on revient d'une analyse qui suivait une séquence, il faut réinitialiser correctement
      // Mais c'est compliqué de savoir si on vient d'une séquence.
      // Le plus simple est de revenir à l'étape précédente dans l'historique.

      const lastNodeChildren = history[history.length - 1];
      setCurrentNode(lastNodeChildren);

    } else if (history.length > 1) {
      // Within the selection tree
      const prevHistory = history.slice(0, -1);
      const prevNodes = prevHistory[prevHistory.length - 1];
      setHistory(prevHistory);
      setCurrentNode(prevNodes);
      setSelectedPath(prev => prev.slice(0, -1));

      // Gestion du retour arrière dans une séquence
      if (currentSequenceIndex !== -1) {
        if (currentSequenceIndex > 0) {
          setCurrentSequenceIndex(prev => prev - 1);
        } else {
          // On est au début de la séquence (Nature), on annule la séquence
          setSequenceNodes([]);
          setCurrentSequenceIndex(-1);
        }
      }
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
          customTitle={currentSequenceIndex !== -1 ? sequenceNodes[currentSequenceIndex].label : undefined}
          customDescription={currentSequenceIndex !== -1 ? sequenceNodes[currentSequenceIndex].description : undefined}
        />
      )}
    </div>
  );
}
