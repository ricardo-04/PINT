const Sequelize = require('sequelize');
const sequelize = require('./database');
const Eventos = require('./eventos');

const Area = sequelize.define('area', {
    NAREA: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NEVENTO: {
        type: Sequelize.NUMERIC,
        allowNull: true,
        references: {
            model: Eventos,
            key: 'NEVENTO'
        }
    },
    NOMEAREA: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Area;
