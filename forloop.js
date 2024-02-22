var name = "Kenny";
var lastName="jenny"
var tags="ruby javascript rails ajax python  jquery"
console.log ("the length of name is " + name.length)
console.log(name.toUpperCase());
console.log (lastName.toLowerCase());
console.log(tags.split(" "));
 var languages=tags.split(" ");
 for (var i=0;i<languages.length;i++)
 {
    console.log(languages[i].toUpperCase());
 }