const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const Turn = require('./Turn');

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
