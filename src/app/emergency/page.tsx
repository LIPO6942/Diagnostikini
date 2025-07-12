"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Siren } from "lucide-react";
import { useEffect, useState } from "react";

const firstAidProtocols = [
  {
    title: "CPR (Cardiopulmonary Resuscitation)",
    content: "1. Call emergency services. 2. Place the heel of one hand on the center of the chest. 3. Push hard and fast at a rate of 100-120 compressions per minute. 4. If trained, give 2 rescue breaths after 30 compressions."
  },
  {
    title: "Choking",
    content: "1. Encourage the person to cough. 2. Give 5 back blows between the shoulder blades. 3. Perform 5 abdominal thrusts (Heimlich maneuver). 4. Alternate between back blows and abdominal thrusts."
  },
  {
    title: "Severe Bleeding",
    content: "1. Call emergency services. 2. Apply direct pressure to the wound with a clean cloth. 3. If possible, elevate the limb above the heart. 4. Do not remove any objects from the wound."
  },
  {
    title: "Burn",
    content: "1. Cool the burn with cool (not cold) running water for 10-20 minutes. 2. Cover the burn with a sterile, non-adhesive bandage. 3. Do not apply ice, butter, or ointments. 4. For severe burns, seek immediate medical attention."
  }
];


export default function EmergencyPage() {
    const [location, setLocation] = useState<{lat: number, lon: number} | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                (err) => {
                    setError("Unable to retrieve location. Please enable location services.");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);
    
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
