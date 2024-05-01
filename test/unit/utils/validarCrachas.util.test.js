/*
  validarCrachas.util.test.js

  Esse arquivo é responsável por testar a função de validação de crachás.

  Requisito:

  Último Editor: Murilo

  Status: Finalizado

  Notas:
*/

const { describe, test } = require('@jest/globals');
const { validarCracha } = require('../../../src/utils/validarDados.util.js');

const cracha = {
  nome: 'Teste',
  matricula: '12345678901',
  foto: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJsSURBVDjLpZNdSFNhGMf/787Ome8SF7mxvuecJGU6SLuWIGZ0E7WgFRiBdZFE1CDwJoyI6iYvhIqKoqibrsIgwUkUjDCkC7UQ03IW5EfS8muTvec95/SsXE3dXQd+8HLO8/+d5zkPh1mWhf+57LlDNBr9YJqmj/je3t4eKFQcDocHdV0PSClHOzs7ty8TULDCMIzHxMlIJFKwLQpnaSP2reqAgg7iENl1T1ObLLI5IKQFYQKnPDexpRhoPNdjp3A9sSOXs+UOFBwgbhPDvepdnuKz3OZ0c4u7eQI13MUnuRDiE/GQ6F/VAQVLiHpCutQ+xFPvUKfcgM2oRFfyIPpnqiHECUlvP0K4Cgl0IkEPq70OYHdpMWZEMxbSNUjOhjA878nObxLZGu8qAd0US4KqBm8AGnNCwo+UaxrY+AQm03FfCCwJdhUSlBAHvF5vsOvCtwI7sNEIYlu2JltbSDBHdCQSCVnZ2lHLaQu6AQhaaJP7Dpy9PRiaG1ecmYXgT4vpsZC9JRST1/8KyK6RwE8obzPXUKsdh8Mo/y2ZfPkem74MI3TmoubwV2FxIKYOxruvdO9VU7Y8gUr4CfZnC2cxo3+kzoDFVzFU1B9G0efXYI+Owjn6DGW+UsVi1vn8EWaJp8TplVsoSY6haL0f2B/99w9c2gDFZGX5IwQpfIwo2+P2WRrj0PlmpIqnkXE7WLrvBdY8b0ZmcRJpqp+fU2AoGM8XUFa/p2nag1jL1LLvL9hOrOuJw1fKYVdUzE9LjE0xw4J1i+V+52AwOESCcmJgZGSkbuUS30S2tnydmLjssUP9YVhyrYbWhpi8+gtmOYLutSnwxAAAAABJRU5ErkJggg==',
  imagem: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJsSURBVDjLpZNdSFNhGMf/787Ome8SF7mxvuecJGU6SLuWIGZ0E7WgFRiBdZFE1CDwJoyI6iYvhIqKoqibrsIgwUkUjDCkC7UQ03IW5EfS8muTvec95/SsXE3dXQd+8HLO8/+d5zkPh1mWhf+57LlDNBr9YJqmj/je3t4eKFQcDocHdV0PSClHOzs7ty8TULDCMIzHxMlIJFKwLQpnaSP2reqAgg7iENl1T1ObLLI5IKQFYQKnPDexpRhoPNdjp3A9sSOXs+UOFBwgbhPDvepdnuKz3OZ0c4u7eQI13MUnuRDiE/GQ6F/VAQVLiHpCutQ+xFPvUKfcgM2oRFfyIPpnqiHECUlvP0K4Cgl0IkEPq70OYHdpMWZEMxbSNUjOhjA878nObxLZGu8qAd0US4KqBm8AGnNCwo+UaxrY+AQm03FfCCwJdhUSlBAHvF5vsOvCtwI7sNEIYlu2JltbSDBHdCQSCVnZ2lHLaQu6AQhaaJP7Dpy9PRiaG1ecmYXgT4vpsZC9JRST1/8KyK6RwE8obzPXUKsdh8Mo/y2ZfPkem74MI3TmoubwV2FxIKYOxruvdO9VU7Y8gUr4CfZnC2cxo3+kzoDFVzFU1B9G0efXYI+Owjn6DGW+UsVi1vn8EWaJp8TplVsoSY6haL0f2B/99w9c2gDFZGX5IwQpfIwo2+P2WRrj0PlmpIqnkXE7WLrvBdY8b0ZmcRJpqp+fU2AoGM8XUFa/p2nag1jL1LLvL9hOrOuJw1fKYVdUzE9LjE0xw4J1i+V+52AwOESCcmJgZGSkbuUS30S2tnydmLjssUP9YVhyrYbWhpi8+gtmOYLutSnwxAAAAABJRU5ErkJggg==',
  idCurso: 1,
  idUsuario: 1
}

test('Validação de Crachá com todos os campos preenchidos', () => {
  const validacao = validarCracha(cracha);
  expect(validacao).toBeTruthy();
});

test('Validação de Crachá com campos vazios', () => {
  for (let campo in cracha) {
    let crachaInvalido = cracha;
    crachaInvalido[campo] = '';

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  }
});

test('Validação de Crachá com campos nulos', () => {
  for (let campo in cracha) {
    let crachaInvalido = cracha;
    crachaInvalido[campo] = null;

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  }
});

describe('Testes com campos de tamanhos inválidos', () => {
  test('Validação de Crachá com nome muito longo', () => {
    const crachaInvalido = cracha;
    crachaInvalido.nome = 'a'.repeat(46);

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  });
});

describe('Testes com campos de tipos inválidos', () => {
  test('Validação de cracha com matricula com letras', () => {
    const crachaInvalido = cracha;
    crachaInvalido.matricula = '1234567890a';

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  });

  test('Validação de cracha com matricula com caracteres especiais', () => {
    const crachaInvalido = cracha;
    crachaInvalido.matricula = '1234567890!';

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  });

  test('Validação de cracha com idCurso com letras', () => {
    const crachaInvalido = cracha;
    crachaInvalido.idCurso = 'a';

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  });

  test('Validação de cracha com idUsuario com letras', () => {
    const crachaInvalido = cracha;
    crachaInvalido.idUsuario = 'a';

    const validacao = validarCracha(crachaInvalido);
    expect(validacao).toBeFalsy();
  });
});
