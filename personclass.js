class Person {
    constructor(name) {
      this.name = name;
    }
  
    printNameArrow() {
      setTimeout(() => {
        console.log('Arrow: ' + this.name); // Accessing name using arrow function
      }, 100);
    }
  
    printNameFunction(othername) {
        let personName=othername
      setTimeout(function() {
        console.log('Function: ' + personName); // Accessing name using standard function
      }, 200);
    }
  }
  
  let person = new Person('Bob');
  person.printNameArrow();     // Output: Arrow: Bob
  person.printNameFunction('bhaskar');  // Output: Function: undefined (due to losing context)
  
  