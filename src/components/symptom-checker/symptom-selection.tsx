/**
 * @fileoverview Renders the current step in the symptom selection tree.
 */
import type { SymptomNode } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Home, ChevronRight, RotateCcw } from "lucide-react";
import Link from 'next/link';

interface SymptomSelectionProps {
  nodes: SymptomNode[];
  path: SymptomNode[];
  onSelect: (node: SymptomNode) => void;
  onBack: () => void;
  onReset: () => void;
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


export function SymptomSelection({ nodes, path, onSelect, onBack, onReset, canGoBack }: SymptomSelectionProps) {
    const title = path.length > 0 ? `Qu'est-ce qui caractérise cette ${path[path.length - 1].label.toLowerCase()} ?` : "Quel symptôme principal ressentez-vous ?";

  return (
    <Card className="animate-fade-in-up">
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
      <CardContent className="grid grid-cols-2 gap-3">
        {nodes.map((node) => (
          <Button
            key={node.id}
            variant="outline"
            className="h-auto whitespace-normal p-3 flex flex-col gap-2 items-center justify-center text-center group transition-all duration-200 ease-in-out hover:bg-primary/10 hover:border-primary"
            onClick={() => onSelect(node)}
          >
            {node.icon && <node.icon className="size-8 text-primary mb-2 transition-transform duration-200 group-hover:scale-110" />}
            <div className="flex flex-col items-center">
                <span className="text-sm font-bold">{node.label}</span>
                {node.descriptionTunisian && (
                    <span className="text-xs text-muted-foreground font-normal mt-1">
                        ({node.descriptionTunisian})
                    </span>
                )}
            </div>
          </Button>
        ))}
      </CardContent>
       {path.length === 0 && (
         <CardFooter className="flex-col items-start gap-4 border-t pt-6">
            <p className="text-sm text-muted-foreground">Vous pouvez recommencer le questionnaire ou mettre à jour votre profil.</p>
            <div className="flex gap-2">
                <Button variant="outline" onClick={onReset}>
                    <RotateCcw className="mr-2" />
                    Recommencer
                </Button>
                 <Button variant="outline" asChild>
                    <Link href="/profile">Mettre à jour le profil</Link>
                </Button>
            </div>
         </CardFooter>
      )}
    </Card>
  );
}
