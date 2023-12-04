/*
  crachas.service.js

  Esse arquivo é responsável por controlar as requisições relacionadas a crachás.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const Crachas = require('../models/crachas.model');
const { validarCracha } = require('../utils/validarDados.util');

const criarCracha = async (cracha) => {
  if (!validarCracha(cracha)) return false;

  cracha.nome = cracha.nome.toLowerCase().trim();

  crachaCriado = await Crachas.create({
    nome_cracha: cracha.nome,
    matricula_cracha: cracha.matricula,
    foto_cracha: cracha.foto,
    imagem_cracha: cracha.imagem,
    id_usuario: cracha.idUsuario,
    id_curso: cracha.idCurso,
  });

  return crachaCriado ? crachaCriado.dataValues.id_cracha : false ;
}

const getCracha = async (id) => {
  const cracha = await Crachas.findOne({ where: { id_cracha: id } });
  return cracha ? cracha.dataValues : false;
}

const getCrachas = async (idUsuario) => {
  const crachas = await Crachas.findAll({ where: { id_usuario: idUsuario } });
  return crachas ? crachas.map(cracha => cracha.dataValues) : false;
}

const modificarCracha = async (cracha) => {
  if (!validarCracha(cracha)) return false;

  cracha.nome = cracha.nome.toLowerCase().trim();

  const crachaModificado = await Crachas.update({
    nome_cracha: cracha.nome,
    matricula_cracha: cracha.matricula,
    foto_cracha: cracha.foto,
    imagem_cracha: cracha.imagem,
    id_usuario: cracha.idUsuario,
    id_curso: cracha.idCurso,
  }, { where: { id_cracha: cracha.id } });


  return crachaModificado;
}

const deletarCracha = async (id) => {
  const cracha = await Crachas.findOne({ where: { id_cracha: id } });
  if (!cracha) return false;

  await cracha.destroy();
  return true;
}

module.exports = { criarCracha, getCracha, getCrachas, modificarCracha, deletarCracha }