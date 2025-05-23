// filepath: /home/naova/Documents/perso/food_guess_api/api/data/foods.ts
import { Food } from '../types/food';

// Liste des aliments que l'on peut trouver dans une collecte alimentaire
export const foods: Food[] = [
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    name: 'Riz',
    description: 'Riz blanc en sachet de 1kg',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/rice.jpg'
  },
  {
    id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7",
    name: 'Pâtes',
    description: 'Pâtes de blé dur en paquet de 500g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/pasta.jpg'
  },
  {
    id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8",
    name: 'Conserve de thon',
    description: 'Thon au naturel en conserve de 160g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/tuna.jpg'
  },
  {
    id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9",
    name: 'Lentilles',
    description: 'Lentilles vertes en sachet de 500g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/lentils.jpg'
  },
  {
    id: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0",
    name: 'Conserve de haricots rouges',
    description: 'Haricots rouges en conserve de 400g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/red-beans.jpg'
  },
  {
    id: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1",
    name: 'Huile d\'olive',
    description: 'Huile d\'olive vierge extra en bouteille de 75cl',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/olive-oil.jpg'
  },
  {
    id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2",
    name: 'Lait UHT',
    description: 'Lait demi-écrémé en brique de 1L',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/milk.jpg'
  },
  {
    id: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3",
    name: 'Café moulu',
    description: 'Café moulu en paquet de 250g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/coffee.jpg'
  },
  {
    id: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4",
    name: 'Chocolat noir',
    description: 'Chocolat noir 70% en tablette de 100g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/dark-chocolate.jpg'
  },
  {
    id: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5",
    name: 'Céréales petit-déjeuner',
    description: 'Céréales complètes en boîte de 375g',
    isScoring: false,
    points: 1,
    imageUrl: '/images/foods/cereals.jpg'
  },
  // Ajout des exemples de l'application Flutter
  {
    id: "2c783a4d-3aa0-4bc6-b27f-b871524c8d83",
    name: "tomate",
    description: "",
    isScoring: false,
    points: 1
  },
  {
    id: "ecf6ab93-a9e2-41ff-a1ce-ba99f17cdc28",
    name: "pomme",
    description: "",
    isScoring: false,
    points: 1
  },
  {
    id: "26597547-b972-4259-98de-1e0cfdb1abcf",
    name: "poire",
    description: "",
    isScoring: false,
    points: 1
  },
  {
    id: "1f3caefb-5e17-4cbc-a4de-661d7c2ff473",
    name: "pomme de terre",
    description: "",
    isScoring: false,
    points: 1
  },
  {
    id: "de463d57-b2a4-4511-9832-756545b77af1",
    name: "patate",
    description: "",
    isScoring: false,
    points: 1
  },

  // --- RACINES & TUBERCULES ---
  {
    id: "ff5d3a9d-6b8c-4e2a-8f7b-11dc452a9a3b",
    name: "Carottes",
    description: "Racines oranges riches en beta-carotène",
    isScoring: false,
    points: 1
  },
  {
    id: "8a71c9b3-d2e5-4f6a-9b8c-7d3e5a2f1b8c",
    name: "Navets",
    description: "Racines blanches à la saveur douce-amère",
    isScoring: false,
    points: 1
  },
  {
    id: "2d3e4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
    name: "Panais",
    description: "Racines beiges à la saveur sucrée",
    isScoring: false,
    points: 1
  },
  {
    id: "3e4f5a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b",
    name: "Betteraves",
    description: "Racines pourpres à la saveur terreuse",
    isScoring: false,
    points: 1
  },
  {
    id: "4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c",
    name: "Radis",
    description: "Petites racines croquantes et piquantes",
    isScoring: false,
    points: 1
  },
  {
    id: "5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d",
    name: "Topinambours",
    description: "Tubercules à la saveur proche de l'artichaut",
    isScoring: false,
    points: 1
  },

  // --- LÉGUMES-FEUILLES ---
  {
    id: "6b7c8d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e",
    name: "Laitue",
    description: "Feuilles vertes croquantes pour salades",
    isScoring: false,
    points: 1
  },
  {
    id: "7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    name: "Épinards",
    description: "Feuilles vertes riches en fer",
    isScoring: false,
    points: 1
  },
  {
    id: "8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a",
    name: "Bette (blette)",
    description: "Légume à feuilles vertes et côtes blanches",
    isScoring: false,
    points: 1
  },
  {
    id: "9e0f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b",
    name: "Chou frisé (kale)",
    description: "Feuilles vertes frisées riches en vitamines",
    isScoring: false,
    points: 1
  },
  {
    id: "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
    name: "Roquette",
    description: "Feuilles à la saveur poivrée pour salades",
    isScoring: false,
    points: 1
  },
  {
    id: "b2c3d4e5-f6a7-b8c9-d0e1-f2a3b4c5d6e7",
    name: "Chou chinois",
    description: "Légume à feuilles douces et croquantes",
    isScoring: false,
    points: 1
  },

  // --- LÉGUMES-FLEURS ---
  {
    id: "c3d4e5f6-a7b8-c9d0-e1f2-a3b4c5d6e7f8",
    name: "Brocoli",
    description: "Légume-fleur vert riche en vitamines",
    isScoring: false,
    points: 1
  },
  {
    id: "d4e5f6a7-b8c9-d0e1-f2a3-b4c5d6e7f8a9",
    name: "Chou-fleur",
    description: "Légume-fleur blanc comestible",
    isScoring: false,
    points: 1
  },
  {
    id: "e5f6a7b8-c9d0-e1f2-a3b4-c5d6e7f8a9b0",
    name: "Artichaut",
    description: "Fleur comestible aux feuilles charnues",
    isScoring: false,
    points: 1
  },
  {
    id: "f6a7b8c9-d0e1-f2a3-b4c5-d6e7f8a9b0c1",
    name: "Romanesco",
    description: "Légume-fleur vert à motif fractal",
    isScoring: false,
    points: 1
  },

  // --- LÉGUMES-FRUITS ---
  {
    id: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    name: "Poivrons",
    description: "Fruits charnus de différentes couleurs",
    isScoring: false,
    points: 1
  },
  {
    id: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    name: "Courgettes",
    description: "Fruits allongés à chair tendre",
    isScoring: false,
    points: 1
  },
  {
    id: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    name: "Aubergines",
    description: "Fruits violets à chair spongieuse",
    isScoring: false,
    points: 1
  },
  {
    id: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    name: "Concombres",
    description: "Fruits allongés à chair croquante et fraîche",
    isScoring: false,
    points: 1
  },

  // --- LÉGUMINEUSES FRAÎCHES ---
  {
    id: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6",
    name: "Haricots verts",
    description: "Gousses allongées et croquantes",
    isScoring: false,
    points: 1
  },
  {
    id: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7",
    name: "Pois gourmands",
    description: "Gousses plates contenant de petits pois",
    isScoring: false,
    points: 1
  },
  {
    id: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    name: "Petits pois",
    description: "Graines rondes et vertes à la saveur sucrée",
    isScoring: false,
    points: 1
  },

  // --- ALLIACÉES ---
  {
    id: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    name: "Oignons",
    description: "Bulbes à saveur piquante utilisés comme condiment",
    isScoring: false,
    points: 1
  },
  {
    id: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    name: "Ail",
    description: "Bulbes divisés en gousses à saveur forte",
    isScoring: false,
    points: 1
  },
  {
    id: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    name: "Échalotes",
    description: "Petits bulbes doux à la saveur entre l'oignon et l'ail",
    isScoring: false,
    points: 1
  },
  {
    id: "e7f8a9b0-c1d2-e3f4-a5b6-c7d8e9f0a1b2",
    name: "Poireaux",
    description: "Légumes à longue tige blanche et feuilles vertes",
    isScoring: false,
    points: 1
  },

  // --- AUTRES LÉGUMES ---
  {
    id: "f8a9b0c1-d2e3-f4a5-b6c7-d8e9f0a1b2c3",
    name: "Chou rouge",
    description: "Légume à feuilles pourpres serrées",
    isScoring: false,
    points: 1
  },
  {
    id: "a9b0c1d2-e3f4-a5b6-c7d8-e9f0a1b2c3d4",
    name: "Chou blanc",
    description: "Légume à feuilles pâles serrées",
    isScoring: false,
    points: 1
  },
  {
    id: "b0c1d2e3-f4a5-b6c7-d8e9-f0a1b2c3d4e5",
    name: "Chou vert",
    description: "Légume à feuilles vertes serrées",
    isScoring: false,
    points: 1
  },
  {
    id: "c1d2e3f4-a5b6-c7d8-e9f0-a1b2c3d4e5f6",
    name: "Céleri branche",
    description: "Tiges vertes croquantes à saveur prononcée",
    isScoring: false,
    points: 1
  },
  {
    id: "d2e3f4a5-b6c7-d8e9-f0a1-b2c3d4e5f6a7",
    name: "Céleri rave",
    description: "Racine bulbeuse à chair blanche",
    isScoring: false,
    points: 1
  },
  {
    id: "e3f4a5b6-c7d8-e9f0-a1b2-c3d4e5f6a7b8",
    name: "Champignons de Paris",
    description: "Champignons blancs cultivés à chapeau rond",
    isScoring: false,
    points: 1
  },
  {
    id: "f4a5b6c7-d8e9-f0a1-b2c3-d4e5f6a7b8c9",
    name: "Fenouil",
    description: "Légume bulbeux à saveur anisée",
    isScoring: false,
    points: 1
  },

  // --- FRUITS À PÉPINS ---
  {
    id: "a5b6c7d8-e9f0-a1b2-c3d4-e5f6a7b8c9d0",
    name: "Raisins",
    description: "Petits fruits en grappes, sucrés et juteux",
    isScoring: false,
    points: 1
  },

  // --- FRUITS À NOYAU ---
  {
    id: "b6c7d8e9-f0a1-b2c3-d4e5-f6a7b8c9d0e1",
    name: "Pêches",
    description: "Fruits à chair juteuse et peau duveteuse",
    isScoring: false,
    points: 1
  },
  {
    id: "c7d8e9f0-a1b2-c3d4-e5f6-a7b8c9d0e1f2",
    name: "Nectarines",
    description: "Fruits lisses semblables à la pêche",
    isScoring: false,
    points: 1
  },
  {
    id: "d8e9f0a1-b2c3-d4e5-f6a7-b8c9d0e1f2a3",
    name: "Prunes",
    description: "Fruits ovales à chair juteuse et sucrée",
    isScoring: false,
    points: 1
  },
  {
    id: "e9f0a1b2-c3d4-e5f6-a7b8-c9d0e1f2a3b4",
    name: "Abricots",
    description: "Petits fruits orange à chair tendre",
    isScoring: false,
    points: 1
  },
  {
    id: "f0a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5",
    name: "Cerises",
    description: "Petits fruits rouges au noyau dur",
    isScoring: false,
    points: 1
  },

  // --- AGRUMES ---
  {
    id: "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
    name: "Oranges",
    description: "Fruits orange à pulpe juteuse et acidulée",
    isScoring: false,
    points: 1
  },
  {
    id: "b2c3d4e5-f6a7-b8c9-d0e1-f2a3b4c5d6e7",
    name: "Citrons",
    description: "Fruits jaunes à pulpe acide",
    isScoring: false,
    points: 1
  },
  {
    id: "c3d4e5f6-a7b8-c9d0-e1f2-a3b4c5d6e7f8",
    name: "Mandarines",
    description: "Petits agrumes orange faciles à peler",
    isScoring: false,
    points: 1
  },
  {
    id: "d4e5f6a7-b8c9-d0e1-f2a3-b4c5d6e7f8a9",
    name: "Clémentines",
    description: "Petits agrumes sucrés sans pépins",
    isScoring: false,
    points: 1
  },
  {
    id: "e5f6a7b8-c9d0-e1f2-a3b4-c5d6e7f8a9b0",
    name: "Pamplemousses",
    description: "Gros agrumes à pulpe juteuse et légèrement amère",
    isScoring: false,
    points: 1
  },

  // --- FRUITS EXOTIQUES ---
  {
    id: "f6a7b8c9-d0e1-f2a3-b4c5-d6e7f8a9b0c1",
    name: "Bananes",
    description: "Fruits allongés à chair douce et peau jaune",
    isScoring: false,
    points: 1
  },
  {
    id: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    name: "Mangues",
    description: "Fruits tropicaux à chair orange sucrée",
    isScoring: false,
    points: 1
  },
  {
    id: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    name: "Ananas",
    description: "Fruits tropicaux à écorce rugueuse et chair juteuse",
    isScoring: false,
    points: 1
  },
  {
    id: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    name: "Avocats",
    description: "Fruits à chair crémeuse riche en bonnes graisses",
    isScoring: false,
    points: 1
  },
  {
    id: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    name: "Kiwis",
    description: "Petits fruits à peau duveteuse et chair verte",
    isScoring: false,
    points: 1
  },
  {
    id: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6",
    name: "Papayes",
    description: "Fruits tropicaux à chair orange sucrée",
    isScoring: false,
    points: 1
  },
  {
    id: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7",
    name: "Fruits de la passion",
    description: "Petits fruits ronds à pulpe aromatique",
    isScoring: false,
    points: 1
  },

  // --- FRUITS ROUGES ---
  {
    id: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    name: "Fraises",
    description: "Petits fruits rouges à chair juteuse et parfumée",
    isScoring: false,
    points: 1
  },
  {
    id: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    name: "Framboises",
    description: "Petits fruits rouges délicats à saveur sucrée-acidulée",
    isScoring: false,
    points: 1
  },
  {
    id: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    name: "Mûres",
    description: "Petits fruits noirs composés de drupes",
    isScoring: false,
    points: 1
  },
  {
    id: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    name: "Myrtilles",
    description: "Petites baies bleues à chair juteuse",
    isScoring: false,
    points: 1
  },

  // --- AUTRES FRUITS ---
  {
    id: "e7f8a9b0-c1d2-e3f4-a5b6-c7d8e9f0a1b2",
    name: "Melons",
    description: "Gros fruits à écorce épaisse et chair parfumée",
    isScoring: false,
    points: 1
  },
  {
    id: "f8a9b0c1-d2e3-f4a5-b6c7-d8e9f0a1b2c3",
    name: "Pastèques",
    description: "Gros fruits à chair rouge juteuse et rafraîchissante",
    isScoring: false,
    points: 1
  },
  {
    id: "a9b0c1d2-e3f4-a5b6-c7d8-e9f0a1b2c3d4",
    name: "Figues",
    description: "Fruits à chair sucrée et graines croquantes",
    isScoring: false,
    points: 1
  },
  {
    id: "b0c1d2e3-f4a5-b6c7-d8e9-f0a1b2c3d4e5",
    name: "Dattes fraîches",
    description: "Fruits oblongs très sucrés du palmier dattier",
    isScoring: false,
    points: 1
  }
];
