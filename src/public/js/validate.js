const handleField = (id, valid, message) => {
  const field = $(id);
  const input = $(id).find('.input');
  const error = field.find('.error');

  if (valid) {
    input.addClass('is-valid');
    input.removeClass('is-invalid');
    error.empty();
  } else {
    input.removeClass('is-valid');
    input.addClass('is-invalid');
    error.text(message);
  }
}

const validateNome = (id) => {
  const field = $(id);
  const input = field.find('.input');

  let valid = true;
  let value = input.val().trim().toLowerCase();
  let message = '';

  if (value.length == 0) {
    message = 'O nome do aluno é obrigatório.';
    valid = false;
  } else if (value.length > 45) {
    message = 'O nome do aluno deve ter no máximo 45 caracteres.';
    valid = false;
  }

  handleField(field, valid, message);
  return valid ? value : null;
}

const validateMatricula = (id) => {
  const field = $(id);
  const input = field.find('.input');

  let valid = true;
  let value = input.val().trim().toLowerCase();
  let message = '';

  if (value.length == 0) {
    message = 'A matrícula do aluno é obrigatória.';
    valid = false;
  } else if (isNaN(value)) {
    message = 'A matrícula do aluno deve conter apenas números.';
    valid = false;
  } else if (value.length != 11) {
    message = 'A matrícula do aluno deve ter 11 caracteres.';
    valid = false;
  }

  handleField(field, valid, message);
  return valid ? value : null;
}

const validateCurso = (id) => {
  const field = $(id);
  const input = field.find('.input');

  let valid = true;
  let value = input.val().trim().toLowerCase();
  let message = '';

  if (value.length == '') {
    message = 'O curso do aluno é obrigatório.';
    valid = false;
  }

  handleField(field, valid, message);
  return valid ? value : null;
}

const validateCard = (callback) => {
  const nome = validateNome('#nome');
  const matricula = validateMatricula('#matricula');
  const curso = validateCurso('#curso');

  if (nome && matricula && curso) {
    callback ? callback({ nome, matricula, curso }) : null;
  };
}

const validateCards = async (callback) => {
  let valid = true;

  let cards = $('.fieldset');
  let cardList = [];

  for (let card of cards) {
    let id = card.dataset.id;
    let nome = validateNome(`.fieldset[data-id="${id}"] .nome`);
    let matricula = validateMatricula(`.fieldset[data-id="${id}"] .matricula`);
    let curso = validateCurso(`.fieldset[data-id="${id}"] .curso`);

    if (nome && matricula && curso) {
      cardList.push({ id, nome, matricula, curso: parseInt(curso) });
    } else {
      valid = false;
    }
  }

  if (valid) {
    callback ? callback(cardList) : null;
  }
}