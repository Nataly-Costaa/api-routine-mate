import { Habit } from "../model/Habit.js";
import fs from "fs";
import path from "path";

const dbPath = path.resolve("src", "data", "db.json");

function readDatabase() {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
}

function saveDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

class HabitController {
    getHabits(req, res) {
        const db = readDatabase();
        res.json({ habits: db.habits });
    }

    createHabit(req, res) {
        const {title, description, goal} = req.body;

        if (!title || !description || !goal) {
            return res.status(400).json({message: "Título, descrição e frequência são obrigatórios"});
        }

        const newHabit = new Habit(title, description, goal);

        const db = readDatabase();
        db.habits.push(newHabit);
        saveDatabase(db);

        res.status(201).json({ message: "Habito adicionado!", habit: newHabit });
    }

    markHabitCompleted(req, res) {
        const { id } = req.params;
        const db = readDatabase();
        const habit = db.habits.find(h => h.id === id);

        if (!habit) {
            return res.status(404).json({ message: "Hábito não encontrado!" });
        }

        habit.completed = true;
        habit.completedAt = new Date().toLocaleString('pt-BR');
        saveDatabase(db);

        res.json({ message: "Hábito marcado como concluído!", habit });
    }

    habitReport(req, res) {
        const db = readDatabase();
        const total = db.habits.length;
        const completed = db.habits.filter(h => h.completed).length;
        const pending = total - completed;

        res.json({
            totalHabits: total,
            completedHabits: completed,
            pendingHabits: pending,
            progress: `${completed}/${total} hábitos concluídos.`
        });
    }

    deleteHabit(req, res) {
        const { id } = req.params;
        const db = readDatabase();
    
        const habitIndex = db.habits.findIndex(habit => habit.id === id);
    
        if (habitIndex === -1) {
            return res.status(404).json({ message: "Hábito não encontrado!" });
        }
    
        db.habits.splice(habitIndex, 1);
        saveDatabase(db);
    
        res.json({ message: "Hábito removido com sucesso!" });
    }
}

export default new HabitController();