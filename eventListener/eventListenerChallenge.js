var button = document.querySelector("button");

button.addEventListener("click", function() {
	const curColor = document.body.style.backgroundColor;

	if (curColor === 'yellow') {
		document.body.style.backgroundColor = "white";
	}
	else {
		document.body.style.backgroundColor = "yellow";
	}
});