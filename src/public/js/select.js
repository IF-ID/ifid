let selectedSingle = maxId - 1;
let selectedMultiple = new Set();

const selectSingle = (id) => {
  selectedSingle = id;
  updateSelected();
  updatePreview();
}

const getSelected = () => {
  return selectedMultiple.size > 0 ? selectedMultiple : new Set([selectedSingle]);
}

const selectMultiple = (id, value) => {
  if (value) {
    selectedMultiple.add(id);
  } else {
    selectedMultiple.delete(id);
  }

  updateSelected();
}

const updateSelected = () => {
  const cardList = $('#listaCracha ul');

  let selected = getSelected();

  cardList.find('li.selected').removeClass('selected');
  
  for (let id of selected) {
    cardList.find(`li[data-id="${id}"]`).addClass('selected');
  }

  const deletarBtn = $('#deletar-btn');
  const exportarBtn = $('#exportar-btn');
  const modificarBtn = $('#modificar-btn');

if (selectedMultiple.size > 0 || selectedSingle > -1) {
    deletarBtn.removeClass('disabled');
    exportarBtn.removeClass('disabled');
    modificarBtn.removeClass('disabled');
  } else {
    deletarBtn.addClass('disabled');
    exportarBtn.addClass('disabled');
    modificarBtn.addClass('disabled');
  }
}