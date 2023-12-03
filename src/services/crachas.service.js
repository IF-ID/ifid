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

  console.log(cracha);

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

const mostrarCrachas = async () => {
  const crachas = await Crachas.findAll();
  return crachas;
}

module.exports = {
  criarCracha,
  mostrarCrachas
}