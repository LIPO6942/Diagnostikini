/**
 * @fileoverview Placeholder component for the interactive map.
 */
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function DoctorMap() {
  return (
    <Card className="h-full w-full">
      <CardContent className="p-0 h-full w-full flex items-center justify-center bg-muted/50 rounded-lg">
        <div className="text-center text-muted-foreground">
          <MapPin className="mx-auto h-12 w-12 mb-4" />
          <p className="font-semibold">Carte des médecins</p>
          <p className="text-sm">
            La carte interactive apparaîtra ici.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
