let firstCard = 2;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl =
	document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

const startGame = () => {
	renderGame();
};

const renderGame = () => {
	// sumEl.textContent += sum;
	sumEl.textContent = "Sum: " + sum;
	cardsEl.textContent =
		"Cards: " + cards[0] + " " + cards[1];
	if (sum <= 20) {
		message = "Draw a new card?";
	} else if (sum === 21) {
		message = "You got Blackjack! Congrats!";
		hasBlackjack = true;
	} else {
		message = "You lose!";
		isAlive = false;
	}
	messageEl.textContent = message;
};

const newCard = () => {
	// console.log("Drawing new card!");
	let card = 9;
	sum += card;
	cards.push(card);
	console.log(cards);
	renderGame();
};
