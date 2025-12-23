/**
 * @fileoverview A component to prompt the user to fill out their profile.
 */

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export function ProfilePrompt() {
    return (
        <div className="mx-auto max-w-lg w-full py-16 px-4 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mx-auto flex items-center justify-center size-20 rounded-2xl bg-primary/10 text-primary shadow-inner">
                <User className="size-10" />
            </div>

            <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Complétez votre profil
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Pour une analyse plus précise et personnalisée, nous avons besoin de connaître quelques détails sur votre santé.
                </p>
            </div>

            <Button asChild className="h-14 px-10 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20">
                <Link href="/profile">Configurer mon profil</Link>
            </Button>

            <p className="text-xs text-muted-foreground pt-4 italic">
                C'est rapide et cela améliore grandement la qualité du diagnostic.
            </p>
        </div>
    );
}
