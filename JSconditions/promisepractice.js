let a= new Promise ((resolve,reject)=>{
    let b=1+3
    if (b==2)
    {
    resolve('success')
    }
else{
    reject('error')
}
})
a.then((message)=>{console.log(message);}).catch((message)=>{console.log(message);})