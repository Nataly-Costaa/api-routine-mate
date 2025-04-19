import { Router } from "express";
import HabitController from "../controller/habit.controller.js";

const habits = Router();

// LISTA HÁBITOS CADASTRADOS
habits.get("/", HabitController.getHabits);
// RELATÓRIO DE PROGRESSO
habits.get("/report", HabitController.habitReport);
// CADASTRA NOVO HÁBITO
habits.post("/register", HabitController.createHabit);
// MARCA HÁBITO COMO CONCLUÍDO
habits.patch("/:id/complete", HabitController.markHabitCompleted);
// DELETA HÁBITO PELO ID
habits.delete("/:id", HabitController.deleteHabit);

export default habits;