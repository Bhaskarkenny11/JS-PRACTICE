var a ="variable using var";
const b="variable using const"
let  c = "variable using let";
console.log(a); // Output: variable using var
console.log(b)// Output : variable using const
console.log(c) //using let

var Array=[1,2,3]
Array.push(4) //adds 4 to last of array
Array.unshift(0)//adds 0 to the begining of array
Array.pop()//removes last element
Array.shift()//removes first element
let Array1=Array.splice(0,2) //will remove the first two elements from the array [1, 2, 3] and store them in a new array Array1. Here's a breakdown:
let Array2=Array1.join()
console.log("array1Splice "+Array1)
console.log(Array2)
console.log(Array)
Array.splice(1,2,3)// tries to removes element from index 1 to 2  but no element at index 1..to 2 so ....inserts 3 at 1st index 
console.log(Array)
console.log(typeof(Array2))
const numbers=[0,1,2,3,4,5,]
console.log(numbers)


