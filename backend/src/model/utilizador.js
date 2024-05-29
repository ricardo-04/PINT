const Sequelize = require('sequelize');
const sequelize = require('./database');
const Centro = require('./centro');

const Utilizador = sequelize.define('utilizador', {
    ID_FUNCIONARIO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ID_CENTRO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Centro,
            key: 'ID_CENTRO'
        }
    },
    ADMINISTRADOR:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    ID_ADMIN:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    NOME_FUNCIONARIO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    NIF: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MORADA: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    NTELEMOVEL: {
        type: Sequelize.NUMERIC,
        allowNull: true
    },
    EMAIL: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    FUNCAO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DATAINICIO: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});
Utilizador.belongsTo(Centro, {foreignKey: 'ID_CENTRO'});
Utilizador.belongsTo(Utilizador, {foreignKey: 'ID_FUNCIONARIO'});
module.exports = Utilizador;
