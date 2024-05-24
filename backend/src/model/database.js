const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    database: 'pint', 
    username: 'postgres', 
    password: 'ricardo04', 
    host: 'localhost', 
    port: 5432, 
    dialect: 'postgres' 
});

module.exports = sequelize;