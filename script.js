var a = ["abc","xyz","ab"];
var [c,d,e] = a
console.log(c,d,e)
// Define a constructor function for creating objects of type 'Person'
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the Person prototype
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  };
  
  // Create a new instance of Person
  var person1 = new Person("Alice", 30);
  var person2 = new Person("Bob", 25);
  
  // Access object properties
  console.log(person1.name); // Output: Alice
  console.log(person2.age);  // Output: 25
  
  // Call object method
  person1.sayHello(); // Output: Hello, my name is Alice and I'm 30 years old.
  person2.sayHello(); // Output: Hello, my name is Bob and I'm 25 years old.
  