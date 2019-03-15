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
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} 
	else {
 		 alert("Sorry, try again.");
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped" + cards[cardsId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped" + cards[cardsId].cardImages);
	console.log("User flipped" + cards[cardsId].suit);

		checkForMatch();
	};

var createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};

createBoard();