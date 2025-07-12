/**
 * @fileoverview Welcome message component for the chat interface.
 */
import { Card } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

export const WelcomeMessage = () => (
    <Card className="p-6 text-center shadow-none border-none bg-transparent">
        <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
            <Stethoscope className="size-8" />
        </div>
        <h2 className="text-2xl font-headline font-bold mb-2">Bienvenue sur Diagnostikini</h2>
        <p className="text-muted-foreground">
            Votre assistant de santé personnel IA.
            <br />
            Décrivez vos symptômes ci-dessous pour commencer.
        </p>
    </Card>
);
