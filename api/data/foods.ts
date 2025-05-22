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
  }
];
