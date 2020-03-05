const {Sequelize, Op, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', {logging: console.log});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
