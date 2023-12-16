const showPopup = (templateId) => {
  const template = $(templateId).html();
  $(document.body).append(template);
}

const hidePopup = () => {
  $('#overlay').fadeOut();
}

$(() => {
  showPopup('#aviso-template');
});