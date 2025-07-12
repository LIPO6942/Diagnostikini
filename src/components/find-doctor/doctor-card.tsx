/**
 * @fileoverview Component for displaying a single doctor's information card.
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Doctor } from "@/constants/doctors";
import { Phone, Map, Clock, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";


interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
    const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.address)}`;
  
  return (
    <Card 
      className="transition-all hover:shadow-md flex flex-col"
    >
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm flex-grow">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <a href={`tel:${doctor.phone}`} className="hover:underline" onClick={(e) => e.stopPropagation()}>
            {doctor.phone}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Map className="w-4 h-4 text-muted-foreground mt-1" />
          <span>{doctor.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span>{doctor.hours}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 justify-end">
        <Button asChild onClick={(e) => e.stopPropagation()}>
          <a href={googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
            <Navigation className="mr-2 h-4 w-4" />
            Itinéraire
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
