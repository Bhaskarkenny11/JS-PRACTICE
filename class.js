class Person 
{
  constructor(name)
  {
  this.name=name
  }

  printarrow()
  {
      ()=> console.log("arrow"+ this.name)
  }

  printname()
   {
     console.log('name: from standard '+ this.name);

    }

 }

let person= new Person ('Tom')
person.printname();
person.printarrow();
