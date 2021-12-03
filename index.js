const http = require('http');
let app = http.createServer();
const Game = require('./src/Game');
const Round = require('./src/Round');
const Deck = require('./src/Deck');
const Card = require('./src/Card');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
deck = new Deck([card1, card2, card3]);
round = new Round(deck);
game = new Game(round)
game.start()
