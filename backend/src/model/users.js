const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  user_mail: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING(255),
    allowNull: true, // Permitir NULL para usuários do Google
  },
  email_confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Considerar confirmado para usuários do Google
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
