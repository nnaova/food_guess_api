import { Food } from '../types/food';

// Liste des aliments que l'on peut trouver dans une collecte alimentaire
export const foods: Food[] = [
  {
    id: 1,
    name: 'Riz',
    category: 'Féculents',
    description: 'Riz blanc en sachet de 1kg',
    nutritionalValue: 'Riche en glucides',
    origin: 'France',
    imageUrl: '/images/foods/rice.jpg'
  },
  {
    id: 2,
    name: 'Pâtes',
    category: 'Féculents',
    description: 'Pâtes de blé dur en paquet de 500g',
    nutritionalValue: 'Riche en glucides et protéines',
    origin: 'Italie',
    imageUrl: '/images/foods/pasta.jpg'
  },
  {
    id: 3,
    name: 'Conserve de thon',
    category: 'Conserves',
    description: 'Thon au naturel en conserve de 160g',
    nutritionalValue: 'Riche en protéines et omega-3',
    origin: 'Océan Atlantique',
    imageUrl: '/images/foods/tuna.jpg'
  },
  {
    id: 4,
    name: 'Lentilles',
    category: 'Légumineuses',
    description: 'Lentilles vertes en sachet de 500g',
    nutritionalValue: 'Riche en fibres et protéines végétales',
    origin: 'France',
    imageUrl: '/images/foods/lentils.jpg'
  },
  {
    id: 5,
    name: 'Conserve de haricots rouges',
    category: 'Conserves',
    description: 'Haricots rouges en conserve de 400g',
    nutritionalValue: 'Riche en fibres et protéines végétales',
    origin: 'Espagne',
    imageUrl: '/images/foods/red-beans.jpg'
  },
  {
    id: 6,
    name: 'Huile d\'olive',
    category: 'Huiles',
    description: 'Huile d\'olive vierge extra en bouteille de 75cl',
    nutritionalValue: 'Riche en acides gras mono-insaturés',
    origin: 'Grèce',
    imageUrl: '/images/foods/olive-oil.jpg'
  },
  {
    id: 7,
    name: 'Lait UHT',
    category: 'Produits laitiers',
    description: 'Lait demi-écrémé en brique de 1L',
    nutritionalValue: 'Source de calcium et protéines',
    origin: 'France',
    imageUrl: '/images/foods/milk.jpg'
  },
  {
    id: 8,
    name: 'Café moulu',
    category: 'Boissons',
    description: 'Café moulu en paquet de 250g',
    nutritionalValue: 'Contient de la caféine',
    origin: 'Colombie',
    imageUrl: '/images/foods/coffee.jpg'
  },
  {
    id: 9,
    name: 'Chocolat noir',
    category: 'Sucreries',
    description: 'Chocolat noir 70% en tablette de 100g',
    nutritionalValue: 'Riche en antioxydants',
    origin: 'Côte d\'Ivoire',
    imageUrl: '/images/foods/dark-chocolate.jpg'
  },
  {
    id: 10,
    name: 'Céréales petit-déjeuner',
    category: 'Petit-déjeuner',
    description: 'Céréales complètes en boîte de 375g',
    nutritionalValue: 'Source de fibres',
    origin: 'Allemagne',
    imageUrl: '/images/foods/cereals.jpg'
  }
];
