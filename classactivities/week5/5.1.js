// create an object literal
// include a method that uses "this"
const animal = {
  name: "Rudy",
  age: 3.14,
  typeOfAnimal: "Marsupial",
  hobbies: ["bake pie", "Catching a ball", "Sleeping"],
  bio: `${this.name} is ${this.age} years old and loves ${this.hobbies}`,
  bakesale(){
    console.log(`Welcome to ${this.name}'s bakesale.`)
  }
};
// create a function in the global scope that prints "this"
function logThis() {
  console.log("this is: ", this);
}
console.log(logThis());
