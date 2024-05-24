const Sequelize = require('sequelize');
const sequelize = require('./database');
const Centro = require('./centro');

const Utilizador = sequelize.define('utilizador', {
    NFUNCIONARIO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    NCENTRO: {
        type: Sequelize.NUMERIC,
        allowNull: false,
        references: {
            model: Centro,
            key: 'NCENTRO'
        }
    },
    UTI_NFUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'utilizadors',
            key: 'NFUNCIONARIO'
        }
    },
    NOMEFUNCIONARIO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    NIF: {
        type: Sequelize.NUMERIC,
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
    timestamps: false
});

module.exports = Utilizador;
