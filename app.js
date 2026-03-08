// Parent Constructor
function Animal(name) {
  this.name = name;
}

// Method on Animal prototype
Animal.prototype.speak = function () {
  return "Animal speaking";
};

// Child Constructor
function Dog(name) {
  Animal.call(this, name); // inherit properties
}

// Prototype chaining
Dog.prototype = Object.create(Animal.prototype);

// Fix constructor reference
Dog.prototype.constructor = Dog;

// Dog specific method
Dog.prototype.bark = function () {
  return "Woof!";
};

// Create object
let dog1 = new Dog("Tommy");

console.log(dog1.speak()); // from Animal
console.log(dog1.bark()); // from Dog

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    return "Hello, my name is " + this.name;
  };
}

// Object create
const p1 = new Person("Aman", 22);

console.log(p1.greet());

function Person(name, age) {
  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return "Hello, my name is " + this.name;
  };
}

// Correct object
const p = new Person("Aman", 22);
console.log(p.greet());

// Error example
const p2 = new Person("Danish", 55);