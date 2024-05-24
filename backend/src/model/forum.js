const Sequelize = require('sequelize');
const sequelize = require('./database');
const Utilizador = require('./utilizador');

const Forum = sequelize.define('forum', {
    NPOST: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NFUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Utilizador,
            key: 'NFUNCIONARIO'
        }
    },
    NEVENTO: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    DATAFORUM: {
        type: Sequelize.DATE,
        allowNull: false
    },
    DESCRICAO: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Forum;
