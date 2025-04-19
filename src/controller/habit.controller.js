import { Habit } from "../model/Habit.js";
import fs from "fs"; // Importa o módulo fs para ler e escrever arquivos
import path from "path"; // Importa path para resolver caminhos de arquivos

// Define o caminho do arquivo de banco de dados
const dbPath = path.resolve("src", "data", "db.json");

// Função para ler o banco de dados JSON
function readDatabase() {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
}

// Função para salvar dados no banco JSON
function saveDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

class HabitController {
    // Método para listar todos os hábitos
    getHabits(req, res) {
        const db = readDatabase();
        res.json({ habits: db.habits });
    }

    // Método para criar um novo hábito
    createHabit(req, res) {
        const {title, description, goal} = req.body;

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!title || !description || !goal) {
            return res.status(400).json({message: "Título, descrição e frequência são obrigatórios"});
        }

        const newHabit = new Habit(title, description, goal);

         // Lê o banco de dados, adiciona o novo hábito e salva
        const db = readDatabase();
        db.habits.push(newHabit);
        saveDatabase(db);

        res.status(201).json({ message: "Habito adicionado!", habit: newHabit });
    }

    // Método para marcar um hábito como concluído
    markHabitCompleted(req, res) {
        const { id } = req.params;
        const db = readDatabase();
        const habit = db.habits.find(h => h.id === id);

        // Se o hábito não for encontrado, retorna erro
        if (!habit) {
            return res.status(404).json({ message: "Hábito não encontrado!" });
        }

        // Marca o hábito como concluído e salva a data de conclusão
        habit.completed = true;
        habit.completedAt = new Date().toLocaleString('pt-BR');
        saveDatabase(db);

        res.json({ message: "Hábito marcado como concluído!", habit });
    }

      // Método que gera um relatório geral dos hábitos
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

    // Método para deletar um hábito
    deleteHabit(req, res) {
        const { id } = req.params;
        const db = readDatabase();
    
        const habitIndex = db.habits.findIndex(habit => habit.id === id);
    
        // Se o hábito não existir, retorna erro
        if (habitIndex === -1) {
            return res.status(404).json({ message: "Hábito não encontrado!" });
        }
    
        // Remove o hábito do array e salva o banco
        db.habits.splice(habitIndex, 1);
        saveDatabase(db);
    
        res.json({ message: "Hábito removido com sucesso!" });
    }
}

export default new HabitController();