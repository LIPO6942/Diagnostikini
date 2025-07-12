/**
 * @fileoverview Page for finding doctors by specialty and location.
 */
"use client";

import { useState, useMemo } from "react";
import { MapPin, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { doctors, specialties } from "@/constants/doctors";
import { DoctorCard } from "@/components/find-doctor/doctor-card";
import { DoctorMap } from "@/components/find-doctor/doctor-map";

export default function FindDoctorPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredDoctors = useMemo(() => {
    if (selectedSpecialty === "all") {
      return doctors;
    }
    return doctors.filter((doctor) => doctor.specialty === selectedSpecialty);
  }, [selectedSpecialty]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <MapPin className="w-8 h-8 text-primary" />
          Trouver un médecin
        </h1>
        <p className="text-muted-foreground">
          Recherchez des professionnels de santé près de chez vous.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Filtrer par spécialité
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setSelectedSpecialty} defaultValue="all">
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Toutes les spécialités" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les spécialités</SelectItem>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Résultats ({filteredDoctors.length})</h2>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Aucun médecin trouvé pour cette spécialité.
            </p>
          )}
        </div>
        <div className="lg:sticky lg:top-8 h-96 lg:h-[calc(100vh-8rem)]">
          <DoctorMap />
        </div>
      </div>
    </div>
  );
}
