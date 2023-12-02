/*
  crachas.model.js

  Esse arquivo é responsável pelo modelo da tabela de crachás do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const database = require('../services/database.service.js');
const { DataTypes } = require('sequelize');

const Cursos = require('./cursos.model.js');
const Usuarios = require('./usuarios.model.js');

const Crachas = database.define('crachas', {
  'id_cracha': {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'nome_cracha': {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  'matricula_cracha': {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  'foto_cracha': {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  'imagem_cracha': {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  'id_curso': {
    type: 'INT',
    allowNull: false
  },
  'id_usuario': {
    type: 'INT',
    allowNull: false
  }
}, {});

Crachas.belongsTo(Cursos, { foreignKey: 'id_curso', constraints: false });
Crachas.belongsTo(Usuarios, { foreignKey: 'id_usuario', constraints: false });

module.exports = Crachas;