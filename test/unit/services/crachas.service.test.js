/*
  crachas.service.test.js

  Esse arquivo é responsável por testar o serviço de gerenciar a tabela de crachás no banco de dados.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

require('dotenv').config({ path: './src/configs/.env' });

const { describe, test } = require('@jest/globals');
const UsuariosModel = require('../../../src/models/usuarios.model.js');
const CrachasModel = require('../../../src/models/crachas.model.js');
const Crachas = require('../../../src/services/crachas.service.js');
const Login = require('../../../src/services/logins.service.js');
const Cursos = require('../../../src/services/cursos.service.js'); 
const crachas = require('../../../src/utils/crachas.util.js');

test('Teste de Criar crachá no banco de dados', async () => {
  const dataUsuario = {
    nome: 'Murilo Henrique Conde da Luz',
    email: 'testecracha@teste.teste',
    senha: 'testecracha123'
  }
  const dataCracha = {
    nome: 'Murilo Henrique Conde da Luz',
    matricula: '20202263816',
    foto: 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190113140816&path-prefix=pt',
  }

  await Login.cadastro(dataUsuario);
  const idUsuario = await Login.login(dataUsuario);
  const curso = await Cursos.getCurso(4);
  const cracha = await crachas.criarCrachas([{
    nome: dataCracha.nome,
    matricula: dataCracha.matricula,
    modalidade: curso.modalidade_curso,
    curso: curso.nome_curso,
    foto: dataCracha.foto,
  }]);

  const idCracha = await Crachas.criarCracha({
    nome: dataCracha.nome,
    matricula: dataCracha.matricula,
    foto: dataCracha.foto,
    imagem: cracha[0],
    id_usuario: idUsuario,
    id_curso: curso.id_curso,
  })

  expect(idCracha).toBeTruthy();
  await CrachasModel.destroy({ where: { id_cracha: idCracha } });
  await UsuariosModel.destroy({ where: { id_usuario: idUsuario } });
}, 60000);

test('Teste de Mostrar Crachás', async () => {
  const result = await Crachas.mostrarCrachas();
  expect(result).toBeDefined();
})