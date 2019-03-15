var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png" 
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png" 
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png" 
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png" 
},
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
 		 alert("Sorry, try again.");
 	cardsInPlay.push(cards[cardId].rank);
	}
}

var flipCard = function(cardId) {
console.log("User flipped" + cards[cardsId].rank);
console.log("User flipped" + cards[cardsId].suit);
console.log("User flipped" + cards[cardsId].cardImages);
cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);
