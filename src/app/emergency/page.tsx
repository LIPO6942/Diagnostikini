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
            Emergency Mode
        </h1>
        <p className="text-muted-foreground">Quick access to first aid and local emergency numbers.</p>
      </div>

      <Card className="border-destructive bg-destructive/5">
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
          <CardDescription>Call these numbers in case of an emergency.</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
            <Button size="lg" variant="destructive" asChild>
                <a href="tel:911">
                    <Phone className="mr-2 h-5 w-5"/>
                    Call 911 (or Local Emergency)
                </a>
            </Button>
            <Button size="lg" variant="outline">
                <a href="tel:1-800-222-1222">
                    <Phone className="mr-2 h-5 w-5"/>
                     Poison Control
                </a>
            </Button>
        </CardContent>
        <CardContent>
            <p className="text-xs text-muted-foreground">
                {location ? `Your approximate location: Lat ${location.lat.toFixed(2)}, Lon ${location.lon.toFixed(2)}` : error || "Getting your location..."}
            </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-2">First Aid Protocols</h2>
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
