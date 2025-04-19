import express from "express";
import habits from "./routes/habit.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json());

// Define o prefixo "/habits" para todas as rotas do habits
app.use("/habits", habits);

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    console.log(`Rodando o servidor na porta ${PORT}`);
});