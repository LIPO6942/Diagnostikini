/**
 * @fileoverview Placeholder component for the interactive map.
 */
"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import type { Doctor } from "@/constants/doctors";

declare global {
  interface Window { google?: any }
  namespace google {
    namespace maps {
      type Map = any;
      type Marker = any;
      type LatLngLiteral = { lat: number; lng: number };
      namespace marker { type AdvancedMarkerElement = any }
    }
  }
}

interface DoctorMapProps {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
}

export function DoctorMap({ doctors, selectedDoctor }: DoctorMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markers = useRef<google.maps.Marker[]>([]);

  const initializeMap = (center: google.maps.LatLngLiteral) => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 12,
        mapId: "DOCTOR_MAP_ID"
      });
    }
  };

  useEffect(() => {
    const tunisCoords = { lat: 36.8065, lng: 10.1815 };

    if (window.google && window.google.maps) {
      initializeMap(tunisCoords);
      return;
    }

    // Check if the script is already being loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    (window as any).initMap = () => initializeMap(tunisCoords);

    document.head.appendChild(script);

    return () => {
      // The script is now loaded globally, so we don't remove it on cleanup.
      // We can remove the initMap callback though.
      if ((window as any).initMap) {
        (window as any).initMap = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstance.current || !window.google) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.setMap(null));
    markers.current = [];

    // Add new markers
    doctors.forEach(doctor => {
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map: mapInstance.current,
        position: doctor.location,
        title: doctor.name,
      });
      markers.current.push(marker as unknown as google.maps.Marker);
    });
  }, [doctors]);

  useEffect(() => {
    if (selectedDoctor && mapInstance.current) {
      mapInstance.current.panTo(selectedDoctor.location);
      mapInstance.current.setZoom(15);
    }
  }, [selectedDoctor]);
  
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <Card className="h-full w-full">
        <CardContent className="p-0 h-full w-full flex items-center justify-center bg-muted/50 rounded-lg">
          <div className="text-center text-muted-foreground">
            <MapPin className="mx-auto h-12 w-12 mb-4" />
            <p className="font-semibold">Carte des médecins</p>
            <p className="text-sm max-w-xs mx-auto">
              La carte interactive apparaîtra ici. Une clé API Google Maps est nécessaire pour l'affichage.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full w-full">
        <div ref={mapRef} className="w-full h-full rounded-lg" />
    </Card>
  );
}
