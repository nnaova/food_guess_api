import { Hono } from 'hono';
import { getAllFoods, getFoodById, getFoodsByCategory, getAllCategories } from '../controllers/foodController';

const foodRouter = new Hono();

// Route pour récupérer tous les aliments
foodRouter.get('/', getAllFoods);

// Route pour récupérer toutes les catégories disponibles
foodRouter.get('/categories', getAllCategories);

// Route pour filtrer les aliments par catégorie
foodRouter.get('/category/:category', getFoodsByCategory);

// Route pour récupérer un aliment spécifique par ID
foodRouter.get('/:id', getFoodById);

export default foodRouter;
