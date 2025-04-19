import { v4 as uuidv4 } from 'uuid';

export class Habit {
    constructor(title, description, goal) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.goal = goal;
        this.completed = false;
        this.createdAt = new Date().toLocaleString('pt-BR');
    }
}