const Sequelize = require('sequelize');
const sequelize = require('./database');
const Locais = sequelize.define('locais', {
    IDLOCAL: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    DESIGNACAOLOCAL: {
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
    timestamps: false
});

module.exports = Locais;
