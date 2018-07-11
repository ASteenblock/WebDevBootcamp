// print reverse
// write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)

// printReverse([1,2,3,4]);
//4
//3
//2
//1

function printReverse(array) {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) 
    [array[i], array[j]] = [array[j], array[i]];
}

const a = [1,2,3,4,5];
printReverse(a);
console.log(a);


//isUniform()
//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
//isUniform([1,1,1,1]); //true
//isUniform([2,1,1,1]); //false
//isUniform(["a", "b", "b", "b"]); //false
//isUniform(["a","a","a","a"]); //true
//write a variable which keeps track of the very first item in the index
function isUniform(arr){
  var first = arr[0];
  for(var i = 0; i < arr.length; i ++){
  	if(arr[i] != first) {
  		return false;
  	}
  }
  return true;
}


//sumArray() - Write a function sumArray() that accepts an array of numbers and returns the sum of numbers in the array
//sumArray([1,2,3]); //6
// function sum(input){
             
//  if (toString.call(input) !== "[object Array]")
//     return false;
      
//             var total =  0;
//             for(var i=0;i<input.length;i++)
//               {                  
//                 if(isNaN(input[i])){
//                 continue;
//                  }
//                   total += Number(input[i]);
//                }
//              return total;
//             }
// console.log(sum([1,2,3]));
// console.log(sum([100,-200,3]));
// console.log(sum([1,2,'a',3]));

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

//max() write a function that accepts an array of numbers and returns the maximum number in that array
//need to have a variable that stores the maximum number
//max([1,2,3]); //3
//max([10,2,4,3,7]); //10

function max(array) {
  return array.reduce((a, b) => Math.max(a, b));
}

