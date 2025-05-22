import { Hono } from 'hono';
import { getAllFoods, getFoodById } from '../controllers/foodController';

const foodRouter = new Hono();

// Route pour récupérer tous les aliments
foodRouter.get('/', getAllFoods);

// Route pour récupérer un aliment spécifique par ID
foodRouter.get('/:id', getFoodById);

export default foodRouter;
