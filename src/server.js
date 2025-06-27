import express from 'express';
import habitRoutes from './routes/habit.routes.js';
import { corsMiddleware } from './middleware/cors.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(corsMiddleware);

app.use('/habits', habitRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
