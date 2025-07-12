/**
 * @fileoverview A hook for retrieving user's geolocation.
 */
import { useState, useEffect } from 'react';

type Geolocation = {
  lat: number;
  lon: number;
};

export function useGeolocation() {
  const [location, setLocation] = useState<Geolocation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError('Impossible de récupérer la position. Veuillez activer les services de localisation.');
        }
      );
    } else {
      setError('La géolocalisation n\'est pas prise en charge par ce navigateur.');
    }
  }, []);

  return { location, error };
}
