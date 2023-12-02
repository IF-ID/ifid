/*
  validarDados.util.js

  Esse arquivo é responsável por armazenar as funções utilitárias de validação de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const validarUsuario = (usuario) => {
  if (!usuario.nome || !usuario.email || !usuario.senha) return false;

  if (usuario.nome.length > 45 || usuario.email.length > 45 || usuario.senha.length > 64) return false;

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailPattern.test(usuario.email)) return false;

  return true;
}

const validarCurso = (curso) => {
  if (!curso.nome || !curso.modalidade) return false;

  if (curso.nome.length > 60 || curso.modalidade.length > 45) return false;

  return true;
}

module.exports = { validarUsuario, validarCurso };