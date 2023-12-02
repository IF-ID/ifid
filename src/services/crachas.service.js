/*
  crachas.service.js

  Esse arquivo é responsável por controlar as requisições relacionadas a crachás.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const Crachas = require('../models/crachas.model');

const criarCracha = async (data) => {
  const { nome, matricula, foto, imagem, id_usuario, id_curso } = data;

  let cracha

  try {
    cracha = await Crachas.create({
      nome_cracha: nome.toLowerCase().trim(),
      matricula_cracha: matricula,
      foto_cracha: foto,
      imagem_cracha: imagem,
      id_usuario: id_usuario,
      id_curso: id_curso,
    });
  } catch (error) {
    console.error(error);
    return false;
  }

  return cracha.dataValues.id_cracha;
}

const mostrarCrachas = async () => {
  const crachas = await Crachas.findAll();
  return crachas;
}

module.exports = {
  criarCracha,
  mostrarCrachas
}