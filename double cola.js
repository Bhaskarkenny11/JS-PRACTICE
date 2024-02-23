var queue=["sheldon","leonard","penny","Rajesh","howard"]
var visited=[]
var r=6;
var i=0;
while(i<r)
{

 visited=queue.shift();
 queue.push(visited,visited)
 //console.log(queue) use this to see loop
 i++

}     
console.log ("person at begining of the queue is " + queue[0])
