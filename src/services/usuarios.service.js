/*
  usuarios.service.js

  Esse arquivo é responsável por controlar as requisições relacionadas a logins e cadastros.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const sha256 = require('sha256');
const Usuarios = require('../models/usuarios.model');
const { validarUsuario } = require('../utils/validarDados.util');

const criarUsuario = async (usuario) => {
  if (!validarUsuario(usuario)) return false;
  
  usuario.nome = usuario.nome.toLowerCase().trim();
  usuario.email = usuario.email.toLowerCase().trim();

  const usuarioExistente = await Usuarios.findOne({ where: { email_usuario: usuario.email } });

  if (usuarioExistente) return false;

  const usuarioCriado = await Usuarios.create({
    nome_usuario: usuario.nome,
    email_usuario: usuario.email,
    senha_usuario: usuario.senha
  });

  return usuarioCriado.dataValues.id_usuario;
}

const login = async (usuario) => {
  if (!validarUsuario({...usuario, nome: 'placeholder'})) return false;

  usuario.email = usuario.email.toLowerCase().trim(); 
  usuario.senha = sha256(usuario.senha);
  
  const usuarioLogado = await Usuarios.findOne({
    where: {
      email_usuario: usuario.email,
      senha_usuario: usuario.senha
    }
  });
  
  return usuarioLogado ? usuarioLogado.dataValues.id_usuario : false;
}

const verificarLogado = async (idUsuario) => {
  const logado = await Usuarios.findOne({ where: { id_usuario: idUsuario } });

  return logado ? true : false;
}

const deletarUsuario = async (idUsuario) => {
  const usuario = await Usuarios.findOne({ where: { id_usuario: idUsuario } });

  if (!usuario) return false;

  await Usuarios.destroy({ where: { id_usuario: idUsuario } });

  return true;
}

module.exports = { criarUsuario, login, verificarLogado, deletarUsuario }