/**
 * @fileoverview Renders the current step in the symptom selection tree.
 */
import type { SymptomNode } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";

interface SymptomSelectionProps {
  nodes: SymptomNode[];
  path: SymptomNode[];
  onSelect: (node: SymptomNode) => void;
  onBack: () => void;
  canGoBack: boolean;
}

function Breadcrumbs({ path }: { path: SymptomNode[] }) {
    if (path.length === 0) return null;
    return (
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
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


export function SymptomSelection({ nodes, path, onSelect, onBack, canGoBack }: SymptomSelectionProps) {
    const title = path.length > 0 ? `Qu'est-ce qui caractérise cette ${path[path.length - 1].label.toLowerCase()} ?` : "Quel symptôme principal ressentez-vous ?";

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                 <Breadcrumbs path={path} />
                 <CardTitle>{title}</CardTitle>
                 <CardDescription>Veuillez sélectionner l'option qui correspond le mieux.</CardDescription>
            </div>
            {canGoBack && (
              <Button variant="ghost" size="icon" onClick={onBack} aria-label="Retour">
                <ArrowLeft />
              </Button>
            )}
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nodes.map((node) => (
          <Button
            key={node.id}
            variant="outline"
            className="h-auto p-4 flex flex-col gap-2 items-center justify-center text-center"
            onClick={() => onSelect(node)}
          >
            {node.icon && <node.icon className="size-8 text-primary mb-2" />}
            <span className="text-base font-medium">{node.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
