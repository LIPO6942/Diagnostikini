/**
 * @fileoverview Component for displaying a single doctor's information card.
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Map, Clock, Navigation } from "lucide-react";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  address: string;
  hours: string;
};

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(doctor.address)}`;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <a href={`tel:${doctor.phone}`} className="hover:underline">
            {doctor.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Map className="w-4 h-4 text-muted-foreground" />
          <span>{doctor.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span>{doctor.hours}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 justify-end">
        <Button asChild>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Navigation className="mr-2 h-4 w-4" />
            Itinéraire
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
