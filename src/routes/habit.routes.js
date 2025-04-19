import { Router } from "express";
import HabitController from "../controller/habit.controller.js";

const habits = Router();

habits.get("/", HabitController.getHabits);
habits.get("/report", HabitController.habitReport);
habits.post("/cadastra", HabitController.createHabit);
habits.patch("/:id/complete", HabitController.markHabitCompleted);
habits.delete("/:id", HabitController.deleteHabit);

export default habits;