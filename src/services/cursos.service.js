/*
  cursos.service.js

  Esse arquivo é responsável por armazenar as funções utilitárias do serviço de cursos.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/
require('dotenv').config({ path: './src/configs/.env' });
const Cursos = require('../models/cursos.model.js');
const { validarCurso } = require('../utils/validarDados.util.js');

const criarCurso = async (curso) => {
  if (!validarCurso(curso)) return false;

  curso.nome = curso.nome.toLowerCase().trim();
  curso.modalidade = curso.modalidade.toLowerCase().trim();

  const cursoExistente = await Cursos.findOne({ where: { nome_curso: curso.nome } });

  if (cursoExistente) return false;

  const cursoCriado = await Cursos.create({
    nome_curso: curso.nome,
    modalidade_curso: curso.modalidade,
  });

  return cursoCriado.dataValues.id_curso;
}

const getCurso = async (idCurso) => {
  const curso = await Cursos.findOne({ where: { id_curso: idCurso } });

  return curso ? curso.dataValues : false;
}

const getAllCursos = async () => {
  const cursos = await Cursos.findAll();

  return cursos.map(curso => curso.dataValues);
}

const getModalidades = async () => {
  const modalidades = await Cursos.findAll({
    attributes: ['modalidade_curso'],
    group: ['modalidade_curso']
  });

  return modalidades.map(curso => curso.modalidade_curso);
}

const getCursosByModalidade = async (modalidade) => {
  const cursos = await Cursos.findAll({ where: { modalidade_curso: modalidade } });

  return cursos.map(curso => curso.dataValues);
}

const deletarCurso = async (idCurso) => {
  const curso = await Cursos.findOne({ where: { id_curso: idCurso } });

  if (!curso) return false;

  await Cursos.destroy({ where: { id_curso: idCurso } });

  return true;
}

module.exports = { criarCurso, getCurso, getAllCursos, getModalidades, getCursosByModalidade, deletarCurso };