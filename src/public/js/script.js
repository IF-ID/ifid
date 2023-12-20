const capitalize = (str) => {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
}

const showPopup = (templateId) => {
  const template = $(templateId).html();
  $(document.body).append(template);
}

const showPopupEditCard = () => {
  const containerTemplate = $('#alterar-cracha-container-template').html();
  const template = $('#alterar-cracha-template').html();

  let html =''
  const selected = getSelected();

  for (let id of selected) {
    const card = cards.get(id);
    html += template
      .replace('{{id}}', card.id)
      .replaceAll('{{nome}}', capitalize(card.nome))
      .replace('{{matricula}}', card.matricula)
      .replace(`value="${card.curso}"`, `value="${card.curso}" selected`);
  }

  $(document.body).append(containerTemplate.replace('{{content}}', html));
}

const hidePopup = () => {
  const overlay = $('#overlay');
  overlay.fadeOut(complete = () => {
    overlay.remove();
  });
}

const criarCard = async (card) => {
  const loadingTemplate = $('#loading-template').html();
  const loading = loadingTemplate.replace('{{mensagem}}', 'Criando Crachá...');
  $('.submit').html(loading);
  $('.btn-close').prop('disabled', true);
  await addCard(card);
  hidePopup();
}

const deletarCards = async () => {
  const loadingTemplate = $('#loading-template').html();
  const loading = loadingTemplate.replace('{{mensagem}}', 'Deletando Crachás...');
  $('.submit').html(loading);
  $('.btn-close').addClass('disabled');
  $('#cancel-delete-btn').addClass('disabled');
  await deleteCards();
  hidePopup();
}

const alterarCards = async (cards) => {
  const loadingTemplate = $('#loading-template').html();
  const loading = loadingTemplate.replace('{{mensagem}}', 'Alterando Crachás...');
  $('.submit').html(loading);
  $('.btn-close').addClass('disabled');
  await updateCards(cards);
  hidePopup();
}


$(() => {
  if (!sessionStorage.aviso) {
    showPopup('#aviso-template');
  }

  loadCards();
});