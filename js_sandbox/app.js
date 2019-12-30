// General Loops

// For Loop

// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log("Number " + i + " is my favorite number");
//         continue;
//     }
//     console.log("Number " + i);
// }

// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//         console.log("Number " + i + " is my favorite number");
//         break;
//     }
//     console.log("Number " + i);
// }



// While Loop

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }





// Do-While Loop

// let i = 12;
// do {
//     console.log("Number " + i);
//     i++;
// } while(i < 10);





// Loop through Arrays

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


// forEach Array Loop

// cars.forEach(function (car, index, array) {
//     console.log(`Car number ${index} : ${car}`);
//     console.log(array);
// });



// MAP

// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Sara"},
//     {id: 3, name: "Karen"},
//     {id: 4, name: "Steve"}
// ];

// const ids = users.map(function(user) {
//     return user.id
// });

// console.log(ids);



// ForIn Loop (Often used for Object)

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40
};

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}