let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl =
	document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
	name: "Shane",
	chips: 145,
};

let playerEl =
	document.getElementById("player-el");
playerEl.textContent =
	player.name + ": $" + player.chips;

function getRandomCard() {
	let randomNumber =
		Math.floor(Math.random() * 13) + 1;
	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
} //hoisted!

const startGame = () => {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
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
	if (isAlive && !hasBlackjack) {
		// console.log("Drawing new card!");
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		// console.log(cards);
		renderGame();
	}
};
