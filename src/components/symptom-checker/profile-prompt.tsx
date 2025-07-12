/**
 * @fileoverview A component to prompt the user to fill out their profile.
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export function ProfilePrompt() {
    return (
        <div className="mx-auto max-w-2xl w-full py-8 px-4 sm:px-0">
            <Card className="text-center">
                <CardHeader>
                    <div className="mx-auto mb-4 inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
                        <User className="size-8" />
                    </div>
                    <CardTitle>Complétez votre profil</CardTitle>
                    <CardDescription>
                        Pour une analyse plus précise et personnalisée, veuillez prendre un moment pour compléter votre profil.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/profile">Aller au profil</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
