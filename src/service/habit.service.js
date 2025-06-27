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
    return prisma.habit.update({
      where: { id },
      data: {
        completed: true,
        completedAt: new Date(),
      },
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

    return {
      total,
      completed,
      pending,
      progress: `${completed}/${total} hábitos concluídos`,
    };
  }
};
