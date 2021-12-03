const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }
  start() {
    let createCards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    })
    let createDeck = new Deck(createCards)
    let createRound = new Round(createDeck)
    this.currentRound = createRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
