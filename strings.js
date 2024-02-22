var sentence="we all love hyderabad";
output="#"
words=sentence.split(" ") // split return array
for (var i=0;i<words.length;i++)
 {
    var word=words[i] // # storing array elements in word
    word[0].toUpperCase() + word.substr(1,words.length) 
    // we can write like this also 
  //var word=words[i][0].toUpperCase() + words[i].substr(1,words[i].length)+" ";
//    console.log(word);
   output+=word
 }
 console.log(output)

 // we can write  the above code in a more concise way using method
// just storing word array elements in var called word and applying all methods on that var word
// var word=word[i]
/*word[0].toUppercase()+word.substr(1,words.length)*/


