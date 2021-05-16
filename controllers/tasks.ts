import { Request, Response } from 'express';

import Task from '../models/task';

export const getTasks = async (req: Request, res: Response) => {

    const tareas = await Task.findAll({});

    res.json({ tareas });
};

export const getTask = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const tarea = await Task.findByPk(id);

    if (tarea) {
        res.json({ tarea });    
    } else {
        res.status(404).json({ msg: 'Tarea inexistente' });
    }
};

export const postTask = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        const tarea = await Task.create(body);
        res.json( tarea );
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const putTask= async (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    try {

        const tarea = await Task.findByPk(id);

        if (!tarea) {
            return res.status(404).json({ msg: 'No existe una tarea con id ' + id });
        }

        await tarea.update(body);

        res.json(tarea);
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const tarea = await Task.findByPk(id);
    if (!tarea) {
        return res.status(404).json({ msg: 'No existe una tarea con id ' + id });
    }

    await tarea.destroy();

    res.json(tarea);
};