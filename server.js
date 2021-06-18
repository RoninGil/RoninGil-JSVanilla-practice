const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

const { Deck, Hand } = require('./app/cards.js');

const deck = new Deck();

const table = deck.dispatchCards(5);

app.get('/styles', (req, res)=>{
  res.sendFile(path.join(__dirname, '/styles.css'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/table', (req, res) => {

  res.send(table);
  console.log(table)
});

app.get('/cards/:size', (req, res) => {
  
  const{ size } = req.params;
  console.log("VALOR DEL SIZE: "+size);
  res.send(deck.dispatchCards(size));
});

app.get('/cards', (req, res) => {
  // const array = [];
  // for(let i = 0; i<11; i++){
  //     array[i] = new Hand(deck, 5);
  // }
  res.send({
         cardsInDeck: deck.cards,
       });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

// const express = require('express');
// const path = require('path');
// const {Deck, Hand} = require('./app/cards');
// const app = express();


// app.use(express.static('public'));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

// app.get('/cards', (req, res) => {
//   const deck = new Deck();
//   const array = [];
//   for(let i = 0; i<11; i++){
//       array[i] = new Hand(deck, 5);
//   }
// //   {
// //     cards: deck.cards,
// //     length: deck.cards.length,
// //     hands: array
// //   }
//   //res.render('index.html', {cards: deck.cards, length: deck.cards.length, hands:array})
//   res.send({
//          cardsInDeck: deck.cards,
//          length: deck.cards.length,
//          hands: array
//        });
// });

// app.listen(8000, () => {
//   console.log('Server running on port 8000');
// }); //the server object listens on port 8000