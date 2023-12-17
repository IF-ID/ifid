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

const updatePreview = (id) => {
  const crachaPreview = $('#crachaPreview');
  
  if (id === undefined) {
    id = maxId - 1;
  }

  const card = cards.get(id);
  crachaPreview.attr('src', card.image);
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
  maxId++;

  localStorage.setItem('cards', JSON.stringify(Array.from(cards.values())));
  if (reload) showCards();
}