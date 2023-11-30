/*
  cursos.model.js

  Esse arquivo é responsável pelo modelo da tabela de cursos do banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const database = require('../services/database.service.js');
const { DataTypes } = require('sequelize');

const Cursos = database.define('cursos', {
  'id_curso': {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'nome_curso': {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  'modalidade_curso': {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {});

module.exports = Cursos;