// const sayHello = function() {
//     console.log("Hello");
// }

// const sayHello = () => {
//     console.log("Hello");
// }

// Oneline function does not need braces
// const sayHello = () => console.log("Hello");

// Oneline return
// const sayHello = () =>  "Hello";

// Same as above
// const sayHello = function() {
//     return "Hello";
// }


// Return an Object literal from arrow function
// const sayHello = () => ({ msg: "Hello"});

// Single param does not need parenthesis in Arrow Functions
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Robin", "Khatri");



const users = ["Nathan", "John", "William"];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);