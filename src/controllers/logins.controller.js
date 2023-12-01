/*
  logins.controller.js

  Esse arquivo é responsável por controlar as requisições relacionadas a logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const Usuarios = require('../models/usuarios.model');

const cadastro = async (data) => {
  const { nome, email, senha } = data;

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
      senha_usuario: senha
    }
  });

  if (user) {
    return user.dataValues.id_usuario;
  } else {
    return false;
  }
}

module.exports = {
  cadastro,
  login
}