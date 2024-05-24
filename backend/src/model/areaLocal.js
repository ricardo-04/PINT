const Sequelize = require('sequelize');
const sequelize = require('./database');
const Locais = require('./locais');
const Area = require('./area');

const AreaLocal = sequelize.define('arealocal', {
    IDLOCAL: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Locais,
            key: 'IDLOCAL'
        }
    },
    NAREA: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Area,
            key: 'NAREA'
        }
    }
}, {
    timestamps: false
});

module.exports = AreaLocal;
