import { Sequelize } from 'sequelize';

const db = new Sequelize('todolist-app', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
});

export default db;