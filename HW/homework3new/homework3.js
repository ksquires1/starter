const PizzaToppings = ["Bacon", "Olives", "Cheese", "Pepperoni"];
for (let name of pizzaToppings) {
    console.log(name);


let greetCustomer = function() {
let eat = ` Welcome to Pizza Place `;
for (let name of pizzaToppings) {
    eat += `${name}, `
}
console.log(eat);
}

function pizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
  return pizzaOrder;
};

let object = {}

function preparePizza(pizza) {
  console.log("...Cooking Pizza...");
  object = {
    size: pizza[0],
    crust: pizza [1],
    toppings: pizza [2]
  };
  return object;
};

function servePizza(pizzaObject) {
  console.log(
    `Order ready! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with ${pizzaObject.toppings} ... Enjoy!`
    );
    return pizzaObject;
}
greetCustomer ();
getPizza("thick", "large", "Cheese", "Pepperoni");
preparePizza(order);
servePizza(object);
}
