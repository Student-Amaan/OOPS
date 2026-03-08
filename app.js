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
