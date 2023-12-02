/*
  cursos.service.js

  Esse arquivo é responsável por armazenar as funções utilitárias do serviço de cursos.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const Cursos = require('../models/cursos.model.js');
const { validarCurso } = require('../utils/validarDados.util.js');

const criarCurso = async (curso) => {
  if (!validarCurso(curso)) return false;

  const cursoExistente = await Cursos.findOne({ where: { nome_curso: curso.nome } });

  if (cursoExistente) return false;

  const cursoCriado = await Cursos.create({
    nome_curso: curso.nome,
    modalidade_curso: curso.modalidade,
  });

  return cursoCriado.dataValues.id_curso;
}

const getCurso = async (id) => {
  const curso = await Cursos.findOne({ where: { id_curso: id } });

  return curso;
}

const deletarCurso = async (id) => {
  const curso = await Cursos.findOne({ where: { id_curso: id } });

  if (!curso) return false;

  await Cursos.destroy({ where: { id_curso: id } });

  return true;
}


module.exports = { criarCurso, getCurso, deletarCurso };