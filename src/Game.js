const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

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
    this.printMessage(createDeck, createRound)
    this.printQuestion(createRound)
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
