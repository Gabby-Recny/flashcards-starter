const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn;
    this.currentCard = deck.cards[0];
    this.nextCard = {}
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.percentage = 0;
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(userGuess) {
    this.turn = new Turn(userGuess, this.currentCard);
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      }
      this.turnCount++
      this.currentCard = this.deck[this.turnCount]
      return this.turn.giveFeedback()
    }
  calculatePercentageCorrect() {
    let correctGuesses = (this.turnCount - this.incorrectGuesses.length);
    this. percentage = (correctGuesses / this.turnCount) * 100
    return this.percentage
  }
  endRound() {
    let announcement = `** Round over! ** You answered ${    this.calculatePercentageCorrect()}% of the questions correctly!`
    console.log(announcement)
    return announcement
  }
}

module.exports = Round;
