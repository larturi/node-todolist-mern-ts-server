"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.putTask = exports.postTask = exports.getTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const completed = (req.query.completed === 'true') ? 1 : 0;
    const tareas = yield task_1.default.findAll({
        where: {
            completed: completed
        }
    });
    res.json({ tareas });
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield task_1.default.findByPk(id);
    if (tarea) {
        res.json({ tarea });
    }
    else {
        res.status(404).json({ msg: 'Tarea inexistente' });
    }
});
exports.getTask = getTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tarea = yield task_1.default.create(body);
        res.json(tarea);
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.postTask = postTask;
const putTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const tarea = yield task_1.default.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ msg: 'No existe una tarea con id ' + id });
        }
        yield tarea.update(body);
        res.json(tarea);
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.putTask = putTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield task_1.default.findByPk(id);
    if (!tarea) {
        return res.status(404).json({ msg: 'No existe una tarea con id ' + id });
    }
    yield tarea.destroy();
    res.json(tarea);
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasks.js.map