// if age is negative print an error message
// if age is 21 print Happy 21st birthday!
// if age is odd print your age is odd
// Super bonus: if age is perfect square, print perfect square!
// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
 
// If age is negative
if(age < 0) {
 alert("Error: Age must be a postive number!");
}
 
// If age is 21  
if(age === 21) {
 alert("Happy 21st Birthday!");
}
 
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 alert("Your age is odd!");
}
 
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}


