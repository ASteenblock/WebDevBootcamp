// write a function isEven() which takes a single numeric argument and returns True if the number is even and False if the number isn't even
function isEven(n) {
	if(n % 2 === 0) {
		return ("True");
	}
	return ("False");
}


//write a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}


//Write a function KebabToSnake() which takes a single Kebab-cased string argument and returns the snake_cased version. Basically replace "-" with "_"
function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}
