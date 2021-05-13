"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Task = connection_1.default.define('Task', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    created: {
        type: sequelize_1.DataTypes.TIME
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Task;
//# sourceMappingURL=task.js.map