const showPopup = (templateId) => {
  const template = $(templateId).html();
  $(document.body).append(template);
}

const showPopupEditCard = () => {
  const containerTemplate = $('#alterar-cracha-container-template').html();
  const template = $('#alterar-cracha-template').html();

  const html = containerTemplate.replace('{{content}}', template+template+template+template);
  $(document.body).append(html);
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

$(() => {
  if (!sessionStorage.aviso) {
    showPopup('#aviso-template');
  }

  loadCards();
});