const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
describe('Deck', function() {
  let card1, card2, card3, deck;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])

  })
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })
  it('should instatiate a new deck', function() {
    expect(deck).to.be.an.instanceof(Deck)
  })
  it('should count cards in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
})
