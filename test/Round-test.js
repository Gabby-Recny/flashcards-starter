const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
describe('Round', () => {
  let card1, card2, card3, deck, turn, round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    turn = new Turn(null, card1)

    round = new Round(deck);
  });
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  });
  it('should instantiate a round', () => {
    expect(round).to.be.an.instanceof(Round)
  })
  it('should show current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })
  it('should keep track of turns', () => {
    expect(round.turnCount).to.deep.equal(0)
  })
  it('should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })
  it('should instantiate turn when guess is made', () => {
    round.takeTurn('mousse')
    expect(round.turn).to.be.an.instanceof(Turn)
  })
  it('should update number of turns', () => {
    round.takeTurn()
    round.takeTurn()
    round.takeTurn()

    expect(round.turnCount).to.equal(3)
  })
  it('should update current card to next card with each turn', () => {
    round.takeTurn()
    expect(round.currentCard).to.equal(card1)

    round.takeTurn()
    round.takeTurn()
    expect(round.currentCard).to.equal(card3)
  })
  it('should store incorrect guesses with an id', () => {
    round.takeTurn('sea otter')
    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('spleen')
    expect(round.incorrectGuesses.length).to.equal(1)
  })
  it('should give feedback', () => {
    round.takeTurn('sea otter')
    expect(round.turn.giveFeedback()).to.equal('correct!')

    round.takeTurn('spleen')
    expect(round.turn.giveFeedback()).to.equal('incorrect!')
  })
  it('should calculate percentage of correct guesses', () => {
    round.takeTurn('sea otter')

    round.takeTurn('spleen')
    expect(round.calculatePercentageCorrect()).to.equal(50);
  })
  it('it should announce the end of round', () => {
    round.takeTurn('sea otter')

    round.takeTurn('spleen')
    round.calculatePercentageCorrect()
    round.endRound()
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })
});
