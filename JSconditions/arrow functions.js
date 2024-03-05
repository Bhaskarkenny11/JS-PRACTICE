
const evenodd = num => num%2 ? 'odd' : 'even';
console.log(evenodd(4))

function even (num)
{
    if (num%2==0)
    return "even"
    else
    {
        return "odd"
    }
}

console.log(even (5)) 

function evenodd2(num)
{
     if (num%2===0)
      return "even "
    else 
        {
            return "odd"
        }
}
console.log(evenodd2(5));



function greet(name)
{
    return "hiii " + name
}

console.log (greet("kenny"))

let greet2= a => "hiii " + a
console.log(greet2("Bhaskar"))