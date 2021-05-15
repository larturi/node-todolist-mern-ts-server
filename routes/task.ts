import { Router } from 'express';

import { 
    getTasks,
    getCompletedTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
} from '../controllers/tasks';

const router = Router();

router.get('/', getTasks)
router.get('/completed', getCompletedTasks)
router.get('/:id', getTask)
router.post('/', postTask)
router.put('/:id', putTask)
router.delete('/:id', deleteTask)

export default router;