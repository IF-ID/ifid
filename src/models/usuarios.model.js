/*
  usuarios.model.js

  Esse arquivo é responsável pelo modelo da tabela de usuários do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const database = require('../services/database.service.js');
const { DataTypes } = require('sequelize');
const sha256 = require('sha256');

const Usuarios = database.define('usuarios', {
  'id_usuario': {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'nome_usuario': {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  'email_usuario': {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  'senha_usuario': {
    type: DataTypes.STRING(256),
    allowNull: false,
    set(value) {
      this.setDataValue('senha_usuario', sha256(value));
    }
  }
}, {});

module.exports = Usuarios;