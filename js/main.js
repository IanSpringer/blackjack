

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
var bank = 5000;


var getBet = function(){
  var amount = window.prompt('Your bank total is $' + bank + '. How much would you like to wager?');
};

$('#startButton').on('click', function(){
  getBet();
  $('#startButton').html("");
  $('#rulesButton').html("");
  $('#jumbotron').html("");
  //$('#jumbotron').append('<div class="dealerCard1" id="dealerCard1"></div>');
  //$('#jumbotron').append('<div class="dealerCard2" id="dealerCard2"></div>');
  //$('#jumbotron').append('<div class="playerCard1" id="playerCard1"></div>');
  //$('#jumbotron').append('<div class="playerCard2" id="playerCard2"></div>');
  $('#div5').append('<div class="deal" id="deal" onclick="deal()"></div>');
  $('#deal').html('Deal');

  makeDeck();
  shuffleDeck(deck);
});



var playerTotal;
var dealerTotal;

var noDeal = false;

// card ingredients

//Creates a fresh deck in order

var deal = function(){
  $('#div6').append('<p class="animated fadeInUp" id="bankAmount"></p>');
  $('#bankAmount').html("Bank total: $" + bank);
  playerHand.push(deck[0]);
  dealerHand.push(deck[1]);
  playerHand.push(deck[2]);
  dealerHand.push(deck[3]);
  $('#div4').append('<h2 class="animated fadeInUp" id="dealer"></h2>');
  $('#dealer').html('DEALER');
  $('#div4').append('<h2 class="animated fadeInUp" id="player"></h2>');
  $('#player').html('PLAYER');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard1"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard2"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard1"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard2"></div>');
  $('#playerCard1').html(playerHand[0].rank + playerHand[0].symbol);
  $('#playerCard2').html(playerHand[1].rank + playerHand[1].symbol);
  $('#dealerCard1').append('<img src="http://opengameart.org/sites/default/files/card%20back%20red.png"/>');
  //$('#dealerCard1').html(dealerHand[0].rank + dealerHand[0].symbol);
  $('#dealerCard2').html(dealerHand[1].rank + dealerHand[1].symbol);
  $('#div5').append('<div class="hit" id="hit" onclick="hit()"></div>');
  $('#hit').html('Hit');
  deck.shift();
  deck.shift();
  deck.shift();
  deck.shift();
  checkPlayerValue();
  checkPlayerTotal();

};



var hit = function(){
  console.log('button works');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard3"></div>');
  $('#playerCard3').html(deck[0].rank + deck[0].symbol);
  playerHand.push(deck[0]);
  checkPlayerValue();
  return playerTotal;
  checkPlayerTotal();
  deck.shift();
  return deck;


};



var playerHand = [];
var dealerHand = [];

var playerTotal;
var dealerTotal;

var checkPlayerValue = function() {
  if (playerHand.length === 2) {
     playerTotal = playerHand[0].value + playerHand[1].value;

} else if (playerHand.length === 3) {
    playerTotal = playerHand[0].value + playerHand[1].value + playerHand[2].value;

} else if (playerHand.length == 4) {
  playerTotal = playerHand[0].value + playerHand[1].value + playerHand[2].value + playerHand[3].value;

}
return playerTotal
};


playerTotal;

var checkPlayerTotal = function(){
  if(playerTotal > 21) {
    console.log("bust");
    alert('Bust');
    return playerTotal;
  }else if (playerTotal === 21) {
    console.log("blackjack");
    alert('BlackJack!');
    return playerTotal;
  }else {playerTotal;
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


