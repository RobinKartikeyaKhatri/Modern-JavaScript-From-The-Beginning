// Sets - Store unique values of any type

const set1 = new Set();

// Add values to Set
set1.add(100);
set1.add("A string");
set1.add({name: "John"});
set1.add(true);
set1.add(100);


const set2 = new Set([1, true, "string"]);

// console.log(set1);
// console.log(set2);


// Get count
// console.log(set1.size);
// console.log(set2.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: "John"}));


// console.log({name: "John"} === {name: "John"});


// Delete from set
// set1.delete(100);
// console.log(set1);


// Iterating through sets

// for(let item of set1) {
//     console.log(item);
// }

// set1.forEach(value => console.log(value));


// Convert Set to Arrays
const setArr = Array.from(set1);
console.log(setArr);

