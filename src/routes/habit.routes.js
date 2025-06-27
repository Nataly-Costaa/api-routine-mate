import { Router } from 'express';
import { HabitController } from '../controller/habit.controller.js';

const router = Router();

router.get('/', HabitController.getHabits);
router.get('/report', HabitController.report);
router.post('/register', HabitController.createHabit);
router.patch('/:id/complete', HabitController.markCompleted);
router.delete('/:id', HabitController.deleteHabit);

export default router;
