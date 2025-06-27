import cors from 'cors';

export const corsMiddleware = cors({
  origin: '*', // ou especifique seu domínio
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
});
