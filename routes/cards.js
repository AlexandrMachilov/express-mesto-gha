const express = require('express');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const cardsRoutes = express.Router();

cardsRoutes.get('/', getCards);

cardsRoutes.post('/', express.json(), createCard);

cardsRoutes.delete('/:id', deleteCard);

cardsRoutes.put('/:id/likes', likeCard);

cardsRoutes.delete('/:id/likes', dislikeCard);

module.exports = cardsRoutes;
