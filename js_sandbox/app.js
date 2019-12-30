// Function Declaration

function greet(firstName = "John", lastName = "Doe") {
    // console.log("Hello");
    return "Hello " + firstName + " " + lastName;
}

// console.log(greet());




// Function Expressions

const square = function(num) {
    return num * num;
};

// console.log(square(8));



// Immediatly Invokable Function Expressions (IIFE)

// (function(){
//     console.log("IIFE RAN...");
// })();

// (function(name){
//     console.log("Hello " + name);
// })("Robin");



// Property Methods

const todo = {
    add: function() {
        console.log("Add todo...");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();