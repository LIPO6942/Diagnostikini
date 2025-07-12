/**
 * @fileoverview Emergency page component with first aid protocols and contacts.
 */
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { firstAidProtocols } from "@/constants/first-aid";
import { useGeolocation } from "@/hooks/use-geolocation";
import { Phone, Siren } from "lucide-react";

export default function EmergencyPage() {
  const { location, error } = useGeolocation();
    
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <Siren className="w-8 h-8 text-destructive" />
            Mode Urgence
        </h1>
        <p className="text-muted-foreground">Accès rapide aux premiers secours et aux numéros d'urgence locaux.</p>
      </div>

      <Card className="border-destructive bg-destructive/5">
        <CardHeader>
          <CardTitle>Contacts d'urgence</CardTitle>
          <CardDescription>Appelez ces numéros en cas d'urgence.</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
            <Button size="lg" variant="destructive" asChild>
                <a href="tel:112">
                    <Phone className="mr-2 h-5 w-5"/>
                    Appeler le 112 (Urgence Locale)
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <a href="tel:0800595959">
                    <Phone className="mr-2 h-5 w-5"/>
                     Centre Antipoison
                </a>
            </Button>
        </CardContent>
        <CardContent>
            <p className="text-xs text-muted-foreground">
                {location ? `Votre position approximative : Lat ${location.lat.toFixed(2)}, Lon ${location.lon.toFixed(2)}` : error || "Obtention de votre position..."}
            </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-2">Protocoles de premiers secours</h2>
        <Accordion type="single" collapsible className="w-full">
            {firstAidProtocols.map(protocol => (
                 <AccordionItem key={protocol.title} value={protocol.title}>
                    <AccordionTrigger className="text-left">{protocol.title}</AccordionTrigger>
                    <AccordionContent>
                        <p className="whitespace-pre-line">{protocol.content}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
