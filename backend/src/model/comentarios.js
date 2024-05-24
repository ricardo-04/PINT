const Sequelize = require('sequelize');
const sequelize = require('./database');
const Forum = require('./forum');
const Centro = require('./centro');

const Comentarios = sequelize.define('comentarios', {
    NCOMENTARIO: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NPOST: {
        type: Sequelize.NUMERIC,
        allowNull: false,
        references: {
            model: Forum,
            key: 'NPOST'
        }
    },
    NCENTRO: {
        type: Sequelize.NUMERIC,
        allowNull: false,
        references: {
            model: Centro,
            key: 'NCENTRO'
        }
    },
    DESCRICAO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DATACOMENTARIO: {
        type: Sequelize.DATE,
        allowNull: false
    },
    NFUNCIONARIO1: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    NRECOMENDACAO1: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    AVALIACAO: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Comentarios;
