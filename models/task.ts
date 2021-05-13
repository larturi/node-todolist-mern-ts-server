import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Task = db.define('Task', {
    name: {
        type: DataTypes.STRING
    },
    created: {
        type: DataTypes.TIME
    },
    completed: {
        type: DataTypes.BOOLEAN
    }
});

export default Task;