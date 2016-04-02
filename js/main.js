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
  for (var i = 0; i < cardDeck.rank.length; i++) {
    for (var j = 0; j < cardDeck.suit.length; j++) {
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

var amount;
var getBet = function() {
  amount = window.prompt('Your bank total is $' + bank + '. Minimum bet is $200. How much would you like to wager?');
};


$('#startButton').on('click', function() {
  var bet1 = getBet();



  $('#startButton').html("");
  $('#rulesButton').html("");
  $('#jumbotron').html("");
  $('#div5').append('<div class="deal" id="deal" onclick="deal()"></div>');
  $('#deal').html('Deal');

  makeDeck();
  shuffleDeck(deck);
});

var playAgain = function(){
  getBet();
  $('#dealer').remove()
  $('#player').remove()
  $('#dealerCard1').remove()
  $('#dealerCard2').remove()
  $('#dealerCard3').remove()
  $('#dealerCard4').remove()
  $('#playerCard1').remove();
  $('#playerCard2').remove();
  $('#playerCard3').remove();
  $('#playerCard4').remove();
  $('#bet').remove();
  $('#hold').remove()
  $('#hit').remove();




}


// card ingredients

//Creates a fresh deck in order

var deal = function() {
  return bank;
  $('#div6').append('<p class="animated fadeInUp" id="bankAmount"></p>');
  $('#bankAmount').html("$" + bank + " in the bank");
  playerHand.push(deck[0]);
  dealerHand.push(deck[1]);
  playerHand.push(deck[2]);
  dealerHand.push(deck[3]);
  $('#div4').append('<h2 class="animated fadeInUp" id="dealer"></h2>');
  $('#dealer').html('DEALER');
  $('#div4').append('<h2 class="animated fadeInUp" id="player"></h2>');
  $('#player').html('PLAYER');
  $('#jumbotron').append('<div class="animated fadeInDownBig" class="cardFlip" id="dealerCard1"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard2"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard1"></div>');
  $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard2"></div>');
  $('#playerCard1').html(playerHand[0].rank + playerHand[0].symbol);
  $('#playerCard2').html(playerHand[1].rank + playerHand[1].symbol);
  $('#dealerCard1').append('<img src="http://opengameart.org/sites/default/files/card%20back%20red.png"/>');
  //$('#dealerCard1').html(dealerHand[0].rank + dealerHand[0].symbol);
  $('#dealerCard2').html(dealerHand[1].rank + dealerHand[1].symbol);
  $('#div5').append('<div class="animated fadeInUp" id="bet" onclick="bet()"></div>');
  $('#div5').append('<div class="animated fadeInUp" id="hit" onclick="hit()"></div>');
  $('#div5').append('<div class="animated fadeInUp" id="hold" onclick="hold()"></div>');
  $('#hold').html('Stand');
  $('#bet').html('Bet');
  $('#hit').html('Hit');
  deck.shift();
  deck.shift();
  deck.shift();
  deck.shift();
  checkPlayerValue();
  checkDealerValue();
  playerBlackJack();
  twoAces();
  if (playerHand[0].suit === "Hearts") {
    document.getElementById("playerCard1").style.color = "red";
  }
  if (playerHand[0].suit === "Clubs") {
    document.getElementById("playerCard1").style.color = "black";
  }
  if (playerHand[0].suit === "Spades") {
    document.getElementById("playerCard1").style.color = "black";
  }

  if (playerHand[0].suit === "Diamonds") {
    document.getElementById("playerCard1").style.color = "red";
  }
  if (playerHand[1].suit === "Hearts") {
    document.getElementById("playerCard2").style.color = "red";
  }
  if (playerHand[1].suit === "Clubs") {
    document.getElementById("playerCard2").style.color = "black";
  }
  if (playerHand[1].suit === "Spades") {
    document.getElementById("playerCard2").style.color = "black"
  }

  if (playerHand[1].suit === "Diamonds") {
    document.getElementById("playerCard2").style.color = "red";
  }
  if (dealerHand[0].suit === "Hearts") {
    document.getElementById("dealerCard1").style.color = "red";
  }
  if (dealerHand[0].suit === "Clubs") {
    document.getElementById("dealerCard1").style.color = "black";
  }
  if (dealerHand[0].suit === "Spades") {
    document.getElementById("dealerCard1").style.color = "black";
  }

  if (dealerHand[0].suit === "Diamonds") {
    document.getElementById("dealerCard1").style.color = "red";
  }
  if (dealerHand[1].suit === "Hearts") {
    document.getElementById("dealerCard2").style.color = "red";
  }
  if (dealerHand[1].suit === "Clubs") {
    document.getElementById("dealerCard2").style.color = "black";
  }
  if (dealerHand[1].suit === "Spades") {
    document.getElementById("dealerCard2").style.color = "black";
  }

  if (dealerHand[1].suit === "Diamonds") {
    document.getElementById("dealerCard2").style.color = "red";
  }

  $('#div1').html("");
}
;
var amount1;
var bet = function() {
  return bank;
   amount1 = window.prompt('You have ' + bank + 'How much would you like to wager?');
  return amount;
};

var hit = function() {
  console.log('button works');
  if (playerHand.length === 2) {
    $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard3"></div>');
    $('#playerCard3').html(deck[0].rank + deck[0].symbol);
    playerHand.push(deck[0]);
    if (playerHand[2].suit === "Hearts") {
      document.getElementById("playerCard3").style.color = "red";
    }
    if (playerHand[2].suit === "Clubs") {
      document.getElementById("playerCard3").style.color = "black";
    }
    if (playerHand[2].suit === "Spades") {
      document.getElementById("playerCard3").style.color = "black";
    }
    if (playerHand[2].suit === "Diamonds") {
      document.getElementById("playerCard3").style.color = "red";
    }
  aceChange(0);
  aceChange(1);
  aceChange(2);

    checkPlayerValue();
    playerBusts();
    playerBlackJack();
    deck.shift();
    return deck;
    return playerTotal;

  } else if (playerHand.length === 3) {
    $('#jumbotron').append('<div class="animated fadeInDownBig" id="playerCard4"></div>');
    $('#playerCard4').html(deck[0].rank + deck[0].symbol);
    playerHand.push(deck[0]);

    if (playerHand[3].suit === "Hearts") {
      document.getElementById("playerCard4").style.color = "red";
    }
    if (playerHand[3].suit === "Clubs") {
      document.getElementById("playerCard4").style.color = "black";
    }
    if (playerHand[3].suit === "Spades") {
      document.getElementById("playerCard4").style.color = "black";
    }
    if (playerHand[3].suit === "Diamonds") {
      document.getElementById("playerCard4").style.color = "red";
    }
    checkPlayerValue();
    playerBusts();
    playerBlackJack();
    deck.shift();

    aceChange(0);
    aceChange(1);
    aceChange(2);
    aceChange(3);
    return deck;
    return playerTotal;
  }
};

var twoAces = function() {
  if (playerHand[0].rank === "A" && playerHand[1].rank === "A"){
    playerTotal = 12;
    return playerTotal;
  }
};


deck;


var lose = function() {
  bank = bank - amount - amount1;
  return bank;
};


var bigWin = function(){
  bank = bank + ((amount + amount1) * 1.5);
  return bank;
}

var win = function (){
  bank = bank + amount + amount1;
  return bank;
}

var loseBig = function(){
  bank = bank - ((amount + amount1) * 1.5);
  return bank;
}

var tie = function() {
  bank = bank;
  return bank;
}

//CALLBACKS!!!!



var myVar;
var alertFunc = function() {
  alert("Dealer wins. Play again?");
  playAgain()
  lose();
};

var myVar2;
var alertFunc2 = function() {
  alert("Dealer busts, you win! Play again?");
  playAgain()
  win()
  makeDeck();
  shuffleDeck(deck);
};

var myVar3;
var alertFunc3 = function() {
  alert("Dealer has blackjack, you lose. Play again?")
  playAgain()
  loseBig()
  makeDeck();
  shuffleDeck(deck);
};

var myVar4;
var alertFunc4 = function() {
  alert("Blackjack! Play Again?")
  playAgain();
  winBig();
  makeDeck();
  shuffleDeck(deck);
};

var myVar5;
var alertFunc5 = function() {
 alert("Bust. Play again?")
  playAgain()
  lose();
  makeDeck();
  shuffleDeck(deck);
}

var dealerWins = function() {
  if ((dealerTotal > playerTotal) && (dealerTotal < 21)) {
    myVar = setTimeout(alertFunc, 1500);
  }
}

var dealerBusts = function() {
  if (dealerTotal > 21) {
    myVar2 = setTimeout(alertFunc2, 1500);
  }
};

var dealerBlackJack = function() {
  if (dealerTotal === 21) {
    myVar3 = setTimeout(alertFunc3, 1500);
    bank = (bank (bet1 - bet2));
  }
}

var playerBlackJack = function() {
  if (playerTotal === 21) {
    myVar4 = setTimeout(alertFunc4, 1500);
  }
}

var playerBusts = function() {
  if (playerTotal > 21) {
    myVar5 = setTimeout(alertFunc5, 1500);

  }
}


var dealerHit = function() {
  console.log('working');
  $('#dealerCard1').attr('id', 'flipCard');
  $('#flipCard').html(dealerHand[0].rank + dealerHand[0].symbol);
  checkDealerValue();
  checkPlayerValue();
  if (dealerHand.length === 2) {
    if (dealerTotal < playerTotal) {
      dealerHand.push(deck[0]);
      $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard3"></div>');
      $('#dealerCard3').html(dealerHand[2].rank + dealerHand[2].symbol);
      if (dealerHand[2].suit === "Hearts") {
        document.getElementById("dealerCard3").style.color = "red";
      } else if (dealerHand[2].suit === "Clubs") {
        document.getElementById("dealerCard3").style.color = "black";
      } else if (dealerHand[2].suit === "Spades") {
        document.getElementById("dealerCard3").style.color = "black";
      } else if (dealerHand[2].suit === "Diamonds") {
        document.getElementById("dealerCard3").style.color = "red";
      } else {

      }
    }
    deck.shift();
    checkDealerValue();
    dealerAceChange(0);
    dealerAceChange(1);
    dealerAceChange(2);
    dealerBusts()
    dealerWins();
    dealerBlackJack();

  } else if (dealerTotal < 13) {
    dealerHand.push(deck[0]);
    checkDealerValue();
    $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard3"></div>');
    $('#dealerCard3').html(dealerHand[2].rank + dealerHand[2].symbol);
    if (dealerHand[2].suit === "Hearts") {
      document.getElementById("dealerCard3").style.color = "red";
    } else if (dealerHand[2].suit === "Clubs") {
      document.getElementById("dealerCard3").style.color = "black";
    } else if (dealerHand[2].suit === "Spades") {
      document.getElementById("dealerCard3").style.color = "black";
    } else if (dealerHand[2].suit === "Diamonds") {
      document.getElementById("dealerCard3").style.color = "red";
    } else {};
    dealerWins();
    dealerBusts();
    dealerBlackJack();
    dealerAceChange(0);
    dealerAceChange(1);
    dealerAceChange(2);
    deck.shift();
    dealerHitsAgain();

  }
}

var dealerHitsAgain = function() {
  if (dealerHand.length === 3)
    if (dealerTotal < playerTotal) {
      dealerHand.push(deck[0]);
      $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard4"></div>');
      $('#dealerCard4').html(dealerHand[3].rank + dealerHand[3].symbol);
      if (dealerHand[3].suit === "Hearts") {
        document.getElementById("dealerCard4").style.color = "red";
      } else if (dealerHand[3].suit === "Clubs") {
        document.getElementById("dealerCard4").style.color = "black";
      } else if (dealerHand[3].suit === "Spades") {
        document.getElementById("dealerCard4").style.color = "black";
      } else if (dealerHand[3].suit === "Diamonds") {
        document.getElementById("dealerCard4").style.color = "red";
      }
      deck.shift();
      checkDealerValue();
      dealerWins();
      dealerBusts();
      dealerBlackJack();
      dealerAceChange(3)
    } else if (dealerTotal < 17) {
    dealerHand.push(deck[0]);
    checkDealerValue();
    dealerAceChange();


    $('#jumbotron').append('<div class="animated fadeInDownBig" id="dealerCard4"></div>');
    $('#dealerCard4').html(dealerHand[3].rank + dealerHand[3].symbol);
    if (dealerHand[3].suit === "Hearts") {
      document.getElementById("dealerCard4").style.color = "red";
    } else if (dealerHand[3].suit === "Clubs") {
      document.getElementById("dealerCard4").style.color = "black";
    } else if (dealerHand[3].suit === "Spades") {
      document.getElementById("dealerCard4").style.color = "black";
    } else if (dealerHand[3].suit === "Diamonds") {
      document.getElementById("dealerCard4").style.color = "red";
    }
    dealerWins();
    dealerAceChange(3);
    dealerBusts();
    dealerBlackJack();
    deck.shift();
  }
}

// } else if (dealerTotal > playerTotal) {
//   console.log('Dealer wins');
//   dealerWins();



var checkDealerValue = function() {
  if (dealerHand.length === 2) {
    dealerTotal = dealerHand[0].value + dealerHand[1].value;
    return dealerTotal;
  } else if (dealerHand.length === 3) {
    dealerTotal = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value;
    return dealerTotal;
  } else if (dealerHand.length === 4) {
    dealerTotal = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value;
    return dealerTotal;
  } else {
    return dealerTotal;
  }
};


// var checkDealerTotal = function(){
//   if(dealerTotal > 21) {
//     alert("Dealer busts. You win!");
//     $('#bankAmount').html("$" + bank + " in the bank");
//     return dealerTotal;
//   }else if (dealerTotal === 21) {
//     alert('Dealer has blackjack. You lose!');

//     return dealerTotal;
//   }



var hold = function() {
  var myVar = setTimeout(dealerHit(), 3000);
  //var myVar1 = setTimeout(dealerWins(), 6000);
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

  } else if (playerHand.length === 4) {
    playerTotal = playerHand[0].value + playerHand[1].value + playerHand[2].value + playerHand[3].value;

  } else {
    console.log("hello")
  }
  return playerTotal;
};

var aceChange = function(num) {
  checkPlayerValue();
  playerTotal;
  if(playerTotal > 21) {
    if (playerHand[num].rank === "A")
      playerHand[num].value = 1;
      console.log(playerHand)
    }

 }

 var dealerAceChange = function(num) {
  checkDealerValue();
  dealerTotal;
  if(dealerTotal > 21) {
    if (dealerHand[num].rank === "A") {
      dealerHand[num].value = 1;
      console.log(dealerHand)
    }

}
 }









