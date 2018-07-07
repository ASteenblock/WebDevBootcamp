window.setTimeout(function() {
var todos = [];

var input = prompt("What would you like to do?");

while(input != "quit") {
	if(input === "list") {
	  todos.forEach(function(todo){
	  	console.log(todo);
	  });	
	} else if(input === "new") {
	var newTodo = prompt("Enter a new todo item:");
	todos.push(newTodo);
	}
	input = prompt("What would you like to do?");

}
console.log("You quit the app!");
}, 500);