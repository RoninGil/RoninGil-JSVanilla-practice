const createCardCorner = (number, symbol) => {
  return `<div class="card-corner">
  <div>${number}</div>
  <div>${symbol}</div>
  </div>`;
}

const createCardSymbols = (number, symbol) => {
  const isNumber = !isNaN(number);

  if(number === 'A'){
    return (`<div>${symbol}</div>`)
  }

  if(number === 'J' || number === 'Q' || number === 'K'){
    return(`<div class="image"></div>`)
  }

  if(isNumber){
    return `${new Array(parseInt(number))
    .fill(symbol)
    .map((cardSymbol) => `
    <div>${cardSymbol}</div>
    `)
    .join('')
    }`;
  }

  return '';
}

const createCard = (card, isFlipped) => {
  const number = card.slice(0, -1);
  const symbol = card.slice(-1);
  const cardDiv = document.createElement('div');

  cardDiv.classList.add('card');
  cardDiv.setAttribute('symbol', symbol);
  cardDiv.setAttribute('number', number);

  cardDiv.innerHTML=`
  <div class="container">
    <div class = "front">
      ${createCardCorner(number, symbol)}
      <div class="symbols">
        ${createCardSymbols(number, symbol)}
      </div>
      ${createCardCorner(number, symbol)}
    </div>
    <div class="back"></div>
  </div>`;
  if(isFlipped){
    cardDiv.classList.add('flipped');
  }
  cardDiv.addEventListener('click', () =>{
    console.log(`La carta${number} ${symbol} fue clickeada`);
    

    if(cardDiv.classList.contains('flipped')){
      cardDiv.classList.remove('flipped');
    }
    else{
      cardDiv.classList.add('flipped');
    }

  } )

  return cardDiv;
};

window.addEventListener('load', function(){
  console.log("loaded!");
  //TABLE
  (async () => {
    const resp = await fetch('http://localhost:4000/table');
    const data = await resp.json();
    console.log(data);
    const deckDiv = document.querySelector('.deck');
    console.log(data)
    data.forEach((cardElem, index)=>{
      var flipped = 2;
      console.log(index, flipped)
      if(index<=flipped){
        deckDiv.append(createCard(cardElem, false));
      }
      else{
        deckDiv.append(createCard(cardElem, true));
      }
          
        
    })
  })();
  //HAND
  const handSize = 2;
  (async () =>{
      const resp = await fetch(`http://localhost:4000/cards/${handSize}`);
      const data = await resp.json();
      console.log("DATA SHOWN: "+data);
      const deckDiv = document.querySelector('.hand');
      data.forEach((cardElement)=>{
          deckDiv.append(createCard(cardElement, true));
      })
  })();
});
