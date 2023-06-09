/* eslint-disable */

import "./style.css";

window.onload = function() {
  //write your code here

  // Función para generar una lista de cartas aleatorias
  function generateRandomCards(numCards) {
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suits = ["♠", "♥", "♦", "♣"];
    const cards = [];

    for (let i = 0; i < numCards; i++) {
      const randomValue = values[Math.floor(Math.random() * values.length)];
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      cards.push(randomValue + randomSuit);
    }

    return cards;
  }

  // Función para dibujar las cartas en el contenedor
  function drawCards(cards) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    for (let i = 0; i < cards.length; i++) {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.textContent = cards[i];
      cardContainer.appendChild(cardElement);
    }
  }

  // Función para ordenar las cartas usando el algoritmo de clasificación selection
  function sortCards(cards) {
    const sortedCards = [...cards];
    const numCards = sortedCards.length;

    for (let i = 0; i < numCards - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < numCards; j++) {
        if (sortedCards[j] < sortedCards[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = sortedCards[i];
        sortedCards[i] = sortedCards[minIndex];
        sortedCards[minIndex] = temp;
      }
    }

    return sortedCards;
  }

  // Función para mostrar el registro de cambios
  function showLog(log) {
    const logContainer = document.getElementById("logContainer");
    logContainer.innerHTML = "";

    for (let i = 0; i < log.length; i++) {
      const logEntry = document.createElement("div");
      logEntry.textContent = log[i];
      logContainer.appendChild(logEntry);
    }
  }

  // Manejar el evento de clic en el botón de sorteo
  document.getElementById("drawButton").addEventListener("click", function() {
    const numCardsInput = document.getElementById("numCardsInput");
    const numCards = parseInt(numCardsInput.value);

    if (isNaN(numCards) || numCards <= 0) {
      alert("Ingrese un número válido de cartas.");
      return;
    }

    const cards = generateRandomCards(numCards);
    drawCards(cards);
  });

  // Manejar el evento de clic en el botón de clasificación
  document.getElementById("sortButton").addEventListener("click", function() {
    const numCardsInput = document.getElementById("numCardsInput");
    const numCards = parseInt(numCardsInput.value);

    if (isNaN(numCards) || numCards <= 0) {
      alert("Ingrese un número válido de cartas.");
      return;
    }

    const cards = generateRandomCards(numCards);
    const sortedCards = sortCards(cards);
    const log = [
      "Cartas generadas: " + cards.join(", "),
      "Cartas clasificadas: " + sortedCards.join(", ")
    ];
    showLog(log);
  });
};
