import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import foodRouter from './routes/foodRoutes'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

// Middleware pour gérer les CORS (pour permettre l'accès depuis l'application mobile)
app.use('/*', cors({
  origin: '*', // En production, vous devriez limiter cela à l'origine de votre application mobile
  allowMethods: ['GET'],
  allowHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400, // 24 heures
}))

app.get('/', (c) => {
  return c.json({ 
    message: 'API Food Guess', 
    version: '1.0.0',
    description: 'API pour l\'application Food Guess qui permet de récupérer les informations sur les aliments disponibles lors des collectes alimentaires.',
    endpoints: {
      '/api/foods': 'Récupère la liste complète des aliments au format compatible avec l\'application Flutter',
      '/api/foods/:id': 'Récupère les détails d\'un aliment spécifique par son UUID'
    },
    format: {
      betItems: 'Tableau contenant les aliments',
      exportDate: 'Date d\'exportation des données'
    },
    documentation: 'Cette API est en lecture seule et les données sont maintenues côté serveur pour garantir leur intégrité.',
    lastUpdated: new Date().toISOString()
  })
})

// Monter le routeur des aliments sur le chemin /foods
app.route('/foods', foodRouter)

export default handle(app)
