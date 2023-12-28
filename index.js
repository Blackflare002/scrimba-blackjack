let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl =
	document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
	let theNumber =
		Math.floor(Math.random() * 13) + 1;
	if (theNumber === 1) {
		return 11;
	} else if (theNumber > 10) {
		return 10;
	} else {
		return theNumber;
	}
} //hoisted!

const startGame = () => {
	renderGame();
};

const renderGame = () => {
	cardsEl.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	sumEl.textContent = "Sum: " + sum;
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
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	console.log(cards);
	renderGame();
};
