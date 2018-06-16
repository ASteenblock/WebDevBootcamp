var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("Yes") === -1 && answer.indexOf("Yeah") === -1 && answer.indexOf("yeah")) {
	var answer = prompt("Are we there yet?");
}

alert("YAY! WE MADE IT!!!");