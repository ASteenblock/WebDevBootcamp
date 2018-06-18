//open javascript console in chrome to view the program, the instructions are listed in the webpage.
window.setTimeout(function() {
var todos = [];

var input = prompt("What would you like to do?");

while(input != "quit") {
	//handle input
	if(input === "list") {
	  listTodos(); 	
	} else if(input === "new") {
	  addTodo();
	} else if(input === "delete") {
	  deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");


}
console.log("You quit the app!");

function listTodos() {
	console.log("***********")
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
	console.log("***********")
}

function addTodo() {
	//ask for a new todo	
	var newTodo = prompt("Enter a new todo item:");
	//add to todos array
	todos.push(newTodo);
	console.log("Todo item added!");
}

function deleteTodo() {
	//ask for index of todo to be delted
	var index = prompt("Enter index (number) of todo item to delete.");
	//delte the todo
	//splice()
	todos.splice(index,1);
	console.log("Todo item deleted!");
}
}, 500);