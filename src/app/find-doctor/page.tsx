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
import { doctors, specialties, cities, type Doctor } from "@/constants/doctors";
import { DoctorCard } from "@/components/find-doctor/doctor-card";
import { DoctorMap } from "@/components/find-doctor/doctor-map";

export default function FindDoctorPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
        const specialtyMatch = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
        const cityMatch = selectedCity === "all" || doctor.city === selectedCity;
        return specialtyMatch && cityMatch;
    });
  }, [selectedSpecialty, selectedCity]);

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
            Filtrer votre recherche
          </CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          <Select onValueChange={setSelectedSpecialty} defaultValue="all">
            <SelectTrigger>
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
          <Select onValueChange={setSelectedCity} defaultValue="all">
            <SelectTrigger>
                <SelectValue placeholder="Toutes les zones" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Toutes les zones</SelectItem>
                {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                        {city}
                    </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4 max-h-[calc(100vh-18rem)] overflow-y-auto pr-2">
            <h2 className="text-xl font-bold">Résultats ({filteredDoctors.length})</h2>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor}
                isSelected={selectedDoctor?.id === doctor.id}
                onClick={() => setSelectedDoctor(doctor)}
              />
            ))
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Aucun médecin trouvé pour cette sélection.
            </p>
          )}
        </div>
        <div className="lg:sticky lg:top-8 h-96 lg:h-[calc(100vh-8rem)]">
          <DoctorMap doctors={filteredDoctors} selectedDoctor={selectedDoctor} />
        </div>
      </div>
    </div>
  );
}
