function useCallback(callback) 
{
    callback(1);
    callback(2);
    callback(3);
}
function callback(sentence)
{
    console.log("the number is "+ sentence+".")
}

useCallback(callback);
//===================================
/* Callbacks in JavaScript are functions that are passed as arguments to other functions. 
This is a very important feature of asynchronous programming, 
and it enables the function that receives the 
callback to call our code when it finishes a long task, 
while allowing us to continue the execution of the code. */