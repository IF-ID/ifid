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

$(() => {
  if (!sessionStorage.aviso) {
    showPopup('#aviso-template');
  }
});