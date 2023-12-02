/*
  validarDados.util.js

  Esse arquivo é responsável por armazenar as funções utilitárias de validação de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const validarCurso = (curso) => {
  if (!curso.nome || !curso.modalidade) return false;

  if (curso.nome.length > 60 || curso.modalidade.length > 45) return false;

  return true;
}

module.exports = { validarCurso };