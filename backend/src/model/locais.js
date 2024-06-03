const Sequelize = require('sequelize');
const sequelize = require('./database');

const Locais = sequelize.define('locais', {
    ID_LOCAL: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    DESIGNACAO_LOCAL: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    LOCALIZACAO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    REVIEW: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Locais;
