/*
  exportar.config.js

  Esse arquivo é responsável por armazenar as configurações do serviço de exportação de crachás.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const options = {
  exportPath: process.env.EXPORT_PATH ?? './.temp',
};

module.exports = options;