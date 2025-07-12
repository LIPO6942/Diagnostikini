/**
 * @fileoverview This file contains mock data for doctors and specialties.
 * It serves as a template to be populated with real data.
 */

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  address: string;
  city: string;
  hours: string;
  location: {
    lat: number;
    lng: number;
  };
};

export const specialties = [
  "Généraliste",
  "Pédiatre",
  "Gynécologue",
  "Cardiologue",
  "ORL",
  "Dentiste",
  "Dermatologue",
  "Ophtalmologue",
  "Neurologue",
  "Urologue",
  "Rhumatologue",
  "Psychiatre",
  "Gastro-entérologue",
  "Pneumologue",
  "Endocrinologue"
];

// MODÈLE : Remplacez ces données d'exemple par les informations réelles des médecins.
// Assurez-vous que chaque 'id' est unique.
// Pour trouver les coordonnées (lat, lng), vous pouvez utiliser un outil en ligne comme https://www.latlong.net/
export const doctors: Doctor[] = [
  {
    id: "doc1",
    name: "Dr. Ahmed Ben Ali (Exemple)",
    specialty: "Généraliste",
    phone: "+216 71 123 456",
    address: "123 Rue de la Liberté, Tunis",
    city: "Tunis",
    hours: "Lundi - Vendredi, 9:00 - 17:00",
    location: { lat: 36.809, lng: 10.18 },
  },
  {
    id: "doc2",
    name: "Dr. Fatma Sassi (Exemple)",
    specialty: "Pédiatre",
    phone: "+216 71 234 567",
    address: "45 Avenue Habib Bourguiba, Tunis",
    city: "Tunis",
    hours: "Mardi, Jeudi, 9:00 - 18:00",
    location: { lat: 36.800, lng: 10.185 },
  },
  {
    id: "doc3",
    name: "Dr. Youssef Trabelsi (Exemple)",
    specialty: "Cardiologue",
    phone: "+216 71 345 678",
    address: "Clinique El Manar, Tunis",
    city: "Tunis",
    hours: "Lundi - Samedi, 8:00 - 16:00",
    location: { lat: 36.83, lng: 10.15 },
  },
  {
    id: "doc4",
    name: "Dr. Amira Bouaziz (Exemple)",
    specialty: "Gynécologue",
    phone: "+216 73 456 789",
    address: "10 Rue de l'Indépendance, Sousse",
    city: "Sousse",
    hours: "Lundi, Mercredi, Vendredi, 10:00 - 19:00",
    location: { lat: 35.825, lng: 10.641 },
  },
  {
    id: "doc5",
    name: "Dr. Karim Zied (Exemple)",
    specialty: "ORL",
    phone: "+216 71 567 890",
    address: "22 Rue de Carthage, Tunis",
    city: "Tunis",
    hours: "Mardi - Samedi, 9:00 - 17:00",
    location: { lat: 36.79, lng: 10.18 },
  },
];


export const cities = [...new Set(doctors.map(doc => doc.city))].sort();
