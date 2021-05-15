"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../controllers/tasks");
const router = express_1.Router();
router.get('/', tasks_1.getTasks);
router.get('/:id', tasks_1.getTask);
router.post('/', tasks_1.postTask);
router.put('/:id', tasks_1.putTask);
router.delete('/:id', tasks_1.deleteTask);
exports.default = router;
//# sourceMappingURL=task.js.map