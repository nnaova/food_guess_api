import { Context } from 'hono';
import { foods } from '../data/foods';

export const getAllFoods = (c: Context) => {
  return c.json({
    success: true,
    data: foods,
    count: foods.length,
    lastUpdated: new Date().toISOString()
  });
};

// Fonction pour obtenir un aliment spécifique par son ID (peut être utile ultérieurement)
export const getFoodById = (c: Context) => {
  const id = parseInt(c.req.param('id'));
  
  const food = foods.find(food => food.id === id);
  
  if (!food) {
    return c.json({ 
      success: false, 
      message: 'Aliment non trouvé' 
    }, 404);
  }
  
  return c.json({
    success: true,
    data: food,
    lastUpdated: new Date().toISOString()
  });
};

// Fonction pour filtrer les aliments par catégorie
export const getFoodsByCategory = (c: Context) => {
  const category = c.req.param('category');
  
  const filteredFoods = foods.filter(
    food => food.category.toLowerCase() === category.toLowerCase()
  );
  
  if (filteredFoods.length === 0) {
    return c.json({ 
      success: false, 
      message: 'Aucun aliment trouvé dans cette catégorie' 
    }, 404);
  }
  
  return c.json({
    success: true,
    data: filteredFoods,
    count: filteredFoods.length,
    category: category,
    lastUpdated: new Date().toISOString()
  });
};

// Fonction pour obtenir toutes les catégories disponibles
export const getAllCategories = (c: Context) => {
  const categories = [...new Set(foods.map(food => food.category))];
  
  return c.json({
    success: true,
    data: categories,
    count: categories.length,
    lastUpdated: new Date().toISOString()
  });
};
