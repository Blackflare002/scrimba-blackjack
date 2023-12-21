let firstCard = 2;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl =
	document.getElementById("message-el");

const startGame = () => {
	if (sum <= 20) {
		message = "Draw a new card?";
	} else if (sum === 21) {
		message = "Gratz!";
		hasBlackjack = true;
	} else {
		message = "You lose!";
		isAlive = false;
	}
	messageEl.textContent = message;
};
