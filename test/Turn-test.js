const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card, turn;
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn = new Turn('userGuess', card);
  })
  it('should instatiate a turn', function() {
    turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })
  it('should have a card', function() {
    expect(card).to.be.an.instanceof(Card);
  })
  it('should have a guess', () => {
    expect(turn.guess).to.equal('userGuess');
  })
  it('should show a guess', function() {
    expect(turn.returnGuess()).to.equal('userGuess')
  })
  it('should show a card', function() {
    expect(turn.returnCard()).to.equal(card);
  })
  it.only('should evalutate users guess', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    let turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);

    let turn1 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(false);
  })
  it('should give feedback on guess', function() {
    let card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    let turn = new Turn('object', card1);
    expect(turn.giveFeedback()).to.equal('correct!');

    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    let turn1 = new Turn('appendix', card2);
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  })
});
