//create secret number
var secretNumber = 4;
//ask user for guess
var stringGuess = (prompt("Please guess a number"));
var guess = Number(stringGuess);
//check if guess is right
if (guess === secretNumber) {
	alert("You got it right!!");
}
//Otherwise check if higher
else if (guess > secretNumber) {
	alert("Guess is too high, guess again!");
}
//Otherwise check if lower
else {
	alert("Guess is too low, guess again!");
}

