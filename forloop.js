var FirstName = "Kenny";
var lastName="JENNY"
var tags="ruby javascript rails ajax python  jquery"
console.log ("the length of name is " + FirstName.length)
console.log(FirstName.toUpperCase());
console.log (lastName.toLowerCase());
console.log(tags.split(" "));
 var languages=tags.split(" ");
 for (var i=0;i<languages.length;i++)
 {
    console.log(languages[i].toUpperCase());
 }
 
const fullName= ((FirstName + " "+lastName))
const id=(FirstName[0] + lastName[0])
console.log(id)
console.log(typeof(fullName))
console.log(fullName.split(" ")[0][0]+fullName.split(" ")[1][0])
console.log(fullName.trim())
var str ="   hello  world!  "
var trimm=console.log(str.trim())

