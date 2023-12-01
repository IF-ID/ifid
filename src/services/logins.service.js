/*
  logins.service.js

  Esse arquivo é responsável por controlar as requisições relacionadas a logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const sha256 = require('sha256');
const Usuarios = require('../models/usuarios.model');

const cadastro = async (data) => {
  const { nome, email, senha } = data;

  const exists = await Usuarios.findOne({
    where: {
      email_usuario: email.toLowerCase().trim()
    }
  });

  if (exists) return false;

  const user = await Usuarios.create({
    nome_usuario: nome.toLowerCase().trim(),
    email_usuario: email.toLowerCase().trim(),
    senha_usuario: senha
  });

  return user.dataValues.id_usuario;
}

const login = async (data) => {
  const { email, senha } = data;

  let user = await Usuarios.findOne({
    where: {
      email_usuario: email.toLowerCase().trim(),
      senha_usuario: sha256(senha)
    }
  });
  
  if (!user) return false;
  return user.dataValues.id_usuario;
}

const verificarLogado = async (id) => {
  const logado = await Usuarios.findOne({
    where: {
      id_usuario: id
    }
  });

  if (logado) return true;
  return false;
}

module.exports = {
  cadastro,
  login,
  verificarLogado
}