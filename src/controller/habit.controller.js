import { HabitService } from '../service/habit.service.js';

export const HabitController = {
  async getHabits(req, res) {
    const habits = await HabitService.getAll();
    res.json({ habits });
  },

  async createHabit(req, res) {
    const { title, description, goal } = req.body;

    if (!title || !description || !goal) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const habit = await HabitService.create({ title, description, goal });
    res.status(201).json({ message: 'Hábito criado!', habit });
  },

  async markCompleted(req, res) {
    const { id } = req.params;
    try {
      const updated = await HabitService.complete(id);
      res.json({ message: 'Hábito concluído!', habit: updated });
    } catch {
      res.status(404).json({ message: 'Hábito não encontrado' });
    }
  },

  async deleteHabit(req, res) {
    const { id } = req.params;
    try {
      await HabitService.delete(id);
      res.json({ message: 'Hábito deletado com sucesso!' });
    } catch {
      res.status(404).json({ message: 'Hábito não encontrado' });
    }
  },

  async report(req, res) {
    const relatorio = await HabitService.report();
    res.json(relatorio);
  }
};
