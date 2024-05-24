const Sequelize = require('sequelize');
const sequelize = require('./database');
const Centro = require('./centro');
const Utilizador = require('./utilizador');
const AlbumFotos = require('./albumfotos');
const Locais = require('./locais');
const Forum = require('./forum');

const Eventos = sequelize.define('eventos', {
    NEVENTO: {
        type: Sequelize.NUMERIC,
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
    IDLOCAL: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Locais,
            key: 'IDLOCAL'
        }
    },
    NFUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Utilizador,
            key: 'NFUNCIONARIO'
        }
    },
    NALBUM: {
        type: Sequelize.NUMERIC,
        allowNull: true,
        references: {
            model: AlbumFotos,
            key: 'NALBUM'
        }
    },
    NPOST: {
        type: Sequelize.NUMERIC,
        allowNull: true,
        references: {
            model: Forum,
            key: 'NPOST'
        }
    },
    NOMEEVENTO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    TIPOEVENTO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DATAEVENTO: {
        type: Sequelize.DATE,
        allowNull: true
    },
    DISPONIBILIDADE: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    LOCALIZACAO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    TIPOAREA: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    NPARTICIPANTE: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    NAPROVADOR: {
        type: Sequelize.NUMERIC,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Eventos;
