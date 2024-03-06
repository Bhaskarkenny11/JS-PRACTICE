var nums=[9,1,2,8,4,5,6,7,3,9]
nums.push(23)//
nums.unshift(24)

console.log(nums.sort())//giving wrong answer 
 console.log(nums.sort((a,b)=> a-b )) //-> this function is for some browsers only 
function sorting(numsarray){
  return numsarray.sort(function(a,b){return  a-b}).join(",")//join()  just for testing  purpose to print the array as string not an array
} 

console.log(sorting([23,24,4,7,8,6,5,9])); // it will throw an error