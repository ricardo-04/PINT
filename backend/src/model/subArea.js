const Sequelize = require('sequelize');
const sequelize = require('./database');
const Area = require('./area');

const SubArea = sequelize.define('sub_area', {
    NSUBAREA: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NAREA: {
        type: Sequelize.NUMERIC,
        allowNull: false,
        references: {
            model: Area,
            key: 'NAREA'
        }
    },
    NOMEATIVIDADE: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = SubArea;
