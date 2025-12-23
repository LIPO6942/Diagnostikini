/**
 * @fileoverview Renders the current step in the symptom selection tree.
 */
import type { SymptomNode } from "@/lib/types";
import { Button } from "@/components/ui/button";

import { ArrowLeft, Home, ChevronRight, RotateCcw, Activity } from "lucide-react";
import Link from 'next/link';

interface SymptomSelectionProps {
  nodes: SymptomNode[];
  path: SymptomNode[];
  onSelect: (node: SymptomNode) => void;
  onBack: () => void;
  onReset: () => void;
  canGoBack: boolean;
  customTitle?: string;
  customDescription?: string;
}

function Breadcrumbs({ path }: { path: SymptomNode[] }) {
  if (path.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-4">
      <Home className="size-4" />
      {path.map((p, i) => (
        <div key={p.id} className="flex items-center gap-1.5">
          <ChevronRight className="size-4" />
          <span>{p.label}</span>
        </div>
      ))}
    </div>
  );
}


export function SymptomSelection({ nodes, path, onSelect, onBack, onReset, canGoBack, customTitle, customDescription }: SymptomSelectionProps) {
  const defaultTitle = path.length > 0 ? `Précisions` : "Que ressentez-vous ?";
  // Si on est dans le parcours, on affiche le label du parent comme "Contexte" ou titre
  const contextLabel = path.length > 0 ? path[path.length - 1].label : null;

  const title = customTitle || (contextLabel ? `Caractériser : ${contextLabel}` : "Symptôme principal");
  const description = customDescription || "Sélectionnez l'option qui décrit le mieux votre état.";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header épuré */}
      <div className="space-y-4">
        {/* Navigation / Breadcrumbs */}
        <div className="flex items-center justify-between">
          {path.length > 0 ? (
            <button
              onClick={onBack}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="bg-secondary/50 group-hover:bg-secondary p-1.5 rounded-full mr-2 transition-colors">
                <ArrowLeft className="size-4" />
              </div>
              <span>Retour</span>
            </button>
          ) : (
            <span className="text-sm font-medium text-muted-foreground">Début du diagnostic</span>
          )}

          {/* Indicateur de progression discret (facultatif, ici juste un reset) */}
          {canGoBack && (
            <Button variant="ghost" size="sm" onClick={onReset} className="text-muted-foreground hover:text-destructive h-8 px-2">
              <RotateCcw className="size-3.5 mr-1.5" />
              <span className="text-xs">Réinitialiser</span>
            </Button>
          )}
        </div>

        <div className="space-y-2 text-center sm:text-left px-1">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            {description}
          </p>
        </div>
      </div>

      {/* Grille de choix modernisée */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {nodes.map((node) => (
          <button
            key={node.id}
            onClick={() => onSelect(node)}
            className="group relative flex items-center gap-3 p-3 sm:p-4 bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/40 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.97] text-left overflow-hidden h-full"
          >
            <div className="flex-shrink-0 size-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary transition-colors">
              {node.icon ? (
                <node.icon className="size-5" />
              ) : (
                <Activity className="size-5 opacity-40" />
              )}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                {node.label}
              </span>
              {node.descriptionTunisian && (
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium font-arabic mt-0.5 line-clamp-1">
                  {node.descriptionTunisian}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Footer minimaliste si au début */}
      {path.length === 0 && (
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <Link href="/profile" className="inline-flex items-center hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-0.5">
            Mettre à jour mon profil santé
          </Link>
        </div>
      )}
    </div>
  );
}
