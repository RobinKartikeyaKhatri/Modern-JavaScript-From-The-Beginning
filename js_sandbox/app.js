// Object Literals

const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 30,
    email: "steve@aol.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Miami",
        state: "FL"
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address["state"];
val = person.getBirthYear();

console.log(val);



// Array of Object
const people = [
    {name: "John", age: 30},
    {name: "Mike", age: 23},
    {name: "Nancy", age: 40}
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
    console.log(people[i].age);
}