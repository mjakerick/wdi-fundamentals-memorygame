var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"},
{
rank: "king",
suit: "diamonds",
cardImage: "memory_game/images/king-of-diamonds"
},
];

 var cardsInPlay = [];
 // checking if cards match
 var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}	else {
		alert("Sorry, try again.");
}
};

//flips cards with cardId parameters
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	this.setAttribute('src' ,cards[cardId].cardImage)
	//sends to check for match function
	 if (cardsInPlay.length ===2){
	 	checkForMatch();
	 }
}

// function-createBoard
	var createBoard = function() {
		for (var i=0; i<cards.length; i++){
			/*creates img element for each card and it stores as a variable card Element*/
			var cardElement= document.createElement('img');
			cardElement.setAttribute('src' , "images/back.png");
			cardElement.setAttribute('data-id' , i);
			cardElement.addEventListener('click' , flipCard);
			//cardElement.appendChild('game-board');
			document.getElementById('game-board').appendChild(cardElement);
		}
}
createBoard();

/*flipCard(0);
flipCard(2);*/