const express = require("express");
const { getCards, createCard, deleteCard } = require("../controllers/cards");

const cardsRoutes = express.Router();

cardsRoutes.get("/", getCards);

cardsRoutes.post("/", express.json(), createCard);

cardsRoutes.delete("/:id", deleteCard);

module.exports = cardsRoutes;
