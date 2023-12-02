/*
  cursos.service.js

  Esse arquivo é responsável por armazenar as funções utilitárias do serviço de cursos.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const Cursos = require('../models/cursos.model.js');

const getCurso = async (id) => {
  const curso = await Cursos.findOne({ where: { id_curso: id } });

  return curso;
}

module.exports = {
  getCurso
};