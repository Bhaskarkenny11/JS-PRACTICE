var sentence="we all love hyderabad";
output="#"
words=sentence.split(" ") // split return array
// for (var i=0;i<words.length;i++)  this is prebuilt in foreach iterator
  words.forEach(function(word) // function with no name its anonymous functio  here function is anonymous
                {
                    word= word[0].toUpperCase() + word.substr(1,word.length) + " ";
                    output+=word
                }
            );
 console.log(output);