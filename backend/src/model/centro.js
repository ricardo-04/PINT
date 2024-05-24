const Sequelize = require('sequelize');
const sequelize = require('./database');

const Centro = sequelize.define('centro', {
    NCENTRO: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NOMECENTRO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    MORADA: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    NEVENTOS: {
        type: Sequelize.NUMERIC,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Centro;
