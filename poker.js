// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function(){
$(".deal").click(function(event) {
  event.preventDefault();
  var cards = window.getDeck();
  cards = cards.shuffle();
  var random1 =document.getElementById('c1');
  random1.src="http://golearntocode.com/images/cards/"+cards[0]+".png";
  var random2 =document.getElementById('c2');
  random2.src="http://golearntocode.com/images/cards/"+cards[1]+".png";
  var random3 =document.getElementById('c3');
  random3.src="http://golearntocode.com/images/cards/"+cards[2]+".png";
  var random4 =document.getElementById('c4');
  random4.src="http://golearntocode.com/images/cards/"+cards[3]+".png";
  var random5 =document.getElementById('c5');
  random5.src="http://golearntocode.com/images/cards/"+cards[4]+".png";

  $(function(){
    $(".deal").on("click",function(event) {
      event.preventDefault();
      var deck =window.getDeck();
      shuffledeck=deck.shuffle();
      $("#c1").attr("src","http://golearntocode.com/images/cards/"+cards[0]+".png");
      $("#c2").attr("src","http://golearntocode.com/images/cards/ace_of_spades.png");
      $("#c3").attr("src","http://golearntocode.com/images/cards/ace_of_spades.png");
      $("#c4").attr("src","http://golearntocode.com/images/cards/ace_of_spades.png");
      $("#c5").attr("src","http://golearntocode.com/images/cards/ace_of_spades.png");

    })
  })

  // Your code goes here!
  })
})
