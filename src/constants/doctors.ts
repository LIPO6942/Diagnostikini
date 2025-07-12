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
  "Urologie",
  "Stomatologie",
  "Rhumatologie",
  "Radiologie",
  "Psychiatrie",
  "Pneumologie",
  "Pediatrie",
  "Parasitologie",
  "Ophtalmologie",
  "O R L",
  "Nutrition",
  "Non classe",
  "Neurologie",
  "Neuro-chirurgie",
  "Nephrologie",
  "Medecine physique",
  "Medecine legale",
  "Medecine interne",
  "Maladies infectieuses",
  "Hematologie",
  "Gynecologie-obstetrique",
  "Gastrologie",
  "Endocrinologie",
  "Dermatologie",
  "Chirurgie plastique",
  "Chirurgie orthopedique",
  "Chirurgie maxillo-faciale",
  "Chirurgie infantile",
  "Chirurgie generale",
  "Chi. cardiovasculaire t",
  "Cardiologie",
  "Carcinologie medicale",
  "Biologie clinique",
  "Anesthesie-reanimation",
  "Anatomie-pathologie",
  "Radiotherapie",
  "Histologie embryologie",
  "Medecine nucleaire",
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
        "id": "doc1",
        "name": "Dr. Mohamed TRIFA",
        "specialty": "Urologie",
        "phone": "74406601",
        "address": "RUE M'HAMED CHAABOOUNI OLFA PLACE ESC G SFAX, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc2",
        "name": "Dr. Samir SMAOUI",
        "specialty": "Urologie",
        "phone": "71519600",
        "address": "BARDO CENTER LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc3",
        "name": "Dr. Chahir MHIRI",
        "specialty": "Urologie",
        "phone": "72221125",
        "address": "PLACE 7 NOVEMBRE IMM EL JARRA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc4",
        "name": "Dr. Youssef LETAIEF",
        "specialty": "Urologie",
        "phone": "74211600",
        "address": "MEDINA CENTER DEBUT RIOUTE DE GREMDA ESC B, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc5",
        "name": "Dr. Mohamed Sami KARRAY",
        "specialty": "Urologie",
        "phone": "77220300",
        "address": "IMM MONTPLAISIR  MEDICAL A COTE DE LA CLINIQUE MEN, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc6",
        "name": "Dr. Faouzi Ben Said HADJ KACEM",
        "specialty": "Urologie",
        "phone": "76225625",
        "address": "24 AV. IBN JAZZAR, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc7",
        "name": "Dr. Mounir EL OUAKDI",
        "specialty": "Urologie",
        "phone": "71885000",
        "address": "CLINIQUE EL MANAR 3, RUE 7209, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc8",
        "name": "Dr. Neil CHELBI",
        "specialty": "Urologie",
        "phone": "71748341",
        "address": "COMPLEXE LE FORUM ARIANA 1, AV. DE CARTHAGE, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc9",
        "name": "Dr. Maher BEN TIBA",
        "specialty": "Urologie",
        "phone": "71294357",
        "address": "75 AV. SALAMBO APP 10 ET 3, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc10",
        "name": "Dr. Lotfi BEN HASSINE",
        "specialty": "Urologie",
        "phone": "71578208",
        "address": "6, RUE 3 AOUT 1903, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc11",
        "name": "Dr. Anas BARRAK",
        "specialty": "Urologie",
        "phone": "71842500",
        "address": "8, RUE APOLIO 11 CITE M'HRAJENE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc12",
        "name": "Dr. Jamel AMMAR",
        "specialty": "Urologie",
        "phone": "74299420",
        "address": "IMM. INTILAKA BLOC A3, RUE HAFF, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc13",
        "name": "Dr. Taoufik TELLISSI",
        "specialty": "Stomatologie",
        "phone": "72276829",
        "address": "6, RUE LAGHA, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc14",
        "name": "Dr. Nejib KHARRAT",
        "specialty": "Stomatologie",
        "phone": "71784124",
        "address": "8, RUE M'HDIA 1006-TUNIS, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc15",
        "name": "Dr. Rami CHEIKHROUHOU",
        "specialty": "Stomatologie",
        "phone": "74406000",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC A NÂ°14, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc16",
        "name": "Dr. Riadh ZHIOUA",
        "specialty": "Rhumatologie",
        "phone": "71505108",
        "address": "AV. 20 MARS LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc17",
        "name": "Dr. Mohamed Zouhair SAKKA",
        "specialty": "Rhumatologie",
        "phone": "73227966",
        "address": "RUE IBN EL JAZZAR SOUSSE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc18",
        "name": "Dr. Ezzet MAALEJ",
        "specialty": "Rhumatologie",
        "phone": "72431288",
        "address": "47 AV. 2 MARS 1934, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc19",
        "name": "Dr. Chahira Daoud KOLSI",
        "specialty": "Rhumatologie",
        "phone": "",
        "address": "CENTRE DE DIALYSE LINADIAL - CITE ZARROUK, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc20",
        "name": "Dr. Abdelkader KHARRAT",
        "specialty": "Rhumatologie",
        "phone": "74400023",
        "address": "AV. DES MARTYRS IMM PALMARIUM, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc21",
        "name": "Dr. M'hamed HAMZA",
        "specialty": "Rhumatologie",
        "phone": "71801100",
        "address": "CLINIQUE GENERALE ET CARDIO-VASCULAIRE DE TUNIS (I VOIE X2, EL KHADRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc22",
        "name": "Dr. Abdelhamid HACHICHA",
        "specialty": "Rhumatologie",
        "phone": "71347347",
        "address": "6, RUE SALONIQUE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc23",
        "name": "Dr. Sami EL MEDDEB",
        "specialty": "Rhumatologie",
        "phone": "78454294",
        "address": "18 AV. DE FRANCE, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc24",
        "name": "Dr. Hatem DAMAK",
        "specialty": "Rhumatologie",
        "phone": "71709393",
        "address": "5, AV. TAIEB M'HIRI RESIDENCE ERRIDHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc25",
        "name": "Dr. Mohamed Bechir BEN LAMINE",
        "specialty": "Rhumatologie",
        "phone": "71333838",
        "address": "5 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc26",
        "name": "Dr. Abdellatif BEN AMOR",
        "specialty": "Rhumatologie",
        "phone": "71288371",
        "address": "8, RUE DU CANADA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc27",
        "name": "Dr. Nizar BACHROUCH",
        "specialty": "Rhumatologie",
        "phone": "72362461",
        "address": "9 AV. H.THAMEUR NABEUL, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc28",
        "name": "Dr. Mohamed Mondher ABDELKEFI",
        "specialty": "Rhumatologie",
        "phone": "71794090",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc29",
        "name": "Dr. Kais ZAANOUNI",
        "specialty": "Radiologie",
        "phone": "71793052",
        "address": "4, RUE IMMAM EL RASSAA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc30",
        "name": "Dr. Mondher TRIKI",
        "specialty": "Radiologie",
        "phone": "74406420",
        "address": "AV. DES MARTYRS IMM PALMARIUM, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc31",
        "name": "Dr. Wahid SMAOUI",
        "specialty": "Radiologie",
        "phone": "74211869",
        "address": "57, RUE HAFFOUZ, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc32",
        "name": "Dr. Aziz Lotfi SLIM",
        "specialty": "Radiologie",
        "phone": "72444411",
        "address": "18 AV. FARHAT HACHED BIZERTE CENTER, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc33",
        "name": "Dr. Mohamed Ben Hamouda SELLAMI",
        "specialty": "Radiologie",
        "phone": "72796792",
        "address": "116, AV. TAIEB MHIRI - GAMMARTH, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc34",
        "name": "Dr. Adel ROBBANA",
        "specialty": "Radiologie",
        "phone": "71349265",
        "address": "17, RUE CHARLES DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc35",
        "name": "Dr. Hichem MSEDDI",
        "specialty": "Radiologie",
        "phone": "74224167",
        "address": "40, RUE MOUSSA CITE JARDIN, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc36",
        "name": "Dr. Mohsen Toumi MISSAOUI",
        "specialty": "Radiologie",
        "phone": "73440066",
        "address": "AV. HABIB BOURGUIBA, SIDI BOUZID EST",
        "city": "SIDI BOUZID",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.03,
            "lng": 9.48
        }
    },
    {
        "id": "doc37",
        "name": "Dr. Rim Masmoudi MAHJOUB",
        "specialty": "Radiologie",
        "phone": "71885856",
        "address": "COLISEE SAULE ESC A, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc38",
        "name": "Dr. Ridha LAMINE",
        "specialty": "Radiologie",
        "phone": "72444717",
        "address": "RUE IBN KHALDOUN IMMM DE LHORLOGE, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc39",
        "name": "Dr. Maan KHALILI",
        "specialty": "Radiologie",
        "phone": "72272158",
        "address": "1, RUE SIDI MAAOUIA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc40",
        "name": "Dr. Maher KETATA",
        "specialty": "Radiologie",
        "phone": "74236104",
        "address": "CLINIQUE ENNAJDA RTE MENZEL CHAKER KM 0,5, SFAX OUEST",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.73,
            "lng": 10.68
        }
    },
    {
        "id": "doc41",
        "name": "Dr. Haikel KCHOUK",
        "specialty": "Radiologie",
        "phone": "71843685",
        "address": "37, RUE DU NIGER TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc42",
        "name": "Dr. Mohamed KARRAY",
        "specialty": "Radiologie",
        "phone": "71284648",
        "address": "97, RUE DE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc43",
        "name": "Dr. Chadli KALLALA",
        "specialty": "Radiologie",
        "phone": "73210374",
        "address": "CLINIQUE ESSALEM, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc44",
        "name": "Dr. Khalil Riadh HAMZA",
        "specialty": "Radiologie",
        "phone": "71884567",
        "address": "5, AV. TAHAR BEN AMMAR EL MANNAR 2, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc45",
        "name": "Dr. Bechir HADDOUK",
        "specialty": "Radiologie",
        "phone": "74404700",
        "address": "IMM. FARABI AV. 7 NOVEMBRE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc46",
        "name": "Dr. Ahmed GHRAB",
        "specialty": "Radiologie",
        "phone": "71793706",
        "address": "CENTRE GAMMA 44-46 AV. DE LA LIBERTE TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc47",
        "name": "Dr. Khelil Hafedh GHALLOUSSI",
        "specialty": "Radiologie",
        "phone": "72222917",
        "address": "AV. HABIB BOURGUIBA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc48",
        "name": "Dr. Ridha FRIAA",
        "specialty": "Radiologie",
        "phone": "75690090",
        "address": "12 AV. 20 MARS ZARZIS, ZARZIS",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.5,
            "lng": 11.11
        }
    },
    {
        "id": "doc49",
        "name": "Dr. Nejib DJEMAL",
        "specialty": "Radiologie",
        "phone": "74215339",
        "address": "49, RUE TAHAR SFAR, AGAREB",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.73,
            "lng": 10.45
        }
    },
    {
        "id": "doc50",
        "name": "Dr. Khadija Ben Mrad DEBBICHE",
        "specialty": "Radiologie",
        "phone": "71583635",
        "address": "AV. HABIB BOURGUIBA BLOC C1ER ET, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc51",
        "name": "Dr. Anas CHEBBI",
        "specialty": "Radiologie",
        "phone": "71426890",
        "address": "62 AV. DE PARIS, MEGRINE",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.23
        }
    },
    {
        "id": "doc52",
        "name": "Dr. Jaouher BOUZGUENDA",
        "specialty": "Radiologie",
        "phone": "74404577",
        "address": "AV. 7 NOVEMBRE IMM. IBN KHALDOUN ESC E, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc53",
        "name": "Dr. Mohamed Imed BOUHEJBA",
        "specialty": "Radiologie",
        "phone": "71323258",
        "address": "17, RUE CHARLES DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc54",
        "name": "Dr. Tahar BOUCHAMI",
        "specialty": "Radiologie",
        "phone": "71704534",
        "address": "4, AV. TAIEB M'HIRI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc55",
        "name": "Dr. Chiheb BEN ZEKRI",
        "specialty": "Radiologie",
        "phone": "71292002",
        "address": "10, AV. HABIB BOURGUIBA \"LE FORUM\" CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc56",
        "name": "Dr. Mohamed BEN MERIEM",
        "specialty": "Radiologie",
        "phone": "71223381",
        "address": "25 AV. DE LINDEPENDANCE, MANOUBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.09
        }
    },
    {
        "id": "doc57",
        "name": "Dr. Khaled BEN CHEIKH EL BADRANI",
        "specialty": "Radiologie",
        "phone": "71259256",
        "address": "GALERIE MARCHANDE BLOC B, ZAGHOUAN",
        "city": "ZAGHOUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.4,
            "lng": 10.14
        }
    },
    {
        "id": "doc58",
        "name": "Dr. Insaf BELLAGHA",
        "specialty": "Radiologie",
        "phone": "71843685",
        "address": "37, RUE DU NIGER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc59",
        "name": "Dr. Latifa Belhadj BACHROUCH",
        "specialty": "Radiologie",
        "phone": "72345325",
        "address": "1, RUE GHANDI, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc60",
        "name": "Dr. Mohamed Naceur ARNOUNI",
        "specialty": "Radiologie",
        "phone": "72433254",
        "address": "18 AV. FARHAT HACHED BIZERTE CENTER, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc61",
        "name": "Dr. Faouzi ABSI",
        "specialty": "Radiologie",
        "phone": "72420314",
        "address": "102, IMM DE LHORLOGE - RUE IBN KHALDOUN, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc62",
        "name": "Dr. Khaled ABDELMAGID",
        "specialty": "Radiologie",
        "phone": "71796792",
        "address": "44 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc63",
        "name": "Dr. Jamel TURKI",
        "specialty": "Psychiatrie",
        "phone": "7426056",
        "address": "RUE H. MAAZOUN IMM.TAPARURA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc64",
        "name": "Dr. Ahmed TANAZEFTI",
        "specialty": "Psychiatrie",
        "phone": "71343600",
        "address": "28, RUE  CHARLES DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc65",
        "name": "Dr. Mounir SOUSSI",
        "specialty": "Psychiatrie",
        "phone": "71336879",
        "address": "18, RUE M'HAMED ALI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc66",
        "name": "Dr. Maria Jose Picot Gonzales RIANI",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "AV. MHAMED MAAROUF IMM.GLOULOU, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc67",
        "name": "Dr. Marina Loulitch Koukni M'RAD",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "41, RUE M. SLIM -, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc68",
        "name": "Dr. Mohamed Nejib MEZGHENI",
        "specialty": "Psychiatrie",
        "phone": "71871378",
        "address": "8, RUE IBN ITTAB, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc69",
        "name": "Dr. Mohamed Habib LEDJERI",
        "specialty": "Psychiatrie",
        "phone": "71252618",
        "address": "50, AV. BAB JEDID, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc70",
        "name": "Dr. Kamel KHALFALLAH",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "27, BLD BAB MENARA 1008-TUNIS, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc71",
        "name": "Dr. Msaddek JEBLOUN",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "BARDO CENTER IMM 4 APP 10 LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc72",
        "name": "Dr. Yassine HARRABI",
        "specialty": "Psychiatrie",
        "phone": "75654300",
        "address": "DJERBA, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc73",
        "name": "Dr. Mongi GUETARI",
        "specialty": "Psychiatrie",
        "phone": "72287223",
        "address": "3 AV. H. THAMEUR, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc74",
        "name": "Dr. Taieb GHODHBANE",
        "specialty": "Psychiatrie",
        "phone": "71888638",
        "address": "RESIDENCE LES JASMINS BLOC A RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc75",
        "name": "Dr. Mohamed EL MECHAT",
        "specialty": "Psychiatrie",
        "phone": "71280130",
        "address": "12, RUE SENEGAL, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc76",
        "name": "Dr. Salim BOULILA",
        "specialty": "Psychiatrie",
        "phone": "71750282",
        "address": "CENTRE  MEDICAL EL FARABI RUE CHEIKH MED,ZAGHOUAN EL MENZEH 6 1er ETAGE N B16 EL MENZAH VI, EL MENZAH VI",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.85,
            "lng": 10.16
        }
    },
    {
        "id": "doc77",
        "name": "Dr. Skander BOUKHARI",
        "specialty": "Psychiatrie",
        "phone": "71332902",
        "address": "25 AV. DE PARIS -, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc78",
        "name": "Dr. Mohamed BESBES",
        "specialty": "Psychiatrie",
        "phone": "71872814",
        "address": "DELTA MEDICAL RUE 7151 - EL MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc79",
        "name": "Dr. Chebil BEN DHIA",
        "specialty": "Psychiatrie",
        "phone": "73226626",
        "address": "1, AV. LEOPOLD SEDAR SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc80",
        "name": "Dr. Samir AYADI",
        "specialty": "Psychiatrie",
        "phone": "74404098",
        "address": "AV. DES MARTYRS LES GALERIES, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc81",
        "name": "Dr. Zouhair AISSA",
        "specialty": "Psychiatrie",
        "phone": "71438400",
        "address": "10, AV. HABIB BOURGUIBA CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc82",
        "name": "Dr. Faiza ABBASSI",
        "specialty": "Psychiatrie",
        "phone": "74401957",
        "address": "AV. 7 NOVEMBRE IM RAYAN SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc83",
        "name": "Dr. Hassen ZARROUK",
        "specialty": "Pneumologie",
        "phone": "72346703",
        "address": "22 AV. DE LA REPUBLIQUE MENZEL TEMIME, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc84",
        "name": "Dr. Abderrahmen TEBOURBI",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "7, RUE DES JAMINS, JENDOUBA SUD",
        "city": "JENDOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.5,
            "lng": 8.78
        }
    },
    {
        "id": "doc85",
        "name": "Dr. Mohamed SMAOUI",
        "specialty": "Pneumologie",
        "phone": "74226425",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC \"A\" SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc86",
        "name": "Dr. Chama Ben Romdhane RABOUDI",
        "specialty": "Pneumologie",
        "phone": "71849282",
        "address": "44 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc87",
        "name": "Dr. Nabil OMEZZINE",
        "specialty": "Pneumologie",
        "phone": "73680705",
        "address": "IMM CHEBBI AV. DU MARS 1934, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc88",
        "name": "Dr. Mohamed MEHDI",
        "specialty": "Pneumologie",
        "phone": "78221876",
        "address": "7, RUE M. SLIM, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc89",
        "name": "Dr. Mohamed Mokhles MARZOUKI",
        "specialty": "Pneumologie",
        "phone": "73224104",
        "address": "RUE A. BELHAOUANE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc90",
        "name": "Dr. Haifa Loussaief LAARIBI",
        "specialty": "Pneumologie",
        "phone": "71700400",
        "address": "4, AV. TAIEB M'HIRI 3EME ETAGE, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc91",
        "name": "Dr. Mohamed Hichem KOUBAJI",
        "specialty": "Pneumologie",
        "phone": "72421733",
        "address": "73, RUE IBN KHALDOUN BIZERTE CENTER 1ER ETAGE NÂ°2, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc92",
        "name": "Dr. Radhouane KAMMOUN",
        "specialty": "Pneumologie",
        "phone": "74228806",
        "address": "RUE HAFFOUZ IMM. INTILAKA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc93",
        "name": "Dr. Mohamed Rached HELIOUI",
        "specialty": "Pneumologie",
        "phone": "71493646",
        "address": "28, RUE  CHARLES DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc94",
        "name": "Dr. Jaleddine HADDOUSSA",
        "specialty": "Pneumologie",
        "phone": "72230666",
        "address": "1, RUE ALGER, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc95",
        "name": "Dr. Brahim GHARBI",
        "specialty": "Pneumologie",
        "phone": "71321516",
        "address": "12, RUE ESPAGNE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc96",
        "name": "Dr. Samir FEJJI",
        "specialty": "Pneumologie",
        "phone": "77233888",
        "address": "45, RUE DU 2 MARS 1934,, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc97",
        "name": "Dr. Fethi FAKHFAKH",
        "specialty": "Pneumologie",
        "phone": "74222210",
        "address": "AV. 7 NOVEMBRE IMM. EL FARABI, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc98",
        "name": "Dr. Paulette Bourgeois EL MABROUK",
        "specialty": "Pneumologie",
        "phone": "72432680",
        "address": "22, RUE ALGERIE, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc99",
        "name": "Dr. Lotfi EL AGREBI",
        "specialty": "Pneumologie",
        "phone": "71546161",
        "address": "17AV. ENNAKHIL EZZAHROUNI, HRAIRIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.1
        }
    },
    {
        "id": "doc100",
        "name": "Dr. Abdelfattah DJEMAL",
        "specialty": "Pneumologie",
        "phone": "71354065",
        "address": "6 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc101",
        "name": "Dr. Leila Ouerchfani DAOUSSI",
        "specialty": "Pneumologie",
        "phone": "71493340",
        "address": "2 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc102",
        "name": "Dr. Mustapha CHENITI",
        "specialty": "Pneumologie",
        "phone": "71241930",
        "address": "33 AV. H. THAMEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc103",
        "name": "Dr. Lotfi BOUACHIR",
        "specialty": "Pneumologie",
        "phone": "72285022",
        "address": "113 AV. HABIB BOURGUIBA IMM DAOUD 2ETAGE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc104",
        "name": "Dr. Mohamed BEN SAAD",
        "specialty": "Pneumologie",
        "phone": "73228112",
        "address": "1, AV. LEOPOLD SEDAR SENGHOR IMM. BEN SAAD, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc105",
        "name": "Dr. Mohamed Naceur BEN ABDESSALEM",
        "specialty": "Pneumologie",
        "phone": "75620493",
        "address": "4, RUE M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc106",
        "name": "Dr. Faycal BALI",
        "specialty": "Pneumologie",
        "phone": "75274110",
        "address": "59 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc107",
        "name": "Dr. M'hamed ACHACHE",
        "specialty": "Pneumologie",
        "phone": "73220300",
        "address": "RUE SALAH SAAD, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc108",
        "name": "Dr. Adel ZOUARI",
        "specialty": "Pediatrie",
        "phone": "74216111",
        "address": "CENTRE IBN NAFIS ESC E RTE DE TUNIS KM4, SAKIET EZZIT",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.78,
            "lng": 10.75
        }
    },
    {
        "id": "doc109",
        "name": "Dr. Chokri ZARROUK",
        "specialty": "Pediatrie",
        "phone": "71663045",
        "address": "3, RUE EGLANTINES, EZZOUHOUR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.12
        }
    },
    {
        "id": "doc110",
        "name": "Dr. Mahmoud ZAOUI",
        "specialty": "Pediatrie",
        "phone": "71782284",
        "address": "66, RUE N. PACHA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc111",
        "name": "Dr. Essia Hammami TURKI",
        "specialty": "Pediatrie",
        "phone": "71513319",
        "address": "131 AV. DU 20 MARS 1956, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc112",
        "name": "Dr. Abdelaziz TLILI",
        "specialty": "Pediatrie",
        "phone": "71249680",
        "address": "9, RUE DANGLETERRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc113",
        "name": "Dr. Mourad SOUISSI",
        "specialty": "Pediatrie",
        "phone": "71706315",
        "address": "7, AV. HABIB BOURGUIBA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc114",
        "name": "Dr. Ahmed SIALA",
        "specialty": "Pediatrie",
        "phone": "74223000",
        "address": "36, AV. V. HUGO, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc115",
        "name": "Dr. Faten Bibi SAIDI",
        "specialty": "Pediatrie",
        "phone": "74692885",
        "address": "AV. 7 NOVEMBRE M'HRES, MAHRES",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.53,
            "lng": 10.5
        }
    },
    {
        "id": "doc116",
        "name": "Dr. Mohamed Said ROMDHANE",
        "specialty": "Pediatrie",
        "phone": "71711122",
        "address": "73, AV. HABIB BOURGUIBA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc117",
        "name": "Dr. Bakhta Hmidi OUDALI",
        "specialty": "Pediatrie",
        "phone": "74401310",
        "address": "AV. 7 NOVEMBRE IMM. EL ATKANE NÂ°14, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc118",
        "name": "Dr. Mohamed Ali MONGALGI",
        "specialty": "Pediatrie",
        "phone": "71275371",
        "address": "10, AV. HEDI CHAKER SALAMBO, CARTHAGE",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.85,
            "lng": 10.33
        }
    },
    {
        "id": "doc119",
        "name": "Dr. Mohamed MEGDICHE",
        "specialty": "Pediatrie",
        "phone": "71751519",
        "address": "17, AV. TAHAR BEN AMMAR RESIDENCE ESSAADA EL MANNAR 2, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc120",
        "name": "Dr. Laroussi MEDDEB HAMROUNI",
        "specialty": "Pediatrie",
        "phone": "75270274",
        "address": "7 AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc121",
        "name": "Dr. Mounir MALLEK",
        "specialty": "Pediatrie",
        "phone": "74400804",
        "address": "AV. 7 NOVEMBRE IMM. AIDA ESC A, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc122",
        "name": "Dr. Jaafar MABROUK",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "19 AV. HABIB BOURGUIBA TEBOULBA, TEBOULBA",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.95
        }
    },
    {
        "id": "doc123",
        "name": "Dr. Ikram LOUATI",
        "specialty": "Pediatrie",
        "phone": "71364881",
        "address": "RESIDENE LES MARGUERITES BLOC B-16 EL MOUROUJ I, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc124",
        "name": "Dr. Jaleddine LASSOUED",
        "specialty": "Pediatrie",
        "phone": "72222122",
        "address": "19, RUE MARBELLA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc125",
        "name": "Dr. Hana Venglaroua KRIAA",
        "specialty": "Pediatrie",
        "phone": "74222900",
        "address": "RTE DE TUNIS KM 1.5, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc126",
        "name": "Dr. Habib KHARRAT",
        "specialty": "Pediatrie",
        "phone": "77232777",
        "address": "RUE OUM MLEL KAIROUAN, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc127",
        "name": "Dr. Sahbi KAROUI",
        "specialty": "Pediatrie",
        "phone": "71885952",
        "address": "RUE 71151 A COTE C. EL MANAR EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc128",
        "name": "Dr. Ayoub KAMOUN",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "9, RUE I.SAHNOUN, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc129",
        "name": "Dr. Najoua KAHLOUL",
        "specialty": "Pediatrie",
        "phone": "73362255",
        "address": "23, RTE DE TUNIS HAMMAM SOUSSE, HAMMAM SOUSSE",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.86,
            "lng": 10.59
        }
    },
    {
        "id": "doc130",
        "name": "Dr. Mohamed Salah JELLALI",
        "specialty": "Pediatrie",
        "phone": "76633750",
        "address": "AV. HABIB BOURGUIBA IMM. GAMMOUDI, SIDI BOUZID EST",
        "city": "SIDI BOUZID",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.03,
            "lng": 9.48
        }
    },
    {
        "id": "doc131",
        "name": "Dr. Fafany JAOUAHDOU",
        "specialty": "Pediatrie",
        "phone": "71754643",
        "address": "51, AV. D'AFRIQUE EL MENZAH, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc132",
        "name": "Dr. Ferid JAAFAR",
        "specialty": "Pediatrie",
        "phone": "71293400",
        "address": "10, AV. HABIB BOURGUIBA \"LE FORUM\" 2 CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc133",
        "name": "Dr. Mohamed Mehiar HARBI",
        "specialty": "Pediatrie",
        "phone": "71705052",
        "address": "AV. KAHNA - RESIDENCE LES PARCS, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc134",
        "name": "Dr. Amel Selmi HAMADA",
        "specialty": "Pediatrie",
        "phone": "72344167",
        "address": "AV. F.HACHED, KORBA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.57,
            "lng": 10.86
        }
    },
    {
        "id": "doc135",
        "name": "Dr. Mohamed Mouldi HADOUI",
        "specialty": "Pediatrie",
        "phone": "75274678",
        "address": "AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc136",
        "name": "Dr. Mustapha GUEZMIR",
        "specialty": "Pediatrie",
        "phone": "72447515",
        "address": "RUE 9 AVRIL 1938, RAS JEBEL",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.21,
            "lng": 10.12
        }
    },
    {
        "id": "doc137",
        "name": "Dr. Mohamed Mizouni GHODBANI",
        "specialty": "Pediatrie",
        "phone": "77475120",
        "address": "2, RUE RACHID JABBARI, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc138",
        "name": "Dr. Lamia GHARSALLAH",
        "specialty": "Pediatrie",
        "phone": "71580202",
        "address": "CITE EL HADIKA BLOC 26 CITE ETTAHRIR, ETTAHRIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.82,
            "lng": 10.13
        }
    },
    {
        "id": "doc139",
        "name": "Dr. Mohamed GASTLI",
        "specialty": "Pediatrie",
        "phone": "72286301",
        "address": "38 AV. HABIB THAMEUR, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc140",
        "name": "Dr. Ali FERCHIOU",
        "specialty": "Pediatrie",
        "phone": "71782046",
        "address": "82, AV.DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc141",
        "name": "Dr. Mohamed Fethi ERNEZ",
        "specialty": "Pediatrie",
        "phone": "73229575",
        "address": "11, RUE DR. MOREAU, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc142",
        "name": "Dr. Slim EL MABROUK",
        "specialty": "Pediatrie",
        "phone": "71453826",
        "address": "18, RUE K. IBN WALID, EZZAHRA",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.74,
            "lng": 10.28
        }
    },
    {
        "id": "doc143",
        "name": "Dr. Rachida Kafsi EL AYADI",
        "specialty": "Pediatrie",
        "phone": "71224059",
        "address": "IMMEUBLE SPRIC DEN DEN, MANOUBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.09
        }
    },
    {
        "id": "doc144",
        "name": "Dr. Youssef DLIGA",
        "specialty": "Pediatrie",
        "phone": "76220910",
        "address": "11, RUE A. BEN SLIMANE, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc145",
        "name": "Dr. Noureddine DEBBICHE",
        "specialty": "Pediatrie",
        "phone": "72344990",
        "address": "1 BIS, RUE ABDELKADER ZHIOUA, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc146",
        "name": "Dr. Faouzi DAKHLIA",
        "specialty": "Pediatrie",
        "phone": "71800996",
        "address": "75 AV. M'HAMED V 1 ETAGE  TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc147",
        "name": "Dr. Sihem CHAOUACHI",
        "specialty": "Pediatrie",
        "phone": "71396916",
        "address": "3, RUE IBN KHALDOUN, CITE ETTADHAMEN",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.11
        }
    },
    {
        "id": "doc148",
        "name": "Dr. Najet BRAHAM",
        "specialty": "Pediatrie",
        "phone": "71483813",
        "address": "CROISEMENT DOULATI BOUMHEL, MORNAG",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.68,
            "lng": 10.25
        }
    },
    {
        "id": "doc149",
        "name": "Dr. Najeh BOUJELBEN",
        "specialty": "Pediatrie",
        "phone": "74263312",
        "address": "AV. DES MARTYRS LES GALERIES, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc150",
        "name": "Dr. Erij BOUBAKER",
        "specialty": "Pediatrie",
        "phone": "73680934",
        "address": "AV. BOURGUIBA M'HDIA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc151",
        "name": "Dr. Said BIBI",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "1, RUE ZAGHOUANI EL MENZAH VI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc152",
        "name": "Dr. Afif BESBES",
        "specialty": "Pediatrie",
        "phone": "73467160",
        "address": "IMM.GHEDIRA-AV.DU COMBATTANT S, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc153",
        "name": "Dr. Mohsen BEN TANFOUS",
        "specialty": "Pediatrie",
        "phone": "75601600",
        "address": "IMMEUBLE BEN TAYES MIDOUN, DJERBA MIDOUN",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.8,
            "lng": 10.95
        }
    },
    {
        "id": "doc154",
        "name": "Dr. Raja Louafi BEN SOLTANE",
        "specialty": "Pediatrie",
        "phone": "71832828",
        "address": "23, RUE LYBIE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc155",
        "name": "Dr. Mohamed Radhi BEN OSMAN",
        "specialty": "Pediatrie",
        "phone": "71247032",
        "address": "26, RUE JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc156",
        "name": "Dr. Aref BEN MANSOUR",
        "specialty": "Pediatrie",
        "phone": "72465298",
        "address": "23 AV. 20 MARS 1956 MATEUR RTE DE TABARKA, MATEUR",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.04,
            "lng": 9.66
        }
    },
    {
        "id": "doc157",
        "name": "Dr. Moncef BEN JEMAA",
        "specialty": "Pediatrie",
        "phone": "71224398",
        "address": "RUE DES MARTYRS DEVANT AMEN BANK -EL MOUROUJ, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc158",
        "name": "Dr. Amara BEN GHALIA",
        "specialty": "Pediatrie",
        "phone": "71386554",
        "address": "6, RUE DE BIZERTE, BEN AROUS",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.75,
            "lng": 10.22
        }
    },
    {
        "id": "doc159",
        "name": "Dr. Miled BEN DALI",
        "specialty": "Pediatrie",
        "phone": "73227450",
        "address": "87 BIS AV. DE LA REPUBLIQUE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc160",
        "name": "Dr. Saloua Bouraoui BEN ATTIA",
        "specialty": "Pediatrie",
        "phone": "71253910",
        "address": "6, RUE D'ANGLETERRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc161",
        "name": "Dr. Samir BELLAZREG",
        "specialty": "Pediatrie",
        "phone": "73438212",
        "address": "50 AV. DE REPUBLIQUE  MOKNINE, MOKNINE",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.63,
            "lng": 10.9
        }
    },
    {
        "id": "doc162",
        "name": "Dr. Hasna Zakhama BEL HADJ HAMOUDA",
        "specialty": "Pediatrie",
        "phone": "73471307",
        "address": "AV. BECHIR SFAR, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc163",
        "name": "Dr. Nadia Miled BAYALI",
        "specialty": "Pediatrie",
        "phone": "71795074",
        "address": "12, RUE DE M'HDIA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc164",
        "name": "Dr. Abderrahmen BARBOUCHE",
        "specialty": "Pediatrie",
        "phone": "72286405",
        "address": "20, RUE MONGI BALI, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc165",
        "name": "Dr. Mohamed Ridha BAIRAM",
        "specialty": "Pediatrie",
        "phone": "71731894",
        "address": "254, AV. HABIB BOURGUIBA -, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc166",
        "name": "Dr. Mohamed Moncef BACCAR",
        "specialty": "Pediatrie",
        "phone": "71493535",
        "address": "9 BIS, RUE NICOLAS BERANGER, EL OUARDIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.77,
            "lng": 10.17
        }
    },
    {
        "id": "doc167",
        "name": "Dr. Houda Hammami ARJOUN",
        "specialty": "Pediatrie",
        "phone": "71730595",
        "address": "10, RUE HOUCINE BOUZAIENE, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc168",
        "name": "Dr. Abdelaziz AMAMI",
        "specialty": "Pediatrie",
        "phone": "71399470",
        "address": "11, RUE 10114 - EL OUARDIA 4, KABARIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.19
        }
    },
    {
        "id": "doc169",
        "name": "Dr. Ezzeddine ACHOURI",
        "specialty": "Pediatrie",
        "phone": "73487099",
        "address": "8, RUE BEN ARFA, JEMMAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.63,
            "lng": 10.76
        }
    },
    {
        "id": "doc170",
        "name": "Dr. Slaheddine BEL HADJ",
        "specialty": "Parasitologie",
        "phone": "71713859",
        "address": "2, RUE C. KTARI, LA SOUKRA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.87,
            "lng": 10.25
        }
    },
    {
        "id": "doc171",
        "name": "Dr. Ahmed ZAYANI",
        "specialty": "Ophtalmologie",
        "phone": "73223311",
        "address": "PLACE FARHAT HACHED IMM B.DHIAB, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc172",
        "name": "Dr. Ahmed TRABELSI",
        "specialty": "Ophtalmologie",
        "phone": "71791500",
        "address": "CLINIQUE OPHTALMOLOGIQUE DE TUNIS ROUTE X2-CITE EL KHADHRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc173",
        "name": "Dr. Mehdi TEKKARI",
        "specialty": "Ophtalmologie",
        "phone": "78709160",
        "address": "VILLE DU KEF, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc174",
        "name": "Dr. Riadh SOUA",
        "specialty": "Ophtalmologie",
        "phone": "73472222",
        "address": "138 AV. HABIB BOURGUIBA, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc175",
        "name": "Dr. Mohamed SELLAMI",
        "specialty": "Ophtalmologie",
        "phone": "71397831",
        "address": "84 AV.15 OCTOBRE 1963 53, RUE 10078, EL OUARDIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.77,
            "lng": 10.17
        }
    },
    {
        "id": "doc176",
        "name": "Dr. Souheil ROUISSI",
        "specialty": "Ophtalmologie",
        "phone": "",
        "address": "COMPLEXE LE FORUM ARIANA 3, AV. TAIEB MHIRI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc177",
        "name": "Dr. Mohamed Faouzi ROUACHED",
        "specialty": "Ophtalmologie",
        "phone": "72235327",
        "address": "51, AV. HABIB BOURGUIBA 1ER ETAGE, RAS JEBEL",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.21,
            "lng": 10.12
        }
    },
    {
        "id": "doc178",
        "name": "Dr. Riadh REKIK",
        "specialty": "Ophtalmologie",
        "phone": "71891758",
        "address": "106, RUE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc179",
        "name": "Dr. Cherif RAIS",
        "specialty": "Ophtalmologie",
        "phone": "71257595",
        "address": "15, RUE C. DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc180",
        "name": "Dr. Khaled NABLI",
        "specialty": "Ophtalmologie",
        "phone": "73210375",
        "address": "CLINIQUE ESSALEM, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc181",
        "name": "Dr. Mohamed Nejib Adresse M'RAD",
        "specialty": "Ophtalmologie",
        "phone": "72220637",
        "address": "3 AV. H. THAMEUR, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc182",
        "name": "Dr. Nizar MOALLA",
        "specialty": "Ophtalmologie",
        "phone": "",
        "address": "AV. ESSALEM, GROMBALIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.6,
            "lng": 10.5
        }
    },
    {
        "id": "doc183",
        "name": "Dr. Chadli MGHAIETH",
        "specialty": "Ophtalmologie",
        "phone": "71252180",
        "address": "66, RUE N. PACHA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc184",
        "name": "Dr. Hatem MARZOUK",
        "specialty": "Ophtalmologie",
        "phone": "72287790",
        "address": "NEAPOLIS CENTER 3EME ETAGE AV. DE FRANCE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc185",
        "name": "Dr. Salah MAHJOUB",
        "specialty": "Ophtalmologie",
        "phone": "71791500",
        "address": "CLINIQUE OPHTALMOLOGIQUE DE TUNIS ROUTE X2-CITE EL KHADHRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc186",
        "name": "Dr. Leila LASRAM",
        "specialty": "Ophtalmologie",
        "phone": "71893618",
        "address": "9 BIS, AV. LOUIS BRAILLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc187",
        "name": "Dr. Selma LAOUANI",
        "specialty": "Ophtalmologie",
        "phone": "71581975",
        "address": "35, RUE H. BOURGUIBA LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc188",
        "name": "Dr. Samia Gargouri KHLIF",
        "specialty": "Ophtalmologie",
        "phone": "74441511",
        "address": "IMM. INTILAKA BLOC B 4 APPT.3, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc189",
        "name": "Dr. Asma Ben Amor KETATA",
        "specialty": "Ophtalmologie",
        "phone": "76221534",
        "address": "AV. DES MARTYRS IM PALMARIUM ESC B NÂ° 12 SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc190",
        "name": "Dr. Maher KAMOUN",
        "specialty": "Ophtalmologie",
        "phone": "73696757",
        "address": "79 AV. HABIB BOURGUIBA MAHDIA CENTRE BLOC D, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc191",
        "name": "Dr. Abdelmajid KAMMOUN",
        "specialty": "Ophtalmologie",
        "phone": "74220823",
        "address": "51 AV. BOURGUIBA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc192",
        "name": "Dr. Youssef JEMAA",
        "specialty": "Ophtalmologie",
        "phone": "71565489",
        "address": "156, RUE BAB SOUIKA, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc193",
        "name": "Dr. Bassem HAMZA",
        "specialty": "Ophtalmologie",
        "phone": "71786562",
        "address": "5, RUE DE MAURITANIE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc194",
        "name": "Dr. Tarek HADDAR",
        "specialty": "Ophtalmologie",
        "phone": "73447600",
        "address": "RUE COMBATTANT SUPREME IM GUEDIRA, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc195",
        "name": "Dr. Mohamed Naceur GHARBI NACIRI",
        "specialty": "Ophtalmologie",
        "phone": "73228649",
        "address": "1, RUE K. IBN WALID, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc196",
        "name": "Dr. Hechmi GAALOUL",
        "specialty": "Ophtalmologie",
        "phone": "73226453",
        "address": "1, AV. LEOPOLD SEDAR SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc197",
        "name": "Dr. Maher Ben Ali FOURATI",
        "specialty": "Ophtalmologie",
        "phone": "74406065",
        "address": "RUE AHMED SIKELLI - IMM. SOUHIR, SFAX OUEST",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.73,
            "lng": 10.68
        }
    },
    {
        "id": "doc198",
        "name": "Dr. Mehdi EL FENDRI",
        "specialty": "Ophtalmologie",
        "phone": "71287557",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc199",
        "name": "Dr. Faiza Boughanmi DERBEL",
        "specialty": "Ophtalmologie",
        "phone": "71504057",
        "address": "1, RUE DE LA MOSQUEE, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc200",
        "name": "Dr. Khalil DARGHOUTH",
        "specialty": "Ophtalmologie",
        "phone": "71385405",
        "address": "38 AV. HABIB BOURGUIBA, BEN AROUS",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.75,
            "lng": 10.22
        }
    },
    {
        "id": "doc201",
        "name": "Dr. Ahmed Said ZRIBI",
        "specialty": "Urologie",
        "phone": "71788153",
        "address": "44-46 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc202",
        "name": "Dr. Noureddine TRABELSI",
        "specialty": "Urologie",
        "phone": "71842790",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc203",
        "name": "Dr. Mokhtar SGHAIER SAAD",
        "specialty": "Urologie",
        "phone": "73270975",
        "address": "IMMOBILIERE MEDICALE AV. 7 NOVEMBRE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc204",
        "name": "Dr. Mohamed NJAH",
        "specialty": "Urologie",
        "phone": "74402181",
        "address": "AV. 7 NOVEMBRE IMM. IBN KHALDOUN ESC E, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc205",
        "name": "Dr. Hafedh LOUSSAIEF",
        "specialty": "Urologie",
        "phone": "72789360",
        "address": "RUE DE FRANCE NEAPOLIS CENTRE  NABEUL 3EME ETAGE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc206",
        "name": "Dr. Maher KECHAOU",
        "specialty": "Urologie",
        "phone": "",
        "address": "CLINIQUE HEMODIALYSE CHAMS RTE GREMDA KM2, SFAX SUD (THYNA)",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.7,
            "lng": 10.71
        }
    },
    {
        "id": "doc207",
        "name": "Dr. Chakib HATTAB",
        "specialty": "Urologie",
        "phone": "73226677",
        "address": "AV. LEOPOLD SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc208",
        "name": "Dr. Habib FAHEM",
        "specialty": "Urologie",
        "phone": "71292323",
        "address": "24, RUE J. ABDENNASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc209",
        "name": "Dr. Wahid EZZEDDINE",
        "specialty": "Urologie",
        "phone": "71323535",
        "address": "ZARZIS CENTRE, ZARZIS",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.5,
            "lng": 11.11
        }
    },
    {
        "id": "doc210",
        "name": "Dr. Fethi DAHMANI",
        "specialty": "Urologie",
        "phone": "71830134",
        "address": "6, RUE DEGYPTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc211",
        "name": "Dr. Habib BOUJNAH",
        "specialty": "Urologie",
        "phone": "71848586",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc212",
        "name": "Dr. Hedi BELLILI",
        "specialty": "Urologie",
        "phone": "77478240",
        "address": "AV. DU 7NOVEMBRE KASSERINE, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc213",
        "name": "Dr. Khaled ATALLAH",
        "specialty": "Urologie",
        "phone": "71254474",
        "address": "35 AV. DE PARIS MEDINA PALACE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc214",
        "name": "Dr. Fakhreddine ABID",
        "specialty": "Urologie",
        "phone": "74240990",
        "address": "AV. 7NOVEMBRE IMM IBN SINA NÂ°24 3E ETAGE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc215",
        "name": "Dr. Nadia Hattab MANSOURI",
        "specialty": "Stomatologie",
        "phone": "73210040",
        "address": "CLINIQUE DES OLIVIERS BD 7 NOVEMBRE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc216",
        "name": "Dr. Mohamed Lassaad GARGOURI",
        "specialty": "Stomatologie",
        "phone": "71792818",
        "address": "RUE 8300 NÂ°11 PAR L'AV. KHEIREDDINE PACHA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc217",
        "name": "Dr. Mouty ABDELHEDI",
        "specialty": "Stomatologie",
        "phone": "74455854",
        "address": "AV. HABIB BOURGUIBA - IMM INTILAKA 2, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc218",
        "name": "Dr. Hatem SNOUSSI",
        "specialty": "Rhumatologie",
        "phone": "71324849",
        "address": "26, RUE EL JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc219",
        "name": "Dr. Atef SNANI",
        "specialty": "Rhumatologie",
        "phone": "71439101",
        "address": "10, AV. HABIB BOURGUIBA CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc220",
        "name": "Dr. Mohamed MOALLA",
        "specialty": "Rhumatologie",
        "phone": "71796566",
        "address": "22 AV.DES ETATS UNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc221",
        "name": "Dr. Imed KOLSI",
        "specialty": "Rhumatologie",
        "phone": "74405500",
        "address": "AV. 7 NOVEMBRE IMM. AIDA ESC A SFAX, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc222",
        "name": "Dr. Houbaba HARRANE",
        "specialty": "Rhumatologie",
        "phone": "72280387",
        "address": "49 AV. HEDI CHAKER NABEUL, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc223",
        "name": "Dr. Insaf Labidi HADDA",
        "specialty": "Rhumatologie",
        "phone": "73214410",
        "address": "100, AV. LEOPOLD SENGHOR IMM. EL WIFAC, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc224",
        "name": "Dr. Sonia Ouadi EZZINE",
        "specialty": "Rhumatologie",
        "phone": "71716888",
        "address": "COMPLEXE LE FORUM ARIANA  BLOC A 3, AV. TAIEB MHIRI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc225",
        "name": "Dr. Abdelhamid DAMMAK",
        "specialty": "Rhumatologie",
        "phone": "74211493",
        "address": "IMM INTILAKA 1 ESC A1 RUE HAFFOUZ, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc226",
        "name": "Dr. Naoufel BEN MUSTAPHA",
        "specialty": "Rhumatologie",
        "phone": "71744747",
        "address": "11, RUE T.MHIRI, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc227",
        "name": "Dr. Abdessalem BEN ANAYA",
        "specialty": "Rhumatologie",
        "phone": "",
        "address": "RUE LEOPOLD SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc228",
        "name": "Dr. Ahmed Ben Mustapha BAIRAM",
        "specialty": "Rhumatologie",
        "phone": "71257458",
        "address": "1, RUE ANNABA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc229",
        "name": "Dr. Mohamed AMMAR",
        "specialty": "Rhumatologie",
        "phone": "",
        "address": "RUE DE FRANCE NEAPOLIS CENTRE NABEUL, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc230",
        "name": "Dr. Douja Mbazaa ZOUARI",
        "specialty": "Radiologie",
        "phone": "71387700",
        "address": "8 AV. DE FRANCE, BEN AROUS",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.75,
            "lng": 10.22
        }
    },
    {
        "id": "doc231",
        "name": "Dr. Mohamed Nejib ZENAIDI",
        "specialty": "Radiologie",
        "phone": "71283711",
        "address": "7, PLACE PASTEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc232",
        "name": "Dr. Rached TRIKI",
        "specialty": "Radiologie",
        "phone": "71870400",
        "address": "IMM BOGART CAMPUS EL MANAR RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc233",
        "name": "Dr. Dalila Ben Marzouk SMATI",
        "specialty": "Radiologie",
        "phone": "71870005",
        "address": "GaLAXIE 2000 - RUE EL IRAK, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc234",
        "name": "Dr. Mohamed S SELLAMI",
        "specialty": "Radiologie",
        "phone": "71257666",
        "address": "10, RUE MUSTAPHA MBAREK, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc235",
        "name": "Dr. Hassen SAADAOUI",
        "specialty": "Radiologie",
        "phone": "71766184",
        "address": "32, AV. AHMED TLILI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc236",
        "name": "Dr. Sonia NAGI",
        "specialty": "Radiologie",
        "phone": "71714068",
        "address": "2, RUE MEDITERRANEE CITE NAVIGATION, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc237",
        "name": "Dr. Zine El Abidine MISSAOUI",
        "specialty": "Radiologie",
        "phone": "76220618",
        "address": "33, RUE M.A.HAMMAMI, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc238",
        "name": "Dr. Mounir MEHDI",
        "specialty": "Radiologie",
        "phone": "74227888",
        "address": "AV. 7 NOVEMBRE IMM. IBN SINA RUE AHMED ALOULOU SAF, AGAREB",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.73,
            "lng": 10.45
        }
    },
    {
        "id": "doc239",
        "name": "Dr. Mohamed Hedi LAMOUCHI",
        "specialty": "Radiologie",
        "phone": "71774283",
        "address": "9, RUE TAHAR BEN ACHOUR, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc240",
        "name": "Dr. Souad Fourati KOUBAA",
        "specialty": "Radiologie",
        "phone": "74298577",
        "address": "AV. 7 NOV, IMM IBN KHALDOUN ESC E AV. 7 NOV., SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc241",
        "name": "Dr. Fethi KHARRAT",
        "specialty": "Radiologie",
        "phone": "74404700",
        "address": "IMM. FARABI AV. 7 NOVEMBRE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc242",
        "name": "Dr. Mohamed Amine KHAIRI",
        "specialty": "Radiologie",
        "phone": "73213805",
        "address": "RUE IBN EL JAZZAR IMM ROUATBI, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc243",
        "name": "Dr. Mohamed KCHOUK",
        "specialty": "Radiologie",
        "phone": "",
        "address": "37, RUE DU NIGER TUNIS AV. DE LA LIGUE ARABE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc244",
        "name": "Dr. Abdessalem KAMMOUN",
        "specialty": "Radiologie",
        "phone": "71325526",
        "address": "41, RUE J.ABDENNASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc245",
        "name": "Dr. Noureddine HANTOUS",
        "specialty": "Radiologie",
        "phone": "71774283",
        "address": "9, RUE TAHAR BEN ACHOUR, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc246",
        "name": "Dr. Kamel HADDOUK",
        "specialty": "Radiologie",
        "phone": "74220885",
        "address": "65 AV. DES MARTYRS, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc247",
        "name": "Dr. Mohamed Elyes GONGI",
        "specialty": "Radiologie",
        "phone": "73471586",
        "address": "RUE IMAM SAHNOUN, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc248",
        "name": "Dr. Hassen GHARBI",
        "specialty": "Radiologie",
        "phone": "71800677",
        "address": "CLINIQUE GENERALE ET CARDIO-VASCULAIRE DE TUNIS (I VOIE X2, EL KHADRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc249",
        "name": "Dr. Ridha GAFSI",
        "specialty": "Radiologie",
        "phone": "71321034",
        "address": "RUE DES TRAVAILLEURS, MANOUBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.09
        }
    },
    {
        "id": "doc250",
        "name": "Dr. Raoudha Ayadi FITOURI",
        "specialty": "Radiologie",
        "phone": "71786179",
        "address": "97 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc251",
        "name": "Dr. Khaled EL ABED",
        "specialty": "Radiologie",
        "phone": "73242711",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc252",
        "name": "Dr. Fekri DHAOUI",
        "specialty": "Radiologie",
        "phone": "71787290",
        "address": "23 AV. DES ETATS UNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc253",
        "name": "Dr. Mohamed CHEIKH",
        "specialty": "Radiologie",
        "phone": "71290111",
        "address": "75 AV. SALAMBO, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc254",
        "name": "Dr. Atef Daoues CHEDLY",
        "specialty": "Radiologie",
        "phone": "71766272",
        "address": "RUE ALI ZLITNI, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc255",
        "name": "Dr. Sami CHAHATA",
        "specialty": "Radiologie",
        "phone": "71238760",
        "address": "CITE JAMIL  BLOC B EL MENZAH VI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc256",
        "name": "Dr. Zeineb Hela Bardi BOUHEJBA",
        "specialty": "Radiologie",
        "phone": "72287031",
        "address": "AV. HABIB BOURGUIBA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc257",
        "name": "Dr. Samia BEN ZINEB",
        "specialty": "Radiologie",
        "phone": "71782993",
        "address": "CENTRE MEDICAL ST AUGUSTIN, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc258",
        "name": "Dr. Mohamed Dhafer BEN MRAD",
        "specialty": "Radiologie",
        "phone": "71583635",
        "address": "RESIDENCE LES JASMINS BLOC I (APP 20) RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc259",
        "name": "Dr. Taieb BEN GHANEM",
        "specialty": "Radiologie",
        "phone": "78451137",
        "address": "14 BIS AV. DE FRANCE, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc260",
        "name": "Dr. Hammadi BEN ALAYA",
        "specialty": "Radiologie",
        "phone": "71881107",
        "address": "RUE ABOU ZAMA EL BALOUI GALERIE \"LE PRINTEMPS\", KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc261",
        "name": "Dr. Jawaher Chichi BAOUAB",
        "specialty": "Radiologie",
        "phone": "76224244",
        "address": "PLACE PASTEUR DOUALY, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc262",
        "name": "Dr. Riadh ATALLAH",
        "specialty": "Radiologie",
        "phone": "73222711",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc263",
        "name": "Dr. Mohamed Moncef ALLEGUE",
        "specialty": "Radiologie",
        "phone": "73242723",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc264",
        "name": "Dr. Hatem AIDANI",
        "specialty": "Radiologie",
        "phone": "77477255",
        "address": "AV. 7 NOVEMBRE PRES DE LA BQUE CENTRALE, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc265",
        "name": "Dr. Bechir ABDELMOULA",
        "specialty": "Radiologie",
        "phone": "71284906",
        "address": "CLINIQUE GENERALE ET CARDIO-VASCULAIRE DE TUNIS (I VOIE X2, EL KHADRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc266",
        "name": "Dr. Dania Elleuch ZOUARI",
        "specialty": "Psychiatrie",
        "phone": "74274027",
        "address": "RUE HAFFOUZ IMM INTILAKA ESC A NÂ°1, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc267",
        "name": "Dr. Elyes SRAIRI",
        "specialty": "Psychiatrie",
        "phone": "71792207",
        "address": "44-46 AV. DE LA LIBERTE (4E ETAGE), BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc268",
        "name": "Dr. Mourad SAID",
        "specialty": "Psychiatrie",
        "phone": "72230004",
        "address": "5, RUE TAIEB BAYOUDH  NABEUL, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc269",
        "name": "Dr. Adel OMRANI",
        "specialty": "Psychiatrie",
        "phone": "71796131",
        "address": "21, RUE KOWEIT, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc270",
        "name": "Dr. Amel MHIRI",
        "specialty": "Psychiatrie",
        "phone": "71566870",
        "address": "PLACE BAB SOUIKA TUNIS, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc271",
        "name": "Dr. Moncef LOUSSAIEF",
        "specialty": "Psychiatrie",
        "phone": "71244813",
        "address": "LE COLISEE ESC.A, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc272",
        "name": "Dr. Khalifa KHELIFA",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "AV. DES MARTYRS IM ABBES, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc273",
        "name": "Dr. Sana JELASSI",
        "specialty": "Psychiatrie",
        "phone": "71574508",
        "address": "42, BLD BAB MENARA, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc274",
        "name": "Dr. Essedik JEDDI",
        "specialty": "Psychiatrie",
        "phone": "71783506",
        "address": "15, RUE IMAM ABOU HANIFA MUTUELLEVILLE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc275",
        "name": "Dr. Amel HASSAIRI",
        "specialty": "Psychiatrie",
        "phone": "71883089",
        "address": "CENTRE ALYSSA, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc276",
        "name": "Dr. Mohsen HADRICH",
        "specialty": "Psychiatrie",
        "phone": "74211907",
        "address": "RUE TAIEB MHIRI-IMM.JAWHARA -, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc277",
        "name": "Dr. Mohamed GHORBEL",
        "specialty": "Psychiatrie",
        "phone": "71335750",
        "address": "39 AV. HABIB BOURGUIBA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc278",
        "name": "Dr. Houcine FETHI",
        "specialty": "Psychiatrie",
        "phone": "71325862",
        "address": "25, RUE DANGLETERRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc279",
        "name": "Dr. Salem BROUR",
        "specialty": "Psychiatrie",
        "phone": "71505436",
        "address": "131 BLD 20 MARS 1956, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc280",
        "name": "Dr. Khaled BOUDABBOUS",
        "specialty": "Psychiatrie",
        "phone": "75220466",
        "address": "63 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc281",
        "name": "Dr. Khalil BEN FARHAT",
        "specialty": "Psychiatrie",
        "phone": "71845753",
        "address": "CLINIQUE TAOUFIK RTE X-X4 AV. DE LA LIGUE ARABE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc282",
        "name": "Dr. Abdelkarim BEDOUI",
        "specialty": "Psychiatrie",
        "phone": "73464630",
        "address": "AV. H BOURGUIBA IMB GHEDIR, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc283",
        "name": "Dr. Mohamed ANNABI",
        "specialty": "Psychiatrie",
        "phone": "75272627",
        "address": "AV. DE LA REPUBLIQUE, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc284",
        "name": "Dr. Mhadheb ABDESSAMED",
        "specialty": "Psychiatrie",
        "phone": "73331504",
        "address": "AV. TAHAR SFAR  IM EL BARAKA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc285",
        "name": "Dr. Mohamed ZEGAYA",
        "specialty": "Pneumologie",
        "phone": "71798080",
        "address": "CLINIQUE GENERALE ET CARDIO-VASCULAIRE DE TUNIS (I VOIE X2, EL KHADRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc286",
        "name": "Dr. Mohamed Ben Abdessalem TURKI",
        "specialty": "Pneumologie",
        "phone": "71730900",
        "address": "187 AV.HABIB BOURGUIBA, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc287",
        "name": "Dr. Mohamed Salah TLILI",
        "specialty": "Pneumologie",
        "phone": "73242453",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc288",
        "name": "Dr. Mohamed Nejib SOMRANI",
        "specialty": "Pneumologie",
        "phone": "72287403",
        "address": "49, RUE .H. CHAKER, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc289",
        "name": "Dr. Wajdi Karim REKIK",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "POLYCLINIQUE ESSALAMA AV. 7 NOV., SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc290",
        "name": "Dr. Fares MILI",
        "specialty": "Pneumologie",
        "phone": "71281014",
        "address": "106, RUE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc291",
        "name": "Dr. Lilia MASMOUDI",
        "specialty": "Pneumologie",
        "phone": "74477298",
        "address": "AV. 7 NOV IMM IBN SINA NÂ° 23 SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc292",
        "name": "Dr. Mokhtar LABIADH",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "ROUTE DE MEDENINE KM 1, BEN GUERDANE",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.13,
            "lng": 11.21
        }
    },
    {
        "id": "doc293",
        "name": "Dr. Samir KSEMTINI",
        "specialty": "Pneumologie",
        "phone": "75277670",
        "address": "AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc294",
        "name": "Dr. Noomene KANOUN",
        "specialty": "Pneumologie",
        "phone": "74406300",
        "address": "AV. 7 NOVEMBRE IMM. AIDA ESC A NÂ°102, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc295",
        "name": "Dr. Yosr JEBRI",
        "specialty": "Pneumologie",
        "phone": "78461265",
        "address": "AV. ENVIRONEMENT MEDJEZ EL BAB, MEDJEZ EL BAB",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.65,
            "lng": 9.61
        }
    },
    {
        "id": "doc296",
        "name": "Dr. El Ouni HAJBI",
        "specialty": "Pneumologie",
        "phone": "74298078",
        "address": "28, RUE DE KAIROUAN, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc297",
        "name": "Dr. Khaled HAFSA",
        "specialty": "Pneumologie",
        "phone": "73452140",
        "address": "RUE HAJ ALI SOUA KSAR HELLAL, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc298",
        "name": "Dr. Taieb GHARBI",
        "specialty": "Pneumologie",
        "phone": "71845651",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc299",
        "name": "Dr. Abdelwaheb FEKI",
        "specialty": "Pneumologie",
        "phone": "71351489",
        "address": "8, RUE DES ENTREPRENEURS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc300",
        "name": "Dr. Laroussi EL MEKKI",
        "specialty": "Pneumologie",
        "phone": "71891365",
        "address": "15, RUE DAUTRICHE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc301",
        "name": "Dr. Mounir EL BOK",
        "specialty": "Pneumologie",
        "phone": "71285430",
        "address": "CITE M'HRAJENE  5, RUE EL HARIRI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc302",
        "name": "Dr. Nabil DERBEL",
        "specialty": "Pneumologie",
        "phone": "71690450",
        "address": "ROUTE DE MEDNINE KM 0.5 ZARZIS, ZARZIS",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.5,
            "lng": 11.11
        }
    },
    {
        "id": "doc303",
        "name": "Dr. Mohamed Saadi DAKHLIA",
        "specialty": "Pneumologie",
        "phone": "71950114",
        "address": "IMM. TANIT MEDICAL - ANGLE RUE 8300/8301, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc304",
        "name": "Dr. Farouk CHAABOUNI",
        "specialty": "Pneumologie",
        "phone": "71349365",
        "address": "34, RUE IBN KHALDOUN, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc305",
        "name": "Dr. Salem Najeh BEN SALEM",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "AV. KHALED IBN EL WALID, DOUAR HICHER",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.06
        }
    },
    {
        "id": "doc306",
        "name": "Dr. Ridha BEN ARIF",
        "specialty": "Pneumologie",
        "phone": "78456403",
        "address": "41 AV. DE LA REPUBLIQUE, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc307",
        "name": "Dr. Nabil BELKHIR",
        "specialty": "Pneumologie",
        "phone": "73681263",
        "address": "138 AV. HABIB BOURGUIBA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc308",
        "name": "Dr. Jalel AISSAOUI",
        "specialty": "Pneumologie",
        "phone": "71519510",
        "address": "IMM. MOURADI TOUTA / BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc309",
        "name": "Dr. Abdelfattah AISSA",
        "specialty": "Pneumologie",
        "phone": "73745643",
        "address": "PLACE DE L'INDEPENDANCE KSAR HELLAL, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc310",
        "name": "Dr. Afif ZOUARI",
        "specialty": "Pediatrie",
        "phone": "73225989",
        "address": "M'HDIA CENTRE  BLOC F NÂ°12, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc311",
        "name": "Dr. Mohamed Naceur ZARROUK",
        "specialty": "Pediatrie",
        "phone": "78871394",
        "address": "RUE EL JAZIRA, SILIANA NORD",
        "city": "SILIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.08,
            "lng": 9.37
        }
    },
    {
        "id": "doc312",
        "name": "Dr. Abdelkader YEDES",
        "specialty": "Pediatrie",
        "phone": "72288267",
        "address": "AV. TAIEB M'HIRI, KORBA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.57,
            "lng": 10.86
        }
    },
    {
        "id": "doc313",
        "name": "Dr. Nebhani TLILI",
        "specialty": "Pediatrie",
        "phone": "77478150",
        "address": "AV. DU 7NOV IMM MISSAOUI NÂ°12 KASSERINE, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc314",
        "name": "Dr. Nabil SOUISSI",
        "specialty": "Pediatrie",
        "phone": "71240914",
        "address": "26, RUE BAB JEDID, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc315",
        "name": "Dr. Mohamed Faouzi SKHIRI",
        "specialty": "Pediatrie",
        "phone": "73468730",
        "address": "AV. COMBATTANT SUPREME MONASTIR, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc316",
        "name": "Dr. Mourad SARBEJI",
        "specialty": "Pediatrie",
        "phone": "74296572",
        "address": "32 AV. FARHAT HACHED, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc317",
        "name": "Dr. Salem SAHLI",
        "specialty": "Pediatrie",
        "phone": "72282584",
        "address": "19, RUE DES JASMINS, HAMMAMET",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.4,
            "lng": 10.61
        }
    },
    {
        "id": "doc318",
        "name": "Dr. Latifa Ridane OUESLATI",
        "specialty": "Pediatrie",
        "phone": "71443967",
        "address": "RUE DE CARTHAGE NÂ°14, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc319",
        "name": "Dr. Mouldi OUERGHI",
        "specialty": "Pediatrie",
        "phone": "78202066",
        "address": "5, RUE SIDI AYECH, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc320",
        "name": "Dr. Mongi MOSBAHI",
        "specialty": "Pediatrie",
        "phone": "73250144",
        "address": "AV. DE LA REPUBLIQUE, ENFIDHA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.13,
            "lng": 10.38
        }
    },
    {
        "id": "doc321",
        "name": "Dr. Habiba Tilouche MEMMI",
        "specialty": "Pediatrie",
        "phone": "73476209",
        "address": "87 AV. HABIB BOURGUIBA, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc322",
        "name": "Dr. Mohamed MANOUBI",
        "specialty": "Pediatrie",
        "phone": "72253839",
        "address": "RUE MOKHTAR HARASSI, BENI KHALLED",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.65,
            "lng": 10.59
        }
    },
    {
        "id": "doc323",
        "name": "Dr. Mohamed Slim MAHERZI",
        "specialty": "Pediatrie",
        "phone": "71747826",
        "address": "1, RUE ESSAADA, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc324",
        "name": "Dr. Mounir LOUKIL",
        "specialty": "Pediatrie",
        "phone": "74253620",
        "address": "4, PLACE M. BOURGUIBA IMM. ZAYANI  SAKIET EZZIT, SAKIET EZZIT",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.78,
            "lng": 10.75
        }
    },
    {
        "id": "doc325",
        "name": "Dr. Bechir LAZZEM",
        "specialty": "Pediatrie",
        "phone": "72444422",
        "address": "10, RUE B. BEN SASSI, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc326",
        "name": "Dr. Anouar KSENTINI",
        "specialty": "Pediatrie",
        "phone": "74245488",
        "address": "37, RUE JORDANIE CITE EL HABIB, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc327",
        "name": "Dr. Jalel KHELIF",
        "specialty": "Pediatrie",
        "phone": "77355145",
        "address": "98 AV. ABI ZOMAA EL BALAOUI, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc328",
        "name": "Dr. Seifeddine KAROUI",
        "specialty": "Pediatrie",
        "phone": "71481100",
        "address": "3, RUE ABDALLAH FARHAT, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc329",
        "name": "Dr. Kamel KAMOUN",
        "specialty": "Pediatrie",
        "phone": "73681989",
        "address": "153 AV.BOURGUIBA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc330",
        "name": "Dr. Mohamed Faouzi KALLEL",
        "specialty": "Pediatrie",
        "phone": "73219700",
        "address": "PLACE DU MAGHREB ARABE CLINIQUE ESSALEM, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc331",
        "name": "Dr. Habib KALLEL",
        "specialty": "Pediatrie",
        "phone": "74290412",
        "address": "IMM. TREFLE - RUE 2 MARS, MAHRES",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.53,
            "lng": 10.5
        }
    },
    {
        "id": "doc332",
        "name": "Dr. Svetlana Krasnova JENHANI",
        "specialty": "Pediatrie",
        "phone": "72273139",
        "address": "23, RUE DES MARTYRS, KELIBIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 11.09
        }
    },
    {
        "id": "doc333",
        "name": "Dr. Mohamed Habib JARRAR",
        "specialty": "Pediatrie",
        "phone": "71292512",
        "address": "33, RUE S.BOUCHOUCHA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc334",
        "name": "Dr. Mohamed Ridha HAYDER",
        "specialty": "Pediatrie",
        "phone": "71272941",
        "address": "RUE ABDELAZIZ CHTIOUI, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc335",
        "name": "Dr. Raouf HAMILA",
        "specialty": "Pediatrie",
        "phone": "71363250",
        "address": "CARREFOUR MEDICAL - EL MOUROUJ I, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc336",
        "name": "Dr. Maher HAFFANI",
        "specialty": "Pediatrie",
        "phone": "71882541",
        "address": "RESIDENCE LES JASMINS RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc337",
        "name": "Dr. Ferid HACHFI SOUSSI",
        "specialty": "Pediatrie",
        "phone": "78457322",
        "address": "AV. HABIB BOURGUIBA MEDJEZ EL BAB, MEDJEZ EL BAB",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.65,
            "lng": 9.61
        }
    },
    {
        "id": "doc338",
        "name": "Dr. Tahar GHOZZI",
        "specialty": "Pediatrie",
        "phone": "71712954",
        "address": "AV. TAIEB M'HIRI IMM. SAFSAF, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc339",
        "name": "Dr. Belgacem GHARSALLAOUI",
        "specialty": "Pediatrie",
        "phone": "71506605",
        "address": "BLD DE 20 MARS IMM TOUTA, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc340",
        "name": "Dr. Amel Ben Ayed GHARBI",
        "specialty": "Pediatrie",
        "phone": "71521512",
        "address": "5, RUE MADRID, LA SOUKRA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.87,
            "lng": 10.25
        }
    },
    {
        "id": "doc341",
        "name": "Dr. Brahim GHALI",
        "specialty": "Pediatrie",
        "phone": "77227836",
        "address": "RUE ALI BELHOUANE, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc342",
        "name": "Dr. Mokhtar FITOURI",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "3, RUE MHAMED ALI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc343",
        "name": "Dr. Mohamed Mongi EZZILI",
        "specialty": "Pediatrie",
        "phone": "72285516",
        "address": "AV. FARHAT HACHED, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc344",
        "name": "Dr. Mohamed EL BEZ",
        "specialty": "Pediatrie",
        "phone": "71503700",
        "address": "10, IMM. IBN ZIRI CENTRE C.STAR, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc345",
        "name": "Dr. Samir DOGHRI",
        "specialty": "Pediatrie",
        "phone": "71363680",
        "address": "IMM. SNIT AV. HABIB THAMEUR - BLOC C16  2EME ETAGE, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc346",
        "name": "Dr. Hajer Boussetta DHAOUI",
        "specialty": "Pediatrie",
        "phone": "72224991",
        "address": "NEAPOLIS CENTER RUE DE FRANCE 2EME ETAGE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc347",
        "name": "Dr. Leila Terras DALLAGI",
        "specialty": "Pediatrie",
        "phone": "71582060",
        "address": "11 AV.ENNAKHIL -, HRAIRIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.1
        }
    },
    {
        "id": "doc348",
        "name": "Dr. Jaleddine CHEMLI",
        "specialty": "Pediatrie",
        "phone": "71569975",
        "address": "13 IMPASSE BOUASSIDA, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc349",
        "name": "Dr. Abdelkarim BRINI",
        "specialty": "Pediatrie",
        "phone": "71718182",
        "address": "5, AV. TAIEB M'HIRI RESIDENCE ERRIDHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc350",
        "name": "Dr. Mourad BOURAOUI",
        "specialty": "Pediatrie",
        "phone": "71523891",
        "address": "AV. HABIB BOURGUIBA MANNOUBA, MANOUBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.09
        }
    },
    {
        "id": "doc351",
        "name": "Dr. Moncef BOULARES",
        "specialty": "Pediatrie",
        "phone": "78200234",
        "address": "RUE TAIEB MHIRI, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc352",
        "name": "Dr. Khiareddine BOUCHAHOUA",
        "specialty": "Pediatrie",
        "phone": "71530640",
        "address": "123, RUE 1ER JUIN 1155, TEBOURBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.82,
            "lng": 9.84
        }
    },
    {
        "id": "doc353",
        "name": "Dr. Noomene BLAIECH",
        "specialty": "Pediatrie",
        "phone": "71426777",
        "address": "32, AV. HABIB BOURGUIBA, MEGRINE",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.23
        }
    },
    {
        "id": "doc354",
        "name": "Dr. Ali BIBI",
        "specialty": "Pediatrie",
        "phone": "71892108",
        "address": "RUE 8714 CITE OLYMPIQUE BLOC 13 RDC APP 171, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc355",
        "name": "Dr. Rachid BESBES",
        "specialty": "Pediatrie",
        "phone": "71571854",
        "address": "31, RUE ALI BELHAOUANE-, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc356",
        "name": "Dr. Hadhami Baili BEN TURKIA",
        "specialty": "Pediatrie",
        "phone": "71806485",
        "address": "IMMEUBLE  EL WAFA CITE OLYMPIQUE, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc357",
        "name": "Dr. Suzanne Grynsztejn BEN OSMAN",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "296 AV. HABIB BOURGUIBA, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc358",
        "name": "Dr. Jamel BEN MANSOUR",
        "specialty": "Pediatrie",
        "phone": "72257766",
        "address": "RUE MED BACH HAMBA IMM. MRABEH GROMBALIA, GROMBALIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.6,
            "lng": 10.5
        }
    },
    {
        "id": "doc359",
        "name": "Dr. Abderrazak BEN KHAYAT",
        "specialty": "Pediatrie",
        "phone": "75651802",
        "address": "66 AV. M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc360",
        "name": "Dr. Marie Claude Orain BEN HASSINE",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "3, RUE L. FAURE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc361",
        "name": "Dr. Adel BEN EL KADHI",
        "specialty": "Pediatrie",
        "phone": "71514945",
        "address": "AV. HABIB BOURGUIBA IMM. M'HREZ ATTIA HAMMAMET, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc362",
        "name": "Dr. Abderrahmen BEN AYED",
        "specialty": "Pediatrie",
        "phone": "71244680",
        "address": "49, AV.DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc363",
        "name": "Dr. Chadli BEN ABDALLAH",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "2, RUE BORJ BOURGUIBA  TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc364",
        "name": "Dr. Ahmed BEN ABDALLAH",
        "specialty": "Pediatrie",
        "phone": "71597947",
        "address": "105, RUE 4001, EZZOUHOUR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.12
        }
    },
    {
        "id": "doc365",
        "name": "Dr. Khedija Souissi BELKAIED",
        "specialty": "Pediatrie",
        "phone": "72281402",
        "address": "129 AV. DE LA REPUBLIQUE, HAMMAMET",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.4,
            "lng": 10.61
        }
    },
    {
        "id": "doc366",
        "name": "Dr. Fethi BAYOUDH",
        "specialty": "Pediatrie",
        "phone": "71535213",
        "address": "AV. 07 NOVEMBRE, OUED ELLIL",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.05
        }
    },
    {
        "id": "doc367",
        "name": "Dr. Mohamed Imed BAIZIG",
        "specialty": "Pediatrie",
        "phone": "71482926",
        "address": "21 AV. MONGI SLIM, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc368",
        "name": "Dr. Ameur BADR",
        "specialty": "Pediatrie",
        "phone": "73212766",
        "address": "PLACE FARHAT HACHED IMM BEN DHIA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc369",
        "name": "Dr. Charfeddine ATALLAH",
        "specialty": "Pediatrie",
        "phone": "71710525",
        "address": "9, RUE SIDI AMMAR, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc370",
        "name": "Dr. Ahmed AMAMI",
        "specialty": "Pediatrie",
        "phone": "76242108",
        "address": "RUE DE PRESIDENT METLAOUI, METLAOUI",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.33,
            "lng": 8.4
        }
    },
    {
        "id": "doc371",
        "name": "Dr. Houcine AISSI",
        "specialty": "Pediatrie",
        "phone": "71482379",
        "address": "PLACE DU MARCHE DU MRAH, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc372",
        "name": "Dr. Mustapha ABDERRAHIM",
        "specialty": "Pediatrie",
        "phone": "75271028",
        "address": "36 AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc373",
        "name": "Dr. Hamed Taoufik ZINE EL ABIDINE",
        "specialty": "Ophtalmologie",
        "phone": "73224553",
        "address": "1, AV. LEOPOLD SEDAR SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc374",
        "name": "Dr. Mohamed ZGHAL",
        "specialty": "Ophtalmologie",
        "phone": "71325353",
        "address": "11, RUE DE BELGIQUE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc375",
        "name": "Dr. Mohamed Fethi TRIKI",
        "specialty": "Ophtalmologie",
        "phone": "71664059",
        "address": "8, RUE APOLIO 11 CITE M'HRAJENE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc376",
        "name": "Dr. Tarek TOUIHRI",
        "specialty": "Ophtalmologie",
        "phone": "78630676",
        "address": "RUE ALI BELAHOUANE  JENDOUBA, JENDOUBA SUD",
        "city": "JENDOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.5,
            "lng": 8.78
        }
    },
    {
        "id": "doc377",
        "name": "Dr. Mohamed SOUSSI",
        "specialty": "Ophtalmologie",
        "phone": "73681767",
        "address": "AV. F.HACHED 5100-M'HDIA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc378",
        "name": "Dr. Nejib SFAR",
        "specialty": "Ophtalmologie",
        "phone": "71259736",
        "address": "6, AV. CARTHAGE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc379",
        "name": "Dr. Sahbi SAHLI",
        "specialty": "Ophtalmologie",
        "phone": "71518511",
        "address": "70 AV. DE LINDEPENDANCE -, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc380",
        "name": "Dr. Kamel ROMDHANE",
        "specialty": "Ophtalmologie",
        "phone": "71330567",
        "address": "10, RUE DE HOLLANDE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc381",
        "name": "Dr. Mouldi RAMZI",
        "specialty": "Ophtalmologie",
        "phone": "71354765",
        "address": "19, RUE DJEBEL EL FATH, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc382",
        "name": "Dr. Fethi NOUIRA",
        "specialty": "Ophtalmologie",
        "phone": "73226340",
        "address": "2 BIS RUE FARABI, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc383",
        "name": "Dr. Mohamed Ridha M'RAD",
        "specialty": "Ophtalmologie",
        "phone": "71244984",
        "address": "41, RUE MONGI SLIM-, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc384",
        "name": "Dr. Mohamed MOUELHI",
        "specialty": "Ophtalmologie",
        "phone": "71631266",
        "address": "AV. RABTA, TEBOURBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.82,
            "lng": 9.84
        }
    },
    {
        "id": "doc385",
        "name": "Dr. Badreddine MHADHBI",
        "specialty": "Ophtalmologie",
        "phone": "73380765",
        "address": "AV. DE LA REPUBLIQUE ENFIDHA, ENFIDHA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.13,
            "lng": 10.38
        }
    },
    {
        "id": "doc386",
        "name": "Dr. Taoufik MELLOULI",
        "specialty": "Ophtalmologie",
        "phone": "73243811",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc387",
        "name": "Dr. Mokhtar MECHRI",
        "specialty": "Ophtalmologie",
        "phone": "75274566",
        "address": "POLYCLINIQUE EL YASMINE RUE SIDI ABBES HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc388",
        "name": "Dr. Noureddine MAHJOUBI",
        "specialty": "Ophtalmologie",
        "phone": "75272659",
        "address": "63 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc389",
        "name": "Dr. Jamel MAAMRI",
        "specialty": "Ophtalmologie",
        "phone": "76434694",
        "address": "AV. HABIB BOURGUIBA, SIDI BOUZID EST",
        "city": "SIDI BOUZID",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.03,
            "lng": 9.48
        }
    },
    {
        "id": "doc390",
        "name": "Dr. Mohamed Ridha KHROUF",
        "specialty": "Ophtalmologie",
        "phone": "71325735",
        "address": "1, RUE J. ABDENASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc391",
        "name": "Dr. Ridha KHANFIR",
        "specialty": "Ophtalmologie",
        "phone": "71719726",
        "address": "5, AV. TAIEB M'HIRI RESIDENCE ERRIDHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc392",
        "name": "Dr. Mahmoud KAMOUN",
        "specialty": "Ophtalmologie",
        "phone": "74220820",
        "address": "28, RUE KAIROUAN, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc393",
        "name": "Dr. Mohamed KAMMOUN",
        "specialty": "Ophtalmologie",
        "phone": "71888550",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc394",
        "name": "Dr. Habib JEMMALI",
        "specialty": "Ophtalmologie",
        "phone": "72438660",
        "address": "68, RUE 2 MARS 1934 CENTRE BOUCHOUCHA, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc395",
        "name": "Dr. Selma HARRABI",
        "specialty": "Ophtalmologie",
        "phone": "71793158",
        "address": "IMM TOUTA 2000 LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc396",
        "name": "Dr. Moez HAMMAMI",
        "specialty": "Ophtalmologie",
        "phone": "71441380",
        "address": "7, AV. M'HAMED ALI IMM YASSAMINE, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc397",
        "name": "Dr. Moncef HALLEB",
        "specialty": "Ophtalmologie",
        "phone": "71706300",
        "address": "7, AV. HABIB BOURGUIBA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc398",
        "name": "Dr. Selma Krichene GHORBEL",
        "specialty": "Ophtalmologie",
        "phone": "71712235",
        "address": "AV. DE L'ERE NVLLE, RESIDENCE LES EMERAUDES ENNASR I, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc399",
        "name": "Dr. Moheddine GABSI",
        "specialty": "Ophtalmologie",
        "phone": "75852395",
        "address": "AV. SALAH BEN YOUSSEF IMM. TLILI DJERBA MIDOUN, BENI KHEDACHE",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.45
        }
    },
    {
        "id": "doc400",
        "name": "Dr. Salma Triki ELLOUZE",
        "specialty": "Ophtalmologie",
        "phone": "74406242",
        "address": "AV. 7 NOVEMBRE IMM IBN SINA SFAX JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc401",
        "name": "Dr. Lotfi TURKI",
        "specialty": "Urologie",
        "phone": "74404596",
        "address": "AV. 7 NOVEMBRE IMM. LES GALERIES ESC 2, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc402",
        "name": "Dr. Kamel TISSAOUI",
        "specialty": "Urologie",
        "phone": "71730893",
        "address": "25, RUE EL JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc403",
        "name": "Dr. Slim Rene Georges RAKAM",
        "specialty": "Urologie",
        "phone": "71792372",
        "address": "110 RUE DE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc404",
        "name": "Dr. Sami MASMOUDI",
        "specialty": "Urologie",
        "phone": "74405102",
        "address": "AV. 7NOV IMM RAYAN SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc405",
        "name": "Dr. Habib KRICHENE",
        "specialty": "Urologie",
        "phone": "74228810",
        "address": "12, RUE LEOPOLD SINGHOR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc406",
        "name": "Dr. Ahmed KOUBAA",
        "specialty": "Urologie",
        "phone": "75278722",
        "address": "251 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc407",
        "name": "Dr. Sami JEMAL",
        "specialty": "Urologie",
        "phone": "74298165",
        "address": "AV. HABIB BOURGUIBA IM INTILAKA II ESC \"C\", SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc408",
        "name": "Dr. Slah FRIAA",
        "specialty": "Urologie",
        "phone": "",
        "address": "AV. HABIB BOURGUIBA, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc409",
        "name": "Dr. Hamadi DAHMOUL",
        "specialty": "Urologie",
        "phone": "73273635",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc410",
        "name": "Dr. Tahar BOUKER",
        "specialty": "Urologie",
        "phone": "71288524",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc411",
        "name": "Dr. Fethi BEN ABID",
        "specialty": "Urologie",
        "phone": "71871255",
        "address": "DELTA MEDICAL RUE 7151 - EL MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc412",
        "name": "Dr. Khaled BACHA",
        "specialty": "Urologie",
        "phone": "71563422",
        "address": "RESIDENCE BEN NEJMA 2RUE OKBA IBN NAFAA, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc413",
        "name": "Dr. Abdelwaheb ABID",
        "specialty": "Urologie",
        "phone": "71345190",
        "address": "16 AV.H.THAMEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc414",
        "name": "Dr. Fakher MEZIOU",
        "specialty": "Stomatologie",
        "phone": "71884002",
        "address": "31 AV.DE LA LIBERTE -, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc415",
        "name": "Dr. Hafedh Foued HAMZA",
        "specialty": "Stomatologie",
        "phone": "71845887",
        "address": "31, RUE AMINE EL ABASSI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc416",
        "name": "Dr. Abdeljelil GDOURA",
        "specialty": "Stomatologie",
        "phone": "74220591",
        "address": "AV. 7 NOVEMBRE IMM. IBN KHALDOUN ESC D, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc417",
        "name": "Dr. Brahim BOUJEMLA",
        "specialty": "Stomatologie",
        "phone": "71278944",
        "address": "2, RUE HOPITAL, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc418",
        "name": "Dr. Mohamed Chokri TRIKI",
        "specialty": "Rhumatologie",
        "phone": "74402055",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC A, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc419",
        "name": "Dr. Mohamed MSADDEK",
        "specialty": "Rhumatologie",
        "phone": "76653146",
        "address": "AV. M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc420",
        "name": "Dr. Riadh KOLSI",
        "specialty": "Rhumatologie",
        "phone": "74401947",
        "address": "AV. 7 NOVEMBRE IMM. EL FARABI, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc421",
        "name": "Dr. Abderrazak HILA",
        "specialty": "Rhumatologie",
        "phone": "71578000",
        "address": "CLINIQUE SAINT AUGUSTIN RUE ABOU HANIFA, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc422",
        "name": "Dr. Mohamed Rached HADJ ROMDHANE",
        "specialty": "Rhumatologie",
        "phone": "71321862",
        "address": "35, RUE JAMEL ABDENNASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc423",
        "name": "Dr. Mabrouk GABSI",
        "specialty": "Rhumatologie",
        "phone": "75277361",
        "address": "103, AV. M'HAMED ALI IMM. BECHRAOUI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc424",
        "name": "Dr. Abdelmajid DJEMAL",
        "specialty": "Rhumatologie",
        "phone": "",
        "address": "18, RUE TAREK IBN ZIED, AKOUDA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.87,
            "lng": 10.57
        }
    },
    {
        "id": "doc425",
        "name": "Dr. Hayet BEN SEDRINE",
        "specialty": "Rhumatologie",
        "phone": "71257926",
        "address": "63 AV. F. HACHED, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc426",
        "name": "Dr. Mohamed Salah BEN NEJMA",
        "specialty": "Rhumatologie",
        "phone": "72285011",
        "address": "54, RUE MARBELLE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc427",
        "name": "Dr. Samir BEN HAMIDA",
        "specialty": "Rhumatologie",
        "phone": "72423311",
        "address": "BIZERTE CENTER 5EME ETAGE, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc428",
        "name": "Dr. Kamel BEN ABBES",
        "specialty": "Rhumatologie",
        "phone": "71483929",
        "address": "44, AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc429",
        "name": "Dr. Mounir BELKHOUJA",
        "specialty": "Rhumatologie",
        "phone": "71349286",
        "address": "25 AV. DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc430",
        "name": "Dr. Mohamed AMMOUS",
        "specialty": "Rhumatologie",
        "phone": "74299669",
        "address": "RUE KAIROUAN INTILAKA II BLOC D, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc431",
        "name": "Dr. Abdelmajid KHALED",
        "specialty": "Radiotherapie",
        "phone": "71796792",
        "address": "44-46 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc432",
        "name": "Dr. Chafik TURKI",
        "specialty": "Radiologie",
        "phone": "74226056",
        "address": "49, RUE TAHAR SFAR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc433",
        "name": "Dr. Ahmed Mourad SOUISSI",
        "specialty": "Radiologie",
        "phone": "71257666",
        "address": "10, RUE MUSTAPHA MBAREK, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc434",
        "name": "Dr. Mohieddine SELLAMI",
        "specialty": "Radiologie",
        "phone": "71247977",
        "address": "4, RUE DU CAIRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc435",
        "name": "Dr. Sami SAIED",
        "specialty": "Radiologie",
        "phone": "71700800",
        "address": "7, RUE SIDI BOU SAID, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc436",
        "name": "Dr. Khemais NAIJA",
        "specialty": "Radiologie",
        "phone": "71234338",
        "address": "20, RUE J. ABDENASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc437",
        "name": "Dr. Ridha MKAOUAR",
        "specialty": "Radiologie",
        "phone": "74225165",
        "address": "40, RUE MOUSSA CITE JARDINS, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc438",
        "name": "Dr. Sami MEZIOU",
        "specialty": "Radiologie",
        "phone": "71242636",
        "address": "30, RUE S.ABOU BAKER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc439",
        "name": "Dr. Mejdi MESTIRI",
        "specialty": "Radiologie",
        "phone": "73685276",
        "address": "6, RUE GARNATA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc440",
        "name": "Dr. Mohamed LIOUANE",
        "specialty": "Radiologie",
        "phone": "77237240",
        "address": "RUE ABOU ZAMA EL BALAOUI DEVANT SIDI ZERIBI, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc441",
        "name": "Dr. Ali LAATROUS",
        "specialty": "Radiologie",
        "phone": "72257407",
        "address": "RUE DE LA VICTOIRE, GROMBALIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.6,
            "lng": 10.5
        }
    },
    {
        "id": "doc442",
        "name": "Dr. Youssef KHALED",
        "specialty": "Radiologie",
        "phone": "71222800",
        "address": "4, RUE BECHIR SFAR, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc443",
        "name": "Dr. Ahmed KECHRID",
        "specialty": "Radiologie",
        "phone": "73227504",
        "address": "IMM.SELTENE AV. SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc444",
        "name": "Dr. Lassaad KAMMOUN",
        "specialty": "Radiologie",
        "phone": "74400018",
        "address": "AV. 7 NOV IM RAYANE SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc445",
        "name": "Dr. Hatem HASSINE",
        "specialty": "Radiologie",
        "phone": "71893613",
        "address": "11, RUE ABDELAZIZ THAALBI, BIZERTE NORD",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc446",
        "name": "Dr. Boulbaba HADJ YAHIA",
        "specialty": "Radiologie",
        "phone": "75273366",
        "address": "CLINIQUE BON SECOURS, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc447",
        "name": "Dr. Abdelaziz GUERFALA",
        "specialty": "Radiologie",
        "phone": "75650265",
        "address": "AV. HABIB BOURGUIBA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc448",
        "name": "Dr. Riadh GHARBI",
        "specialty": "Radiologie",
        "phone": "71324124",
        "address": "7, RUE DE HOLLANDE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc449",
        "name": "Dr. Mohamed Lamine GHARBI",
        "specialty": "Radiologie",
        "phone": "72461014",
        "address": "1, AV. DE PALESTINE, MENZEL BOURGUIBA",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.15,
            "lng": 9.78
        }
    },
    {
        "id": "doc450",
        "name": "Dr. Khaled GAIES",
        "specialty": "Radiologie",
        "phone": "78602248",
        "address": "14 BIS AV. DE FRANCE, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc451",
        "name": "Dr. Aida FOURATI",
        "specialty": "Radiologie",
        "phone": "71884257",
        "address": "5, AV. TAHAR BEN AMMAR EL MANNAR 2, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc452",
        "name": "Dr. Sofiene EL MAY",
        "specialty": "Radiologie",
        "phone": "71742537",
        "address": "2, RUE DES HAFSIDES, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc453",
        "name": "Dr. Abdelaziz DHIAB",
        "specialty": "Radiologie",
        "phone": "74406420",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC B NÂ° 43, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc454",
        "name": "Dr. Faiza Bessi DAABOUR",
        "specialty": "Radiologie",
        "phone": "",
        "address": "RUE SIDI EZZITOUNI HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc455",
        "name": "Dr. Lotfi CHAMEKH",
        "specialty": "Radiologie",
        "phone": "78203330",
        "address": "RUE 8 JUILLET 1884, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc456",
        "name": "Dr. Moez Habib BOURGUIBA",
        "specialty": "Radiologie",
        "phone": "71272944",
        "address": "6, RUE LAGHA, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc457",
        "name": "Dr. Lotfi BESSROUR",
        "specialty": "Radiologie",
        "phone": "",
        "address": "RUE BECHIR TLILI MIDOUN 4160, DJERBA MIDOUN",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.8,
            "lng": 10.95
        }
    },
    {
        "id": "doc458",
        "name": "Dr. Slim BEN SAIDANE",
        "specialty": "Radiologie",
        "phone": "71566000",
        "address": "91, BLD DU 9 AVRIL -, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc459",
        "name": "Dr. Riadh BEN GHORBEL",
        "specialty": "Radiologie",
        "phone": "71566111",
        "address": "91, BLD DU 9 AVRIL -, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc460",
        "name": "Dr. Mohamed Fethi BEN ALAYA",
        "specialty": "Radiologie",
        "phone": "77231234",
        "address": "AV. ABOU ZAMA EL BALAOUI, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc461",
        "name": "Dr. Nabil BAZAR BACHA",
        "specialty": "Radiologie",
        "phone": "71312044",
        "address": "6, RUE ABDALLAH FARHAT, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc462",
        "name": "Dr. Noura BARBOUCHE",
        "specialty": "Radiologie",
        "phone": "78226155",
        "address": "55 AV. MONGI SLIM, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc463",
        "name": "Dr. Karim AYADI",
        "specialty": "Radiologie",
        "phone": "71871802",
        "address": "CLINIQUE GENERALE ET CARDIO-VASCULAIRE DE TUNIS (I VOIE X2, EL KHADRA, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc464",
        "name": "Dr. Adnene AMMAR",
        "specialty": "Radiologie",
        "phone": "74280208",
        "address": "18, RUE LARBI ZARROUK, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc465",
        "name": "Dr. Kalthoum Ait Khalifa ABDESSALEM",
        "specialty": "Radiologie",
        "phone": "",
        "address": "20, RUE J. ABDENASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc466",
        "name": "Dr. Sofiene ZRIBI",
        "specialty": "Psychiatrie",
        "phone": "71346052",
        "address": "11, RUE DE BELGIQUE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc467",
        "name": "Dr. Karim TABBANE",
        "specialty": "Psychiatrie",
        "phone": "71520154",
        "address": "7, RUE IBN MESSAOUD B.P., EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc468",
        "name": "Dr. Mohamed Hechmi SAIED",
        "specialty": "Psychiatrie",
        "phone": "71713666",
        "address": "RUE 18 JANVIER BLOC311 ARIANA CENTER, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc469",
        "name": "Dr. Sadok OUAHCHI",
        "specialty": "Psychiatrie",
        "phone": "71334644",
        "address": "4, RUE ENTREPRENEURS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc470",
        "name": "Dr. Radhouane MHIRI",
        "specialty": "Psychiatrie",
        "phone": "74227507",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC A, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc471",
        "name": "Dr. Habib MEHDI",
        "specialty": "Psychiatrie",
        "phone": "74404999",
        "address": "IM AIDA ESC \"A\" AV. 7 NOV SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc472",
        "name": "Dr. Mohamed Chiheb MAATKI",
        "specialty": "Psychiatrie",
        "phone": "71729158",
        "address": "CENTRE PHENICIEN - 4, AV. HABIB BOURGUIBA BLOC B A, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc473",
        "name": "Dr. Wahid KOUBAA",
        "specialty": "Psychiatrie",
        "phone": "71340201",
        "address": "15, RUE J.ABDENNASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc474",
        "name": "Dr. Mohamed Ben Amor KAMMOUN",
        "specialty": "Psychiatrie",
        "phone": "71252844",
        "address": "10, AV. DE LONDRES 1000-TUNIS, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc475",
        "name": "Dr. Mohamed Said HECHMI",
        "specialty": "Psychiatrie",
        "phone": "",
        "address": "COMPLEXE ARIANA CENTRE, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc476",
        "name": "Dr. Mohamed HAJJI",
        "specialty": "Psychiatrie",
        "phone": "72443400",
        "address": "RUE IBN KHALDOUN, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc477",
        "name": "Dr. Abdessatar FITOURI",
        "specialty": "Psychiatrie",
        "phone": "78453673",
        "address": "16, RUE KHAIREDDINE BEJA, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc478",
        "name": "Dr. Afef Karoud CHARRAD",
        "specialty": "Psychiatrie",
        "phone": "71873830",
        "address": "RESIDENCE JINENE IMPASSE N1 MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc479",
        "name": "Dr. Lotfi BOUGHANMI",
        "specialty": "Psychiatrie",
        "phone": "71256323",
        "address": "MEDINA PALACE - AV. DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc480",
        "name": "Dr. Mondher BEN HAMIDA",
        "specialty": "Psychiatrie",
        "phone": "72433182",
        "address": "64 AV.H. BOURGUIBA, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc481",
        "name": "Dr. Zeineb BEN ABID",
        "specialty": "Psychiatrie",
        "phone": "71323405",
        "address": "22, RUE CHARLES DE GAULLE TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc482",
        "name": "Dr. Slim ANNABI",
        "specialty": "Psychiatrie",
        "phone": "71841619",
        "address": "20, RUE DANGLETERRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc483",
        "name": "Dr. Mohamed Anouar ACHICHE",
        "specialty": "Psychiatrie",
        "phone": "74216100",
        "address": "115, RUE HAFFOUZ IMM. ZADEM, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc484",
        "name": "Dr. Hatem ACHACHE",
        "specialty": "Psychiatrie",
        "phone": "73227506",
        "address": "RUE PIERRE CURIE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc485",
        "name": "Dr. Alya Nadia ZINE EL ABIDINE",
        "specialty": "Pneumologie",
        "phone": "71292912",
        "address": "10, AV. HABIB BOURGUIBA \"LE FORUM\" 2 CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc486",
        "name": "Dr. Mohamed Amara ZAIMI",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "21, RUE SOUK AHRAS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc487",
        "name": "Dr. Raoudha Ahmadi SOUISSI",
        "specialty": "Pneumologie",
        "phone": "71386217",
        "address": "4 AV. DE FRANCE, BEN AROUS",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.75,
            "lng": 10.22
        }
    },
    {
        "id": "doc488",
        "name": "Dr. Mohamed Hedi SAAD",
        "specialty": "Pneumologie",
        "phone": "71351770",
        "address": "43, AV. BOURGUIBA LE COLISEE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc489",
        "name": "Dr. Mohamed Hedi M'RABET",
        "specialty": "Pneumologie",
        "phone": "71285676",
        "address": "56 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc490",
        "name": "Dr. Abdelaziz MATHLOUTHI",
        "specialty": "Pneumologie",
        "phone": "71842500",
        "address": "8, RUE APOLIOXI CITE M'HRAJENE TUNIS, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc491",
        "name": "Dr. Moncef LAROUSSI",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "6, AV. DES PARCS, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc492",
        "name": "Dr. Mongi KSIKSI",
        "specialty": "Pneumologie",
        "phone": "75642300",
        "address": "73 AV. 2 MAI 1966 MEDNINE, MEDENINE NORD",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.5
        }
    },
    {
        "id": "doc493",
        "name": "Dr. Souad Chaabane KHIROUNI",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "12, RUE EL JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc494",
        "name": "Dr. Mohamed Mehdi KERMAOUI",
        "specialty": "Pneumologie",
        "phone": "78221876",
        "address": "7, RUE M. SLIM, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc495",
        "name": "Dr. Mohamed Habib JOMAA",
        "specialty": "Pneumologie",
        "phone": "71345201",
        "address": "29, AV. DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc496",
        "name": "Dr. Fethi HAKIM",
        "specialty": "Pneumologie",
        "phone": "74400078",
        "address": "AV, 7 NOV IMM IBN KHALDOUN ESC D NÂ° 14, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc497",
        "name": "Dr. Slim GHEZAL",
        "specialty": "Pneumologie",
        "phone": "72220203",
        "address": "3 AV. H. THAMEUR, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc498",
        "name": "Dr. Elyes GAHBICHE",
        "specialty": "Pneumologie",
        "phone": "73225462",
        "address": "7, RUE KHALED IBN WALID, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc499",
        "name": "Dr. Sami EL MEKKI",
        "specialty": "Pneumologie",
        "phone": "71891365",
        "address": "RUE D'AUTRICHE TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc500",
        "name": "Dr. Habib EL CADHI",
        "specialty": "Pneumologie",
        "phone": "75653617",
        "address": "RUE SIDI ZITOUNI HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc501",
        "name": "Dr. Hamadi DHIB",
        "specialty": "Pneumologie",
        "phone": "",
        "address": "CITE COMMERCIALE 2 : APP NÂ°7, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc502",
        "name": "Dr. Ahmed DAMMAK",
        "specialty": "Pneumologie",
        "phone": "74402800",
        "address": "AV. 7 NOVEMBRE IMM IBN KHALDOUN ESC E, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc503",
        "name": "Dr. Kilani CHEIKH",
        "specialty": "Pneumologie",
        "phone": "71716724",
        "address": "75 AV. SALAMBO APP 1 ET 2, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc504",
        "name": "Dr. Zouhaier BEN KHEDHER",
        "specialty": "Pneumologie",
        "phone": "71511505",
        "address": "BARDO CENTRE IMM. II, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc505",
        "name": "Dr. Mohamed BEN CHAABANE",
        "specialty": "Pneumologie",
        "phone": "71263901",
        "address": "42, AV. BAB JEDID, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc506",
        "name": "Dr. Mongi BEN ABDALLAH",
        "specialty": "Pneumologie",
        "phone": "74221060",
        "address": "AV. HABIB BOURGUIBA IMM INTILAKA IIESC D NÂ°3, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc507",
        "name": "Dr. Hafedh AOUINE",
        "specialty": "Pneumologie",
        "phone": "73249313",
        "address": "81 AV. HABIB BOURGUIBA, KALAA SGHIRA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.88,
            "lng": 10.55
        }
    },
    {
        "id": "doc508",
        "name": "Dr. ZOUARI ZOUARI",
        "specialty": "Pediatrie",
        "phone": "73225989",
        "address": "M'HDIA CENTRE  BLOC F NÂ°12, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc509",
        "name": "Dr. Mohamed Naceur ZARROUK",
        "specialty": "Pediatrie",
        "phone": "78871394",
        "address": "RUE EL JAZIRA, SILIANA NORD",
        "city": "SILIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.08,
            "lng": 9.37
        }
    },
    {
        "id": "doc510",
        "name": "Dr. Abdelkader YEDES",
        "specialty": "Pediatrie",
        "phone": "72288267",
        "address": "AV. TAIEB M'HIRI, KORBA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.57,
            "lng": 10.86
        }
    },
    {
        "id": "doc511",
        "name": "Dr. Nebhani TLILI",
        "specialty": "Pediatrie",
        "phone": "77478150",
        "address": "AV. DU 7NOV IMM MISSAOUI NÂ°12 KASSERINE, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc512",
        "name": "Dr. Nabil SOUISSI",
        "specialty": "Pediatrie",
        "phone": "71240914",
        "address": "26, RUE BAB JEDID, SIDI EL BECHIR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.16
        }
    },
    {
        "id": "doc513",
        "name": "Dr. Mohamed Faouzi SKHIRI",
        "specialty": "Pediatrie",
        "phone": "73468730",
        "address": "AV. COMBATTANT SUPREME MONASTIR, MONASTIR",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.78,
            "lng": 10.82
        }
    },
    {
        "id": "doc514",
        "name": "Dr. Mourad SARBEJI",
        "specialty": "Pediatrie",
        "phone": "74296572",
        "address": "32 AV. FARHAT HACHED, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc515",
        "name": "Dr. Salem SAHLI",
        "specialty": "Pediatrie",
        "phone": "72282584",
        "address": "19, RUE DES JASMINS, HAMMAMET",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.4,
            "lng": 10.61
        }
    },
    {
        "id": "doc516",
        "name": "Dr. Latifa Ridane OUESLATI",
        "specialty": "Pediatrie",
        "phone": "71443967",
        "address": "RUE DE CARTHAGE NÂ°14, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc517",
        "name": "Dr. Mouldi OUERGHI",
        "specialty": "Pediatrie",
        "phone": "78202066",
        "address": "5, RUE SIDI AYECH, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc518",
        "name": "Dr. Mongi MOSBAHI",
        "specialty": "Pediatrie",
        "phone": "73250144",
        "address": "AV. DE LA REPUBLIQUE, ENFIDHA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.13,
            "lng": 10.38
        }
    },
    {
        "id": "doc519",
        "name": "Dr. Habiba Tilouche MEMMI",
        "specialty": "Pediatrie",
        "phone": "73476209",
        "address": "87 AV. HABIB BOURGUIBA, KSAR HELLAL",
        "city": "MONASTIR",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.64,
            "lng": 10.89
        }
    },
    {
        "id": "doc520",
        "name": "Dr. Mohamed MANOUBI",
        "specialty": "Pediatrie",
        "phone": "72253839",
        "address": "RUE MOKHTAR HARASSI, BENI KHALLED",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.65,
            "lng": 10.59
        }
    },
    {
        "id": "doc521",
        "name": "Dr. Mohamed Slim MAHERZI",
        "specialty": "Pediatrie",
        "phone": "71747826",
        "address": "1, RUE ESSAADA, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc522",
        "name": "Dr. Mounir LOUKIL",
        "specialty": "Pediatrie",
        "phone": "74253620",
        "address": "4, PLACE M. BOURGUIBA IMM. ZAYANI  SAKIET EZZIT, SAKIET EZZIT",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.78,
            "lng": 10.75
        }
    },
    {
        "id": "doc523",
        "name": "Dr. Bechir LAZZEM",
        "specialty": "Pediatrie",
        "phone": "72444422",
        "address": "10, RUE B. BEN SASSI, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc524",
        "name": "Dr. Anouar KSENTINI",
        "specialty": "Pediatrie",
        "phone": "74245488",
        "address": "37, RUE JORDANIE CITE EL HABIB, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc525",
        "name": "Dr. Mohamed Abderrahmen KHELIF",
        "specialty": "Pediatrie",
        "phone": "77228844",
        "address": "46 AV.ABI ZAMAA BALAOUI KAIROUAN, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc526",
        "name": "Dr. Seifeddine KAROUI",
        "specialty": "Pediatrie",
        "phone": "71481100",
        "address": "3, RUE ABDALLAH FARHAT, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc527",
        "name": "Dr. Kamel KAMOUN",
        "specialty": "Pediatrie",
        "phone": "73681989",
        "address": "153 AV.BOURGUIBA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc528",
        "name": "Dr. Mohamed Faouzi KALLEL",
        "specialty": "Pediatrie",
        "phone": "73219700",
        "address": "PLACE DU MAGHREB ARABE CLINIQUE ESSALEM, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc529",
        "name": "Dr. Habib KALLEL",
        "specialty": "Pediatrie",
        "phone": "74290412",
        "address": "IMM. TREFLE - RUE 2 MARS, MAHRES",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.53,
            "lng": 10.5
        }
    },
    {
        "id": "doc530",
        "name": "Dr. Svetlana Krasnova JENHANI",
        "specialty": "Pediatrie",
        "phone": "72273139",
        "address": "23, RUE DES MARTYRS, KELIBIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 11.09
        }
    },
    {
        "id": "doc531",
        "name": "Dr. Mohamed Habib JARRAR",
        "specialty": "Pediatrie",
        "phone": "71292512",
        "address": "33, RUE S.BOUCHOUCHA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc532",
        "name": "Dr. Mohamed Ridha HAYDER",
        "specialty": "Pediatrie",
        "phone": "71272941",
        "address": "RUE ABDELAZIZ CHTIOUI, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc533",
        "name": "Dr. Raouf HAMILA",
        "specialty": "Pediatrie",
        "phone": "71363250",
        "address": "CARREFOUR MEDICAL - EL MOUROUJ I, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc534",
        "name": "Dr. Maher HAFFANI",
        "specialty": "Pediatrie",
        "phone": "71882541",
        "address": "RESIDENCE LES JASMINS RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc535",
        "name": "Dr. Ferid HACHFI SOUSSI",
        "specialty": "Pediatrie",
        "phone": "78457322",
        "address": "AV. HABIB BOURGUIBA MEDJEZ EL BAB, MEDJEZ EL BAB",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.65,
            "lng": 9.61
        }
    },
    {
        "id": "doc536",
        "name": "Dr. Tahar GHOZZI",
        "specialty": "Pediatrie",
        "phone": "71712954",
        "address": "AV. TAIEB M'HIRI IMM. SAFSAF, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc537",
        "name": "Dr. Belgacem GHARSALLAOUI",
        "specialty": "Pediatrie",
        "phone": "71506605",
        "address": "BLD DE 20 MARS IMM TOUTA, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc538",
        "name": "Dr. Amel Ben Ayed GHARBI",
        "specialty": "Pediatrie",
        "phone": "71521512",
        "address": "5, RUE MADRID, LA SOUKRA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.87,
            "lng": 10.25
        }
    },
    {
        "id": "doc539",
        "name": "Dr. Brahim GHALI",
        "specialty": "Pediatrie",
        "phone": "77227836",
        "address": "RUE ALI BELHOUANE, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc540",
        "name": "Dr. Mokhtar FITOURI",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "3, RUE MHAMED ALI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc541",
        "name": "Dr. Mohamed Mongi EZZILI",
        "specialty": "Pediatrie",
        "phone": "72285516",
        "address": "AV. FARHAT HACHED, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc542",
        "name": "Dr. Mohamed EL BEZ",
        "specialty": "Pediatrie",
        "phone": "71503700",
        "address": "10, IMM. IBN ZIRI CENTRE C.STAR, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc543",
        "name": "Dr. Samir DOGHRI",
        "specialty": "Pediatrie",
        "phone": "71363680",
        "address": "IMM. SNIT AV. HABIB THAMEUR - BLOC C16  2EME ETAGE, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc544",
        "name": "Dr. Hajer Boussetta DHAOUI",
        "specialty": "Pediatrie",
        "phone": "72224991",
        "address": "NEAPOLIS CENTER RUE DE FRANCE 2EME ETAGE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc545",
        "name": "Dr. Leila Terras DALLAGI",
        "specialty": "Pediatrie",
        "phone": "71582060",
        "address": "11 AV.ENNAKHIL -, HRAIRIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.1
        }
    },
    {
        "id": "doc546",
        "name": "Dr. Jaleddine CHEMLI",
        "specialty": "Pediatrie",
        "phone": "71569975",
        "address": "13 IMPASSE BOUASSIDA, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc547",
        "name": "Dr. Abdelkarim BRINI",
        "specialty": "Pediatrie",
        "phone": "71718182",
        "address": "5, AV. TAIEB M'HIRI RESIDENCE ERRIDHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc548",
        "name": "Dr. Mourad BOURAOUI",
        "specialty": "Pediatrie",
        "phone": "71523891",
        "address": "AV. HABIB BOURGUIBA MANNOUBA, MANOUBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.09
        }
    },
    {
        "id": "doc549",
        "name": "Dr. Moncef BOULARES",
        "specialty": "Pediatrie",
        "phone": "78200234",
        "address": "RUE TAIEB MHIRI, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc550",
        "name": "Dr. Khiareddine BOUCHAHOUA",
        "specialty": "Pediatrie",
        "phone": "71530640",
        "address": "123, RUE 1ER JUIN 1155, TEBOURBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.82,
            "lng": 9.84
        }
    },
    {
        "id": "doc551",
        "name": "Dr. Noomene BLAIECH",
        "specialty": "Pediatrie",
        "phone": "71426777",
        "address": "32, AV. HABIB BOURGUIBA, MEGRINE",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.23
        }
    },
    {
        "id": "doc552",
        "name": "Dr. Ali BIBI",
        "specialty": "Pediatrie",
        "phone": "71892108",
        "address": "RUE 8714 CITE OLYMPIQUE BLOC 13 RDC APP 171, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc553",
        "name": "Dr. Rachid BESBES",
        "specialty": "Pediatrie",
        "phone": "71571854",
        "address": "31, RUE ALI BELHAOUANE-, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc554",
        "name": "Dr. Hadhami Baili BEN TURKIA",
        "specialty": "Pediatrie",
        "phone": "71806485",
        "address": "IMMEUBLE  EL WAFA CITE OLYMPIQUE, CITE EL KHADRA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.18
        }
    },
    {
        "id": "doc555",
        "name": "Dr. Suzanne Grynsztejn BEN OSMAN",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "296 AV. HABIB BOURGUIBA, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc556",
        "name": "Dr. Jamel BEN MANSOUR",
        "specialty": "Pediatrie",
        "phone": "72257766",
        "address": "RUE MED BACH HAMBA IMM. MRABEH GROMBALIA, GROMBALIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.6,
            "lng": 10.5
        }
    },
    {
        "id": "doc557",
        "name": "Dr. Abderrazak BEN KHAYAT",
        "specialty": "Pediatrie",
        "phone": "75651802",
        "address": "66 AV. M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc558",
        "name": "Dr. Marie Claude Orain BEN HASSINE",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "3, RUE L. FAURE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc559",
        "name": "Dr. Adel BEN EL KADHI",
        "specialty": "Pediatrie",
        "phone": "71514945",
        "address": "AV. HABIB BOURGUIBA IMM. M'HREZ ATTIA HAMMAMET, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc560",
        "name": "Dr. Abderrahmen BEN AYED",
        "specialty": "Pediatrie",
        "phone": "71244680",
        "address": "49, AV.DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc561",
        "name": "Dr. Chadli BEN ABDALLAH",
        "specialty": "Pediatrie",
        "phone": "",
        "address": "2, RUE BORJ BOURGUIBA  TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc562",
        "name": "Dr. Ahmed BEN ABDALLAH",
        "specialty": "Pediatrie",
        "phone": "71597947",
        "address": "105, RUE 4001, EZZOUHOUR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.12
        }
    },
    {
        "id": "doc563",
        "name": "Dr. Khedija Souissi BELKAIED",
        "specialty": "Pediatrie",
        "phone": "72281402",
        "address": "129 AV. DE LA REPUBLIQUE, HAMMAMET",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.4,
            "lng": 10.61
        }
    },
    {
        "id": "doc564",
        "name": "Dr. Fethi BAYOUDH",
        "specialty": "Pediatrie",
        "phone": "71535213",
        "address": "AV. 07 NOVEMBRE, OUED ELLIL",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.83,
            "lng": 10.05
        }
    },
    {
        "id": "doc565",
        "name": "Dr. Mohamed Imed BAIZIG",
        "specialty": "Pediatrie",
        "phone": "71482926",
        "address": "21 AV. MONGI SLIM, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc566",
        "name": "Dr. Ameur BADR",
        "specialty": "Pediatrie",
        "phone": "73212766",
        "address": "PLACE FARHAT HACHED IMM BEN DHIA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc567",
        "name": "Dr. Charfeddine ATALLAH",
        "specialty": "Pediatrie",
        "phone": "71710525",
        "address": "9, RUE SIDI AMMAR, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc568",
        "name": "Dr. Ahmed AMAMI",
        "specialty": "Pediatrie",
        "phone": "76242108",
        "address": "RUE DE PRESIDENT METLAOUI, METLAOUI",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.33,
            "lng": 8.4
        }
    },
    {
        "id": "doc569",
        "name": "Dr. Houcine AISSI",
        "specialty": "Pediatrie",
        "phone": "71482379",
        "address": "PLACE DU MARCHE DU MRAH, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc570",
        "name": "Dr. Mustapha ABDERRAHIM",
        "specialty": "Pediatrie",
        "phone": "75271028",
        "address": "36 AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc571",
        "name": "Dr. Hamed Taoufik ZINE EL ABIDINE",
        "specialty": "Ophtalmologie",
        "phone": "73224553",
        "address": "1, AV. LEOPOLD SEDAR SENGHOR, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc572",
        "name": "Dr. Mohamed ZGHAL",
        "specialty": "Ophtalmologie",
        "phone": "71325353",
        "address": "11, RUE DE BELGIQUE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc573",
        "name": "Dr. Mohamed Fethi TRIKI",
        "specialty": "Ophtalmologie",
        "phone": "71664059",
        "address": "8, RUE APOLIO 11 CITE M'HRAJENE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc574",
        "name": "Dr. Tarek TOUIHRI",
        "specialty": "Ophtalmologie",
        "phone": "78630676",
        "address": "RUE ALI BELAHOUANE  JENDOUBA, JENDOUBA SUD",
        "city": "JENDOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.5,
            "lng": 8.78
        }
    },
    {
        "id": "doc575",
        "name": "Dr. Mohamed SOUSSI",
        "specialty": "Ophtalmologie",
        "phone": "73681767",
        "address": "AV. F.HACHED 5100-M'HDIA, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc576",
        "name": "Dr. Nejib SFAR",
        "specialty": "Ophtalmologie",
        "phone": "71259736",
        "address": "6, AV. CARTHAGE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc577",
        "name": "Dr. Sahbi SAHLI",
        "specialty": "Ophtalmologie",
        "phone": "71518511",
        "address": "70 AV. DE LINDEPENDANCE -, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc578",
        "name": "Dr. Kamel ROMDHANE",
        "specialty": "Ophtalmologie",
        "phone": "71330567",
        "address": "10, RUE DE HOLLANDE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc579",
        "name": "Dr. Mouldi RAMZI",
        "specialty": "Ophtalmologie",
        "phone": "71354765",
        "address": "19, RUE DJEBEL EL FATH, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc580",
        "name": "Dr. Fethi NOUIRA",
        "specialty": "Ophtalmologie",
        "phone": "73226340",
        "address": "2 BIS RUE FARABI, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc581",
        "name": "Dr. Mohamed Ridha M'RAD",
        "specialty": "Ophtalmologie",
        "phone": "71244984",
        "address": "41, RUE MONGI SLIM-, BAB SOUIKA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.805,
            "lng": 10.165
        }
    },
    {
        "id": "doc582",
        "name": "Dr. Mohamed MOUELHI",
        "specialty": "Ophtalmologie",
        "phone": "71631266",
        "address": "AV. RABTA, TEBOURBA",
        "city": "MANOUBA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.82,
            "lng": 9.84
        }
    },
    {
        "id": "doc583",
        "name": "Dr. Badreddine MHADHBI",
        "specialty": "Ophtalmologie",
        "phone": "73380765",
        "address": "AV. DE LA REPUBLIQUE ENFIDHA, ENFIDHA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.13,
            "lng": 10.38
        }
    },
    {
        "id": "doc584",
        "name": "Dr. Taoufik MELLOULI",
        "specialty": "Ophtalmologie",
        "phone": "73243811",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc585",
        "name": "Dr. Mokhtar MECHRI",
        "specialty": "Ophtalmologie",
        "phone": "75274566",
        "address": "POLYCLINIQUE EL YASMINE RUE SIDI ABBES HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc586",
        "name": "Dr. Noureddine MAHJOUBI",
        "specialty": "Ophtalmologie",
        "phone": "75272659",
        "address": "63 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc587",
        "name": "Dr. Jamel MAAMRI",
        "specialty": "Ophtalmologie",
        "phone": "76434694",
        "address": "AV. HABIB BOURGUIBA, SIDI BOUZID EST",
        "city": "SIDI BOUZID",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.03,
            "lng": 9.48
        }
    },
    {
        "id": "doc588",
        "name": "Dr. Mohamed Ridha KHROUF",
        "specialty": "Ophtalmologie",
        "phone": "71325735",
        "address": "1, RUE J. ABDENASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc589",
        "name": "Dr. Ridha KHANFIR",
        "specialty": "Ophtalmologie",
        "phone": "71719726",
        "address": "5, AV. TAIEB M'HIRI RESIDENCE ERRIDHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc590",
        "name": "Dr. Mahmoud KAMOUN",
        "specialty": "Ophtalmologie",
        "phone": "74220820",
        "address": "28, RUE KAIROUAN, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc591",
        "name": "Dr. Mohamed KAMMOUN",
        "specialty": "Ophtalmologie",
        "phone": "71888550",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc592",
        "name": "Dr. Habib JEMMALI",
        "specialty": "Ophtalmologie",
        "phone": "72438660",
        "address": "68, RUE 2 MARS 1934 CENTRE BOUCHOUCHA, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc593",
        "name": "Dr. Selma HARRABI",
        "specialty": "Ophtalmologie",
        "phone": "71793158",
        "address": "IMM TOUTA 2000 LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc594",
        "name": "Dr. Moez HAMMAMI",
        "specialty": "Ophtalmologie",
        "phone": "71441380",
        "address": "7, AV. M'HAMED ALI IMM YASSAMINE, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc595",
        "name": "Dr. Moncef HALLEB",
        "specialty": "Ophtalmologie",
        "phone": "71706300",
        "address": "7, AV. HABIB BOURGUIBA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc596",
        "name": "Dr. Moheddine GABSI",
        "specialty": "Ophtalmologie",
        "phone": "75852395",
        "address": "AV. SALAH BEN YOUSSEF IMM. TLILI DJERBA MIDOUN, BENI KHEDACHE",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.45
        }
    },
    {
        "id": "doc597",
        "name": "Dr. Salma Triki ELLOUZE",
        "specialty": "Ophtalmologie",
        "phone": "74406242",
        "address": "AV. 7 NOVEMBRE IMM IBN SINA SFAX JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc598",
        "name": "Dr. Lotfi TURKI",
        "specialty": "Urologie",
        "phone": "74404596",
        "address": "AV. 7 NOVEMBRE IMM. LES GALERIES ESC 2, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc599",
        "name": "Dr. Kamel TISSAOUI",
        "specialty": "Urologie",
        "phone": "71730893",
        "address": "25, RUE EL JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc600",
        "name": "Dr. Slim Rene Georges RAKAM",
        "specialty": "Urologie",
        "phone": "71792372",
        "address": "110 RUE DE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc601",
        "name": "Dr. Sami MASMOUDI",
        "specialty": "Urologie",
        "phone": "74405102",
        "address": "AV. 7NOV IMM RAYAN SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc602",
        "name": "Dr. Habib KRICHENE",
        "specialty": "Urologie",
        "phone": "74228810",
        "address": "12, RUE LEOPOLD SINGHOR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc603",
        "name": "Dr. Ahmed KOUBAA",
        "specialty": "Urologie",
        "phone": "75278722",
        "address": "251 AV. M'HAMED ALI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc604",
        "name": "Dr. Sami JEMAL",
        "specialty": "Urologie",
        "phone": "74298165",
        "address": "AV. HABIB BOURGUIBA IM INTILAKA II ESC \"C\", SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc605",
        "name": "Dr. Slah FRIAA",
        "specialty": "Urologie",
        "phone": "",
        "address": "AV. HABIB BOURGUIBA, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc606",
        "name": "Dr. Hamadi DAHMOUL",
        "specialty": "Urologie",
        "phone": "73273635",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc607",
        "name": "Dr. Tahar BOUKER",
        "specialty": "Urologie",
        "phone": "71288524",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc608",
        "name": "Dr. Fethi BEN ABID",
        "specialty": "Urologie",
        "phone": "71871255",
        "address": "DELTA MEDICAL RUE 7151 - EL MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc609",
        "name": "Dr. Khaled BACHA",
        "specialty": "Urologie",
        "phone": "71563422",
        "address": "RESIDENCE BEN NEJMA 2RUE OKBA IBN NAFAA, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc610",
        "name": "Dr. Abdelwaheb ABID",
        "specialty": "Urologie",
        "phone": "71345190",
        "address": "16 AV.H.THAMEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc611",
        "name": "Dr. Fakher MEZIOU",
        "specialty": "Stomatologie",
        "phone": "71884002",
        "address": "31 AV.DE LA LIBERTE -, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc612",
        "name": "Dr. Hafedh Foued HAMZA",
        "specialty": "Stomatologie",
        "phone": "71845887",
        "address": "31, RUE AMINE EL ABASSI, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc613",
        "name": "Dr. Abdeljelil GDOURA",
        "specialty": "Stomatologie",
        "phone": "74220591",
        "address": "AV. 7 NOVEMBRE IMM. IBN KHALDOUN ESC D, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc614",
        "name": "Dr. Brahim BOUJEMLA",
        "specialty": "Stomatologie",
        "phone": "71278944",
        "address": "2, RUE HOPITAL, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc615",
        "name": "Dr. Mohamed Chokri TRIKI",
        "specialty": "Rhumatologie",
        "phone": "74402055",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC A, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc616",
        "name": "Dr. Mohamed MSADDEK",
        "specialty": "Rhumatologie",
        "phone": "76653146",
        "address": "AV. M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc617",
        "name": "Dr. Riadh KOLSI",
        "specialty": "Rhumatologie",
        "phone": "74401947",
        "address": "AV. 7 NOVEMBRE IMM. EL FARABI, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc618",
        "name": "Dr. Abderrazak HILA",
        "specialty": "Rhumatologie",
        "phone": "71578000",
        "address": "CLINIQUE SAINT AUGUSTIN RUE ABOU HANIFA, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc619",
        "name": "Dr. Mohamed Rached HADJ ROMDHANE",
        "specialty": "Rhumatologie",
        "phone": "71321862",
        "address": "35, RUE JAMEL ABDENNASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc620",
        "name": "Dr. Mabrouk GABSI",
        "specialty": "Rhumatologie",
        "phone": "75277361",
        "address": "103, AV. M'HAMED ALI IMM. BECHRAOUI, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc621",
        "name": "Dr. Abdelmajid DJEMAL",
        "specialty": "Rhumatologie",
        "phone": "",
        "address": "18, RUE TAREK IBN ZIED, AKOUDA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.87,
            "lng": 10.57
        }
    },
    {
        "id": "doc622",
        "name": "Dr. Hayet BEN SEDRINE",
        "specialty": "Rhumatologie",
        "phone": "71257926",
        "address": "63 AV. F. HACHED, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc623",
        "name": "Dr. Mohamed Salah BEN NEJMA",
        "specialty": "Rhumatologie",
        "phone": "72285011",
        "address": "54, RUE MARBELLE, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc624",
        "name": "Dr. Samir BEN HAMIDA",
        "specialty": "Rhumatologie",
        "phone": "72423311",
        "address": "BIZERTE CENTER 5EME ETAGE, BIZERTE NORD",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.27,
            "lng": 9.87
        }
    },
    {
        "id": "doc625",
        "name": "Dr. Kamel BEN ABBES",
        "specialty": "Rhumatologie",
        "phone": "71483929",
        "address": "44, AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc626",
        "name": "Dr. Mounir BELKHOUJA",
        "specialty": "Rhumatologie",
        "phone": "71349286",
        "address": "25 AV. DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc627",
        "name": "Dr. Mohamed AMMOUS",
        "specialty": "Rhumatologie",
        "phone": "74299669",
        "address": "RUE KAIROUAN INTILAKA II BLOC D, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc628",
        "name": "Dr. Abdelmajid KHALED",
        "specialty": "Radiotherapie",
        "phone": "71796792",
        "address": "44-46 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc629",
        "name": "Dr. Chafik TURKI",
        "specialty": "Radiologie",
        "phone": "74226056",
        "address": "49, RUE TAHAR SFAR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc630",
        "name": "Dr. Ahmed Mourad SOUISSI",
        "specialty": "Radiologie",
        "phone": "71257666",
        "address": "10, RUE MUSTAPHA MBAREK, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc631",
        "name": "Dr. Mohieddine SELLAMI",
        "specialty": "Radiologie",
        "phone": "71247977",
        "address": "4, RUE DU CAIRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc632",
        "name": "Dr. Sami SAIED",
        "specialty": "Radiologie",
        "phone": "71700800",
        "address": "7, RUE SIDI BOU SAID, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc633",
        "name": "Dr. Khemais NAIJA",
        "specialty": "Radiologie",
        "phone": "71234338",
        "address": "20, RUE J. ABDENASSER, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc634",
        "name": "Dr. Wadie MSEDDI",
        "specialty": "Radiotherapie",
        "phone": "74663765",
        "address": "6 IMM. EL FARABI BLD 7 NOVEMBRE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc635",
        "name": "Dr. Hassen TURKI",
        "specialty": "Radiologie",
        "phone": "74241511",
        "address": "IMM. FARABI AV. 7 NOVEMBRE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc636",
        "name": "Dr. Slaheddine TEBIB",
        "specialty": "Radiologie",
        "phone": "72530030",
        "address": "3, RUE DE BELHOUANE, MENZEL BOUZELFA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.68,
            "lng": 10.58
        }
    },
    {
        "id": "doc637",
        "name": "Dr. Mohamed Ben Mahmoud SIALA",
        "specialty": "Radiologie",
        "phone": "71232212",
        "address": "CENTRE GAMMA 44-46 AV. DE LA LIBERTE TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc638",
        "name": "Dr. Mohamed SELLAMI",
        "specialty": "Radiologie",
        "phone": "71793706",
        "address": "CENTRE GAMMA 44-46 AV. DE LA LIBERTE TUNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc639",
        "name": "Dr. Hosni RAIES",
        "specialty": "Radiologie",
        "phone": "71790064",
        "address": "RUE TAHAR SFAR EL MANAR II, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc640",
        "name": "Dr. Habib NOUIRA",
        "specialty": "Radiologie",
        "phone": "73229450",
        "address": "2, RUE  EL FARABI TROCADERO, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc641",
        "name": "Dr. Mohamed Montasser MOUELHI",
        "specialty": "Radiologie",
        "phone": "71786986",
        "address": "7, PLACE PASTEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc642",
        "name": "Dr. Mohamed MHIRI",
        "specialty": "Radiologie",
        "phone": "71252636",
        "address": "39 AV. HABIB BOURGUIBA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc643",
        "name": "Dr. Nabil LOUATI",
        "specialty": "Radiologie",
        "phone": "74217000",
        "address": "POLYCLINIQUE CHAMS ROUTE GREMDA KM 3, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc644",
        "name": "Dr. Mohamed Ali LAHOUEL",
        "specialty": "Radiologie",
        "phone": "77231040",
        "address": "NÂ° 39, RUE 2 MARS 1934, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc645",
        "name": "Dr. Jalel KHALFALLAH",
        "specialty": "Radiologie",
        "phone": "71502511",
        "address": "4, RUE BECHIR SFAR, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc646",
        "name": "Dr. Maher KECHRID",
        "specialty": "Radiologie",
        "phone": "71752352",
        "address": "RUE ABOu ZAMA EL BALOUI GALERIE LE \"LE PRINTEMPS\", KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc647",
        "name": "Dr. Mohamed KAMMOUN",
        "specialty": "Radiologie",
        "phone": "74297222",
        "address": "28, RUE DE KAIROUAN, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc648",
        "name": "Dr. Mohamed Wahid HASSINE",
        "specialty": "Radiologie",
        "phone": "71893613",
        "address": "7, PLACE PASTEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc649",
        "name": "Dr. Mondher HAFSIA",
        "specialty": "Radiologie",
        "phone": "71234307",
        "address": "4, RUE LIMAM RASSAA - CENTRE D'IMAGERIE MEDICAL, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc650",
        "name": "Dr. Mohamed Idir HADJOUDJ",
        "specialty": "Radiologie",
        "phone": "",
        "address": "CLINIQUE ABOU LOUBABA, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc651",
        "name": "Dr. Taoufik HADDAD",
        "specialty": "Radiologie",
        "phone": "71344518",
        "address": "49, RUE DE MARSEILLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc652",
        "name": "Dr. Khaled GHEDAS",
        "specialty": "Radiologie",
        "phone": "73272165",
        "address": "CLINIQUE ESSALEM ROUTE GPI C. SFAYA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc653",
        "name": "Dr. Msadek GALLALI",
        "specialty": "Radiologie",
        "phone": "75643187",
        "address": "75, RUE 2 MAI 1966 ROUTE DE TATAOUINE, MEDENINE NORD",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.5
        }
    },
    {
        "id": "doc654",
        "name": "Dr. Kamel Hedi FOURATI",
        "specialty": "Radiologie",
        "phone": "71258641",
        "address": "4, RUE DU CAIRE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc655",
        "name": "Dr. Samir DJEBBARI",
        "specialty": "Radiologie",
        "phone": "",
        "address": "CENTRE  COBALT ST \"CHIFA\" -, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc656",
        "name": "Dr. Nidhal Mamdouh DALY",
        "specialty": "Radiologie",
        "phone": "77474000",
        "address": "18, RUE RACHID JABBARI, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc657",
        "name": "Dr. Farouk CHARFI",
        "specialty": "Radiologie",
        "phone": "74215338",
        "address": "RTE DE TUNIS KM4 M. BOUASSIDA COMPLEXE IBN NAFIS ROUTE DE TUNIS KM4, SAKIET EZZIT",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.78,
            "lng": 10.75
        }
    },
    {
        "id": "doc658",
        "name": "Dr. Amina Bouali BOUZAKOURA",
        "specialty": "Radiologie",
        "phone": "72345325",
        "address": "1, RUE GHANDI, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc659",
        "name": "Dr. Ridha BEYREM",
        "specialty": "Radiologie",
        "phone": "71519646",
        "address": "17, BLD.ENNAKHIL EZZOUHOUR 5, HRAIRIA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.1
        }
    },
    {
        "id": "doc660",
        "name": "Dr. Mourad BEN YOUNES",
        "specialty": "Radiologie",
        "phone": "71369400",
        "address": "CARREFOUR MEDICAL - EN FACE DE LA MUNICIPALITE - A, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc661",
        "name": "Dr. Fateh BEN MANSOUR",
        "specialty": "Radiologie",
        "phone": "75860728",
        "address": "239 AV. HABIB BOURGUIBA, TATAOUINE SUD",
        "city": "TATAOUINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 32.92,
            "lng": 10.45
        }
    },
    {
        "id": "doc662",
        "name": "Dr. Nebrass Dakhlia BEN KHEDHER",
        "specialty": "Radiologie",
        "phone": "71704534",
        "address": "4, AV. TAIEB M'HIRI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc663",
        "name": "Dr. Malek Harbi BEN AZZOUZ",
        "specialty": "Radiologie",
        "phone": "71960000",
        "address": "POLYCLINIQUE LES BERGES DU LAC, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc664",
        "name": "Dr. Tarek BEL HADJ",
        "specialty": "Radiologie",
        "phone": "71880139",
        "address": "38 AV. GHANA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc665",
        "name": "Dr. Sadok Skander AZZOUZ",
        "specialty": "Radiologie",
        "phone": "71275416",
        "address": "BARDO CENTRE IMM. 4   APP. 1, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc666",
        "name": "Dr. Taieb AOUINTI",
        "specialty": "Radiologie",
        "phone": "72290316",
        "address": "AV. HABIB BOURGUIBA, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc667",
        "name": "Dr. Riadh ABID",
        "specialty": "Radiologie",
        "phone": "74404700",
        "address": "97, RUE DE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc668",
        "name": "Dr. Noureddine ABDALLAH",
        "specialty": "Radiologie",
        "phone": "75271692",
        "address": "AV. MONGI SLIM, GABES EST",
        "city": "GABES",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.11
        }
    },
    {
        "id": "doc669",
        "name": "Dr. Wajdi ZRIBI",
        "specialty": "Ophtalmologie",
        "phone": "74227730",
        "address": "14 AV. HABIB BOURGUIBA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc670",
        "name": "Dr. Mourad ZAHAF",
        "specialty": "Ophtalmologie",
        "phone": "74226287",
        "address": "2, RUE LEOPOLD SENGHOR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc671",
        "name": "Dr. Adel TRABELSI",
        "specialty": "Ophtalmologie",
        "phone": "71872125",
        "address": "DELTA MEDICAL RUE 7151 - EL MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc672",
        "name": "Dr. Fatma El Euch SOUA",
        "specialty": "Ophtalmologie",
        "phone": "78450692",
        "address": "12 AV.H.BOURGUIBA, BEJA NORD",
        "city": "BEJA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 9.18
        }
    },
    {
        "id": "doc673",
        "name": "Dr. Abderraouf SELLAMI",
        "specialty": "Ophtalmologie",
        "phone": "77230364",
        "address": "9 BIS RUE 20 MARS B. JALLADINE, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc674",
        "name": "Dr. Mohamed Riadh ROMDHANE",
        "specialty": "Ophtalmologie",
        "phone": "73215574",
        "address": "AV. TAHER SFAR IMM BEN DHIAB, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc675",
        "name": "Dr. Mohamed Raouf REKIK",
        "specialty": "Ophtalmologie",
        "phone": "71951727",
        "address": "TANIT MEDICAL- ANGLE RUE 8300/9301 - 5EME ETAGE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc676",
        "name": "Dr. Jamel RABIA",
        "specialty": "Ophtalmologie",
        "phone": "71351953",
        "address": "5, RUE HOUDAYBYA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc677",
        "name": "Dr. Abdellatif OUALHA",
        "specialty": "Ophtalmologie",
        "phone": "74401440",
        "address": "LES GALERIES  AV. DES MARTYRS, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc678",
        "name": "Dr. Hamouda MZALI",
        "specialty": "Ophtalmologie",
        "phone": "71763122",
        "address": "AV. KHABTHANI IMM.32 CITE ENNOZHA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc679",
        "name": "Dr. Ahmed M'RAD",
        "specialty": "Ophtalmologie",
        "phone": "71354798",
        "address": "22, RUE EL JAZIRA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc680",
        "name": "Dr. Mohamed MLIK",
        "specialty": "Ophtalmologie",
        "phone": "74404965",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC\"A\" MEZZANINE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc681",
        "name": "Dr. Mohamed MESSADI",
        "specialty": "Ophtalmologie",
        "phone": "71256310",
        "address": "22 BIS AV.H.THAMEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc682",
        "name": "Dr. Nejib MARRAKCHI",
        "specialty": "Ophtalmologie",
        "phone": "71510400",
        "address": "BARDO CENTER LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc683",
        "name": "Dr. Selma Hedia Saada MABROUK",
        "specialty": "Ophtalmologie",
        "phone": "71363328",
        "address": "CARREFOUR MEDICAL ANGLE AV. DES MARTYRS ET DE M'HD, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc684",
        "name": "Dr. Ghazi LAJNEF",
        "specialty": "Ophtalmologie",
        "phone": "72348210",
        "address": "RUE ABDELKADER ZHIOUA, MENZEL TEMIME",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.98
        }
    },
    {
        "id": "doc685",
        "name": "Dr. Hichem KHEDHIRI",
        "specialty": "Ophtalmologie",
        "phone": "78221969",
        "address": "2 AV.M.SLIM, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc686",
        "name": "Dr. Mohamed Habib KCHAOU",
        "specialty": "Ophtalmologie",
        "phone": "74228072",
        "address": "AV. H. THAMEUR IMM. EL MANAR, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc687",
        "name": "Dr. Tarek KARRAY",
        "specialty": "Ophtalmologie",
        "phone": "74223579",
        "address": "AV. H. BOURGUIBA IMM INTILAKA 2ESC D SFAX, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc688",
        "name": "Dr. Nabil KAMMOUN",
        "specialty": "Ophtalmologie",
        "phone": "73259411",
        "address": "77 AV. DE LA REPUBLIQUE, M'SAKEN",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.72,
            "lng": 10.58
        }
    },
    {
        "id": "doc689",
        "name": "Dr. Hamadi KALLEL",
        "specialty": "Ophtalmologie",
        "phone": "71767352",
        "address": "CITE JAMIL  BLOC B EL MENZAH VI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc690",
        "name": "Dr. Ammar JAZIRI",
        "specialty": "Ophtalmologie",
        "phone": "71254026",
        "address": "20, RUE MARSEILLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc691",
        "name": "Dr. Ahmed Rached HAMZA",
        "specialty": "Ophtalmologie",
        "phone": "71270315",
        "address": "9, RUE MED T.BEN ACHOUR, LA MARSA",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.88,
            "lng": 10.32
        }
    },
    {
        "id": "doc692",
        "name": "Dr. Kais GUERMAZI",
        "specialty": "Ophtalmologie",
        "phone": "71438850",
        "address": "10, AV. HABIB BOURGUIBA CARTHAGE BYRSA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc693",
        "name": "Dr. Mejda Bacha GHARBI",
        "specialty": "Ophtalmologie",
        "phone": "72387533",
        "address": "274 AV. HABIB BOURGUIBA, KORBA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.57,
            "lng": 10.86
        }
    },
    {
        "id": "doc694",
        "name": "Dr. Hafedh FAKHFAKH",
        "specialty": "Ophtalmologie",
        "phone": "74226894",
        "address": "43, AV. HEDI CHAKER, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc695",
        "name": "Dr. Mohamed Mourad EL EUCH",
        "specialty": "Ophtalmologie",
        "phone": "72252051",
        "address": "13 AV. DE LA REPUBLIQUE, MENZEL BOUZELFA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.68,
            "lng": 10.58
        }
    },
    {
        "id": "doc696",
        "name": "Dr. Ali DEBBICHE",
        "specialty": "Ophtalmologie",
        "phone": "71351364",
        "address": "86, AV. HABIB BOURGUIBA, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc697",
        "name": "Dr. Abdelkader DAOUD",
        "specialty": "Ophtalmologie",
        "phone": "77471622",
        "address": "RUE RACHID JABBARI, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc698",
        "name": "Dr. Mohamed Taoufik DAGHFOUS",
        "specialty": "Ophtalmologie",
        "phone": "71894643",
        "address": "110, AV.  DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc699",
        "name": "Dr. Habib CHARFEDDINE",
        "specialty": "Ophtalmologie",
        "phone": "72255675",
        "address": "1, AV. DE LA REPUBLIQUE, GROMBALIA",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.6,
            "lng": 10.5
        }
    },
    {
        "id": "doc700",
        "name": "Dr. Mohamed Abdelmajid BSAIES",
        "specialty": "Ophtalmologie",
        "phone": "71345943",
        "address": "44, AV. HABIB BOURGUIBA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc701",
        "name": "Dr. Afef BOUZIRI",
        "specialty": "Ophtalmologie",
        "phone": "71367366",
        "address": "AV. HABIB THAMEUR IMM. SNIT IBN JAZZAR III C16 - E, EL MOUROUJ",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.7,
            "lng": 10.19
        }
    },
    {
        "id": "doc702",
        "name": "Dr. Mohamed Nejib BEN ZINA",
        "specialty": "Ophtalmologie",
        "phone": "77220885",
        "address": "CITE COMMERCIALE NÂ°2- I, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc703",
        "name": "Dr. Noomene BEN SALEM",
        "specialty": "Ophtalmologie",
        "phone": "76222239",
        "address": "RUE SIDI BEN YACOUB, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc704",
        "name": "Dr. Nabil Skander BEN OSMAN",
        "specialty": "Ophtalmologie",
        "phone": "71888899",
        "address": "RESIDENCE LES JASMINS BLOC A RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc705",
        "name": "Dr. Iteb Dhouib BEN AYED",
        "specialty": "Ophtalmologie",
        "phone": "74402825",
        "address": "AV. 7 NOVEMBRE IMM  RAYAN B SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc706",
        "name": "Dr. Mustapha Lotfi BELAJOUZA",
        "specialty": "Ophtalmologie",
        "phone": "73225580",
        "address": "10, PLACE F.HACHED, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc707",
        "name": "Dr. Taieb BEL HADJ MESSAOUD",
        "specialty": "Ophtalmologie",
        "phone": "71241616",
        "address": "6, RUE ANNABA, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc708",
        "name": "Dr. Imed BARBIROU",
        "specialty": "Ophtalmologie",
        "phone": "71445778",
        "address": "3 AV. ABDALLAH FARHAT, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc709",
        "name": "Dr. Mondher BACCAR",
        "specialty": "Ophtalmologie",
        "phone": "71706908",
        "address": "COMPLEXE LE FORUM ARIANA BLOC B 1, AV. DE CARTHAGE, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    },
    {
        "id": "doc710",
        "name": "Dr. Thabet ARBAOUI",
        "specialty": "Ophtalmologie",
        "phone": "77477644",
        "address": "AV. HABIB BOURGUIBA - CITE COMMERCIALE NÂ° 12, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc711",
        "name": "Dr. Nabil AMMAR",
        "specialty": "Ophtalmologie",
        "phone": "74296542",
        "address": "28, RUE HABIB MAAZOUM IMM TAPARURA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc712",
        "name": "Dr. Anissa Bahri ABDELHAK",
        "specialty": "Ophtalmologie",
        "phone": "71211213",
        "address": "75 AV. SALAMBO APP 15 ET 4, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc713",
        "name": "Dr. Ali ZAOUCH",
        "specialty": "O R L",
        "phone": "71870265",
        "address": "28, RUE MOSBAH JARBOU EL MANAR 2, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc714",
        "name": "Dr. Ahmed Faouzi SOUAYED",
        "specialty": "O R L",
        "phone": "7327040",
        "address": "16, RUE 22.01.52, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc715",
        "name": "Dr. Anouar SIALA",
        "specialty": "O R L",
        "phone": "75652737",
        "address": "97 AV. M'HAMED BADRA HOUMET SOUK, DJERBA HOUMET ESSOUK",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.88,
            "lng": 10.85
        }
    },
    {
        "id": "doc716",
        "name": "Dr. Sadok REJEB",
        "specialty": "O R L",
        "phone": "71799663",
        "address": "44 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc717",
        "name": "Dr. Habib RADHOUAN",
        "specialty": "O R L",
        "phone": "77473015",
        "address": "M'HDIA CENTRE, MAHDIA",
        "city": "MAHDIA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.5,
            "lng": 11.06
        }
    },
    {
        "id": "doc718",
        "name": "Dr. Ali NOURI",
        "specialty": "O R L",
        "phone": "71787262",
        "address": "GALAXIE 2000 RUE DE PALESTINE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc719",
        "name": "Dr. Mohamed MILADI",
        "specialty": "O R L",
        "phone": "72462858",
        "address": "20, RUE T. MHIRI, MENZEL BOURGUIBA",
        "city": "BIZERTE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 37.15,
            "lng": 9.78
        }
    },
    {
        "id": "doc720",
        "name": "Dr. Riadh MARRAKCHI",
        "specialty": "O R L",
        "phone": "71346630",
        "address": "24 BIS, RUE H. THAMEUR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc721",
        "name": "Dr. Faycal LASSOUED",
        "specialty": "O R L",
        "phone": "71782090",
        "address": "56 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc722",
        "name": "Dr. Mohamed Fethi KEDOUS",
        "specialty": "O R L",
        "phone": "71848241",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc723",
        "name": "Dr. Mohamed Habib HENCHIRI",
        "specialty": "O R L",
        "phone": "71441848",
        "address": "RADES FORET BLOC 5 NÂ° 158, RADES",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.76,
            "lng": 10.27
        }
    },
    {
        "id": "doc724",
        "name": "Dr. Slaheddine HAMZA",
        "specialty": "O R L",
        "phone": "71731428",
        "address": "5, RUE M.BALI, EL BOUHAIRA-EL KRAM",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.3
        }
    },
    {
        "id": "doc725",
        "name": "Dr. Mohamed Bechir GHARIANI",
        "specialty": "O R L",
        "phone": "73270321",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc726",
        "name": "Dr. Mohamed Imed FOURATI",
        "specialty": "O R L",
        "phone": "74229473",
        "address": "62 AV. H. CHAKER, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc727",
        "name": "Dr. Ridha ELLOUZE",
        "specialty": "O R L",
        "phone": "71799772",
        "address": "CLINIQUE ETTAOUFIK-TUNIS BOULEVARD DU 7 NOV, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc728",
        "name": "Dr. Belgacem EL EUCHI",
        "specialty": "O R L",
        "phone": "75643850",
        "address": "28 AV. 2 MAI 1966, MEDENINE NORD",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.5
        }
    },
    {
        "id": "doc729",
        "name": "Dr. Adel EL AYEB",
        "specialty": "O R L",
        "phone": "72292757",
        "address": "PLACE 9 AVRIL CENTRE HALA, HAMMAM LIF",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.72,
            "lng": 10.33
        }
    },
    {
        "id": "doc730",
        "name": "Dr. Najeh CHENITI",
        "specialty": "O R L",
        "phone": "73220976",
        "address": "SOEUR JOSEPHINE, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc731",
        "name": "Dr. Ramzi CHEBIL",
        "specialty": "O R L",
        "phone": "76227258",
        "address": "RUE DES MIMOSAS GAFSA, GAFSA SUD",
        "city": "GAFSA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.42,
            "lng": 8.78
        }
    },
    {
        "id": "doc732",
        "name": "Dr. Noureddine CHABCHOUB",
        "specialty": "O R L",
        "phone": "71348564",
        "address": "7, RUE DE BIZERTE, BEN AROUS",
        "city": "BEN AROUS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.75,
            "lng": 10.22
        }
    },
    {
        "id": "doc733",
        "name": "Dr. Mahmoud BOUGUECHA",
        "specialty": "O R L",
        "phone": "74406444",
        "address": "AV. DES MARTYRS IMM PALMARIUM ESC B SFAX JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc734",
        "name": "Dr. Slaheddine BEN SALEM",
        "specialty": "O R L",
        "phone": "71346630",
        "address": "35 AV. DE PARIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc735",
        "name": "Dr. Tarek BEN MANSOUR",
        "specialty": "O R L",
        "phone": "78228160",
        "address": "AV. TAIEB MHIRI  - 7100 LE KEF, LE KEF EST",
        "city": "LE KEF",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.18,
            "lng": 8.71
        }
    },
    {
        "id": "doc736",
        "name": "Dr. Anouar BEN JABALLAH",
        "specialty": "O R L",
        "phone": "75648590",
        "address": "RUE IBN SINA MEDENINE, MEDENINE NORD",
        "city": "MEDENINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 33.35,
            "lng": 10.5
        }
    },
    {
        "id": "doc737",
        "name": "Dr. Habib BEN CHEIKH",
        "specialty": "O R L",
        "phone": "",
        "address": "BARDO CENTER IMM 1 LR BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc738",
        "name": "Dr. Mohamed Fethi BELLAGHA",
        "specialty": "O R L",
        "phone": "71245344",
        "address": "9, RUE AMILCAR, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc739",
        "name": "Dr. Ali BELKAHIA",
        "specialty": "O R L",
        "phone": "71561889",
        "address": "8, RUE APOLIO 11 CITE M'HRAJENE, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc740",
        "name": "Dr. Mustapha ATALLAH",
        "specialty": "O R L",
        "phone": "71289542",
        "address": "CLINIQUE SAINT AUGUSTIN 15, RUE ABOU HANIFA, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc741",
        "name": "Dr. Tajeddine ADHOUM",
        "specialty": "O R L",
        "phone": "71321732",
        "address": "28, RUE  CHARLES DE GAULLE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc742",
        "name": "Dr. Kamel JALLOULI",
        "specialty": "Nutrition",
        "phone": "71284234",
        "address": "56 AV. DE LA LIBERTE, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc743",
        "name": "Dr. Jalel DHAHBI",
        "specialty": "Non classe",
        "phone": "",
        "address": "RUE 3064 NÂ°24, SIDJOUMI",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.78,
            "lng": 10.14
        }
    },
    {
        "id": "doc744",
        "name": "Dr. Mohamed Anouer RACHDI",
        "specialty": "Neurologie",
        "phone": "",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc745",
        "name": "Dr. Fethi LETAIEF",
        "specialty": "Neurologie",
        "phone": "71950768",
        "address": "IMM. TANIT MEDICAL - ANGLE RUE 8300/8301 - 3EME ET, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc746",
        "name": "Dr. Rachid HENTATI",
        "specialty": "Neurologie",
        "phone": "74401614",
        "address": "AV. DES MARTYRS IMM.LES GALERIES ESC.11,1ER ET.NÂ°3, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc747",
        "name": "Dr. Habib GAZZAH",
        "specialty": "Neurologie",
        "phone": "77226319",
        "address": "2 AV. KORTOBA, KAIROUAN NORD",
        "city": "KAIROUAN",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.67,
            "lng": 10.1
        }
    },
    {
        "id": "doc748",
        "name": "Dr. Jalel EL OUNI",
        "specialty": "Neurologie",
        "phone": "73241411",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc749",
        "name": "Dr. Mohamed Adib BOUDAOUARA",
        "specialty": "Neurologie",
        "phone": "7498762",
        "address": "AV. 7 NOV IMM AMAL CENTRE, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc750",
        "name": "Dr. Kais TOUMI",
        "specialty": "Neuro-chirurgie",
        "phone": "71870164",
        "address": "RESIDENCE LES JASMINS RUE 7151 EL MANAR 1, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc751",
        "name": "Dr. Khaled HENTATI",
        "specialty": "Neuro-chirurgie",
        "phone": "7497806",
        "address": "AV. 7 NOVEMBRE IMM. IBN KHALDOUN ESC D, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc752",
        "name": "Dr. Lassaad BSILI",
        "specialty": "Neuro-chirurgie",
        "phone": "73273800",
        "address": "CLINIQUE LES OLIVIERS BD, 7 NOVEMBRE - KHEZAMA, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc753",
        "name": "Dr. Mohamed Tahar BEN RHOUMA",
        "specialty": "Neuro-chirurgie",
        "phone": "71797747",
        "address": "17 AV. DES ETATS UNIS, BAB BHAR",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.79,
            "lng": 10.18
        }
    },
    {
        "id": "doc754",
        "name": "Dr. Tahar RAYANE",
        "specialty": "Nephrologie",
        "phone": "71263101",
        "address": "CLINIQUE UDIAL 17 RUE FRANCOIS BOUCHET - BABA SAADOUN, EL OMRANE",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.81,
            "lng": 10.16
        }
    },
    {
        "id": "doc755",
        "name": "Dr. Rached JAZI",
        "specialty": "Nephrologie",
        "phone": "72221426",
        "address": "106, AV. HEDI CHAKER, NABEUL",
        "city": "NABEUL",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.45,
            "lng": 10.73
        }
    },
    {
        "id": "doc756",
        "name": "Dr. Mohamed Aziz EL MATRI",
        "specialty": "Nephrologie",
        "phone": "71886800",
        "address": "TUNIDIAL - 3, RUE 7209, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc757",
        "name": "Dr. Adel BELLAAJ",
        "specialty": "Nephrologie",
        "phone": "74296459",
        "address": "CENTRE HEMODIALYSE EL BASSATINE SFAX, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc758",
        "name": "Dr. Mohamed ABDELMOULA",
        "specialty": "Nephrologie",
        "phone": "71221407",
        "address": "2, RUE KAIED MOSBAH LE BARDO, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc759",
        "name": "Dr. Anis MASMOUDI",
        "specialty": "Medecine physique",
        "phone": "74400938",
        "address": "AV. 7 NOV IMM IBN SINA NÂ° 12 SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc760",
        "name": "Dr. Iskander GHATTASSI",
        "specialty": "Medecine physique",
        "phone": "74401909",
        "address": "AV. 7NOV RUE SIDI MED EL KARRAY SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc761",
        "name": "Dr. Hafedh AKROUT",
        "specialty": "Medecine physique",
        "phone": "",
        "address": "NORD HILTON  TUNIS, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc762",
        "name": "Dr. Hichem ZOUITEN",
        "specialty": "Medecine legale",
        "phone": "71221398",
        "address": "7, AV. BOURGUIBA, LE BARDO",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.809,
            "lng": 10.13
        }
    },
    {
        "id": "doc763",
        "name": "Dr. Abdelmajid ZORGUI",
        "specialty": "Medecine interne",
        "phone": "77474841",
        "address": "AV. DU 18 JANVIER KASSERINE, KASSERINE EZZOUHOUR",
        "city": "KASSERINE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.17,
            "lng": 8.83
        }
    },
    {
        "id": "doc764",
        "name": "Dr. Hichem TARZI BRAHEM",
        "specialty": "Medecine interne",
        "phone": "71872653",
        "address": "DELTA MEDICAL RUE 7151 - EL MANAR I, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc765",
        "name": "Dr. Aida Ben Noomen MUSTAPHA",
        "specialty": "Medecine interne",
        "phone": "74406511",
        "address": "AV. 7 NOV IM RAYAN SFAX EL JADIDA, SFAX MEDINA",
        "city": "SFAX",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 34.74,
            "lng": 10.76
        }
    },
    {
        "id": "doc766",
        "name": "Dr. Ismail KHEDER",
        "specialty": "Medecine interne",
        "phone": "73215442",
        "address": "AV.  IBN EL JAZZAR IMM ROUATBI, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc767",
        "name": "Dr. Ismail GHITH",
        "specialty": "Medecine interne",
        "phone": "73215442",
        "address": "RUE IBN JAZZAR IMM ROUATBI, SOUSSE MEDINA",
        "city": "SOUSSE",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 35.82,
            "lng": 10.64
        }
    },
    {
        "id": "doc768",
        "name": "Dr. Khaled CHARFI",
        "specialty": "Medecine interne",
        "phone": "71282417",
        "address": "21, AV. TAHAR B. AMMAR CITE ESSAADA 3 EL MANNAR 2, EL MENZAH",
        "city": "TUNIS",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.84,
            "lng": 10.17
        }
    },
    {
        "id": "doc769",
        "name": "Dr. Faouzi BEN SALEM",
        "specialty": "Medecine interne",
        "phone": "71666275",
        "address": "CITE JAMIL  ESCALIER E EL MENZAH VI, ARIANA",
        "city": "ARIANA",
        "hours": "Lundi - Vendredi, 9:00 - 17:00",
        "location": {
            "lat": 36.86,
            "lng": 10.19
        }
    }
]

export const cities = [...new Set(doctors.map(doc => doc.city))].sort();
