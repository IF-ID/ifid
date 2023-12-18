const cards = new Map();
maxId = 0;

const loadCards = () => {
  const localCards = JSON.parse(localStorage.getItem('cards'));
  if (localCards) {
    for (const card of localCards) {
      card.id = maxId;
      cards.set(card.id, card);
      maxId++;
    }

    selectedSingle = maxId - 1;
  }

  showCards();
}

const showCards = () => {
  const cardTemplate = $('#card-template').html();
  const cardsContainer = $('#listaCracha ul');

  const cardsContainerCopy = cardsContainer.clone();
  cardsContainerCopy.empty();

  for (const card of cards.values()) {
    const cardHtml = cardTemplate
      .replace('{{nome}}', card.nome)
      .replaceAll('{{id}}', card.id);
    cardsContainerCopy.append(cardHtml);
  }

  cardsContainer.replaceWith(cardsContainerCopy);
  updatePreview();
}

const updatePreview = () => {
  const crachaPreview = $('#crachaPreview');
  
  const image = selectedSingle >= 0 ? cards.get(selectedSingle).image : 'assets/images/crachasPlaceholder.jpg';
  crachaPreview.attr('src', image);
} 

const generateCard = async (card) => {
  const data = { 
    nome: card.nome,
    matricula: card.matricula,
    modalidade: card.modalidade,
    curso: card.curso
  }

  cardImage = await $.post('/gerarCracha', data);
  return cardImage;
}

const addCard = async (card, reload=true) => {
  card.id = maxId;
  card.image = await generateCard(card);
  cards.set(card.id, card);
  selectSingle(card.id);
  maxId++;

  localStorage.setItem('cards', JSON.stringify(Array.from(cards.values())));
  if (reload) showCards();
}

const deleteCards = async () => {
  const selected = getSelected();

  for (const id of selected) {
    cards.delete(id);
  }

  localStorage.setItem('cards', JSON.stringify(Array.from(cards.values())));

  if (selected.has(selectedSingle)) {
    selectedSingle = -1;
  }
  selectedMultiple.clear();
  
  updateSelected();
  showCards();
}