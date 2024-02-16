const readlineSync=require("readline-sync");

function even(number)
{
    

    if (number%2==0)
     return "even"
 else
    {
      return "odd"
    }
}
let number=readlineSync.question ("enter number")
console.log(even(number))