import { Router } from 'express';

import { 
    getTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
} from '../controllers/tasks';

const router = Router();

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', postTask)
router.put('/:id', putTask)
router.delete('/:id', deleteTask)

export default router;