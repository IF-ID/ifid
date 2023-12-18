let selectedSingle = maxId - 1;
let selectedMultiple = new Set();

const selectSingle = (id) => {
  selectedSingle = id;
  updateSelected();
}

const getSelected = () => {
  return selectedMultiple.size > 0 ? selectedMultiple : [selectedSingle];
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
  if (selectedSingle > 0 || selectedMultiple.size > 0) {
    deletarBtn.removeClass('disabled');
  } else {
    deletarBtn.addClass('disabled');
  }
}