import { Context } from 'hono';
import { foods } from '../data/foods';

export const getAllFoods = (c: Context) => {
  // Format compatible avec l'application Flutter
  return c.json({
    betItems: foods,
    exportDate: new Date().toISOString()
  });
};

// Fonction pour obtenir un aliment spécifique par son ID (peut être utile ultérieurement)
export const getFoodById = (c: Context) => {
  const id = c.req.param('id');
  
  const food = foods.find(food => food.id === id);
  
  if (!food) {
    return c.json({ 
      success: false, 
      message: 'Aliment non trouvé' 
    }, 404);
  }
  
  return c.json({
    betItems: [food],
    exportDate: new Date().toISOString()
  });
};
