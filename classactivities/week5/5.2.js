// create a function constructor that works as a template for an Animal // include properties for name, type, weight, etc.
function Animal(name, type, color, weight, age)

// create a new instance on an Animal
const winnyThePhoo = new Animal("Winny The Phoo", "Bear", "Purple", 130, 45, "bubbly");

console.log(winnyThePhoo);
// add methods to the Animal prototype
Animal.prototype.greet = function() {
  return `Hi, I'm a ${this.type}!`;
};

console.log(winnyThePhoo)

// attach a method directly to the Animal instance that "overwrites" a prototype method
