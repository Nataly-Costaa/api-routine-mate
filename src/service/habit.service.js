import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Cria a instância do cliente Prisma (Funções do SQL)

export const HabitService = {
  async getAll() {
    return prisma.habit.findMany();
  },

  async create({ title, description, goal }) {
    return prisma.habit.create({
      data: {
        title,
        description,
        goal,
      },
    });
  },

  async complete(id) {
    const habit = await prisma.habit.findUnique({ where: {id} });

    const isNowCompleted = !habit.completed;

    return prisma.habit.update({
      where: { id },
      data: {
        completed: isNowCompleted,
        completedAt: isNowCompleted ? new Date() : null,
      },
    });
  },

  async getById(id) {
    return prisma.habit.findUnique({
        where: { id }
    });
  },

  async delete(id) {
    return prisma.habit.delete({
      where: { id },
    });
  },

  async report() {
    const all = await prisma.habit.findMany();
    const total = all.length;
    const completed = all.filter(h => h.completed).length;
    const pending = total - completed;

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    return {
      total,
      completed,
      pending,
      progress: `${percent}%`,
    };
  }
};
