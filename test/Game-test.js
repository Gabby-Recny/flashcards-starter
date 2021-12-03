const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');

describe('Game', () => {
  let card1, card2, card3, deck, round;
  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    turn = new Turn(null, card1)

    round = new Round(deck);

    game = new Game()
  });
  it('should be a function', () => {
    expect(Game).to.be.a('function')
  });
  it('should instantiate a game', () => {
    expect(game).to.be.an.instanceof(Game)
  })
  it('should have a start function', () => {
    expect(game.start).to.be.a('function');
  })
  it('should create cards', () => {
    game.start()

    expect(card1).to.be.an.instanceof(Card)
  })
  it('should put cards in the deck', () => {
    game.start()
    expect(deck).to.be.an.instanceof(Deck)
  })
  it('should create a new round', () => {
    game.start()
    expect(round).to.be.an.instanceof(Round)
  })
  it('should keep track of current round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)
  })
})
