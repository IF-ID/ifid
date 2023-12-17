const showPopup = (templateId) => {
  const template = $(templateId).html();
  $(document.body).append(template);
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

$(() => {
  if (!sessionStorage.aviso) {
    showPopup('#aviso-template');
  }

  loadCards();
});