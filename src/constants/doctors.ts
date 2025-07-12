/**
 * @fileoverview This file contains mock data for doctors and specialties.
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
];

export const doctors: Doctor[] = [
  {
    id: "doc1",
    name: "Dr. Ahmed Ben Ali",
    specialty: "Généraliste",
    phone: "+216 71 123 456",
    address: "123 Rue de la Liberté, Tunis",
    city: "Tunis",
    hours: "Lundi - Vendredi, 9:00 - 17:00",
    location: { lat: 36.809, lng: 10.18 },
  },
  {
    id: "doc2",
    name: "Dr. Fatma Sassi",
    specialty: "Pédiatre",
    phone: "+216 71 234 567",
    address: "45 Avenue Habib Bourguiba, Tunis",
    city: "Tunis",
    hours: "Mardi, Jeudi, 9:00 - 18:00",
    location: { lat: 36.800, lng: 10.185 },
  },
  {
    id: "doc3",
    name: "Dr. Youssef Trabelsi",
    specialty: "Cardiologue",
    phone: "+216 71 345 678",
    address: "Clinique El Manar, Tunis",
    city: "Tunis",
    hours: "Lundi - Samedi, 8:00 - 16:00",
    location: { lat: 36.83, lng: 10.15 },
  },
  {
    id: "doc4",
    name: "Dr. Amira Bouaziz",
    specialty: "Gynécologue",
    phone: "+216 73 456 789",
    address: "10 Rue de l'Indépendance, Sousse",
    city: "Sousse",
    hours: "Lundi, Mercredi, Vendredi, 10:00 - 19:00",
    location: { lat: 35.825, lng: 10.641 },
  },
  {
    id: "doc5",
    name: "Dr. Karim Zied",
    specialty: "ORL",
    phone: "+216 71 567 890",
    address: "22 Rue de Carthage, Tunis",
    city: "Tunis",
    hours: "Mardi - Samedi, 9:00 - 17:00",
    location: { lat: 36.79, lng: 10.18 },
  },
    {
    id: "doc6",
    name: "Dr. Sana Khemiri",
    specialty: "Dentiste",
    phone: "+216 72 678 901",
    address: "55 Rue des Palmiers, Nabeul",
    city: "Nabeul",
    hours: "Lundi - Vendredi, 8:30 - 17:30",
    location: { lat: 36.456, lng: 10.735 },
  },
  {
    id: "doc7",
    name: "Dr. Mehdi Chebbi",
    specialty: "Dermatologue",
    phone: "+216 71 789 012",
    address: "8 Rue de la Marsa, La Marsa",
    city: "La Marsa",
    hours: "Lundi, Mercredi, 14:00 - 20:00",
    location: { lat: 36.877, lng: 10.325 },
  },
  {
    id: "doc8",
    name: "Dr. Nadia Gharbi",
    specialty: "Généraliste",
    phone: "+216 71 890 123",
    address: "33 Avenue Charles de Gaulle, Tunis",
    city: "Tunis",
    hours: "Lundi - Samedi, 8:00 - 13:00",
    location: { lat: 36.805, lng: 10.182 },
  },
];

export const cities = [...new Set(doctors.map(doc => doc.city))];
