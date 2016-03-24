// Card Constructor
var Card = function(suit, rank, value, symbol) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.symbol = symbol;
};
var cardDeck = {
  suit: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  symbol: ['♥', '♠', '♦', '♣']
};
var deck = [];
var makeDeck = function() {
  for (var i = 0; i < cardDeck.rank.length; i++){
    for (var j = 0; j < cardDeck.suit.length; j++){
      var card = new Card(cardDeck.suit[j], cardDeck.rank[i], cardDeck.value[i], cardDeck.symbol[j]);
      deck.push(card);
    }
  }
};
var shuffleDeck = function(array) {
    var j, x, i;
    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
};

$('#rulesButton').on('click', function() {
  console.log("button works");
});

$('#startButton').on('click', function(){
  $('#startButton').html("");
  $('#rulesButton').html("");
  $('#jumbotron').html("");
  $('#jumbotron').append('<div class="dealerCard1" id="dealerCard1"></div>');
  $('#jumbotron').append('<div class="dealerCard2" id="dealerCard2"></div>');
  $('#jumbotron').append('<div class="playerCard1" id="playerCard1"></div>');
  $('#jumbotron').append('<div class="playerCard2" id="playerCard2"></div>');
  $('#div4').append('<h2 class="dealer" id="dealer"></h2>');
  $('#dealer').html('DEALER');
  $('#div4').append('<h2 class="player" id="player"></h2>');
  $('#player').html('PLAYER');
  $('#div5').append('<div class="deal" id="deal" onclick="deal()"></div>');
  $('#deal').html('Deal');
});
  makeDeck();
  shuffleDeck(deck);

var cashMoney = 3000;




// card ingredients

//Creates a fresh deck in order

var deal = function(){
  playerHand.push(deck[0]);
  dealerHand.push(deck[1]);
  playerHand.push(deck[2]);
  dealerHand.push(deck[3]);
  $('#playerCard1').html(playerHand[0].rank + playerHand[0].symbol);
  $('#playerCard2').html(playerHand[1].rank + playerHand[1].symbol);
  $('#dealerCard1').html(dealerHand[0].rank + dealerHand[0].symbol);
  $('#dealerCard2').html(dealerHand[1].rank + dealerHand[1].symbol);
  $('#div5').append('<div class="hit" id="hit" onclick="hit()"></div>');
  $('#hit').html('Hit');
  deck.shift();
  deck.shift();
  deck.shift();
  deck.shift();
  checkValue(playerHand);
  checkValue(dealerHand);
  checkTotal();
};


var hit = function(){
  console.log('button works');
  $('#jumbotron').append('<div class="playerCard3" id="playerCard3"></div>');
  $('#playerCard3').html(deck[0].rank + deck[0].symbol);
  playerHand.push(deck[0]);
  checkValue(playerHand);
  checkTotal();
};



var playerHand = [];
var dealerHand = [];

var playerTotal;

var checkValue = function(player) {
  if (player.length === 2) {
     playerTotal = player[0].value + player[1].value;
     return playerTotal;
} else if (playerHand.length === 3) {
    playerTotal = player[0].value + player[1].value + player[2].value;
    return playerTotal;
}
};

playerTotal;

var checkTotal = function(){
  if(playerTotal > 21) {
    alert('Bust');
  }else if (playerTotal === 21) {
    alert('BlackJack!');
  }else {
    return playerTotal;
  }
};
var getDealerValue = function() {
  dealerHand[0].value + dealerHand[1].value;
}

//var dealPlayer = function() {
  //for (var i = 0; i < 1; i++){
    //playerHand.push(deck[i])
  //}
//}


