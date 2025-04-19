import express from "express";
import habits from "./routes/habit.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/habits", habits);

app.listen(PORT, () => {
    console.log(`Rodando o servidor na porta ${PORT}`);
});