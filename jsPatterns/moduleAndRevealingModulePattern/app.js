// Basic structure

// (function() {
//     // Declare private variables and functions
//     return {
//         // Declare public variables and functions
//     }
// })();


// Standard Module Pattern
// const UICtrl = (function() {
//     let text = "Hello World";

//     const changeText = function() {
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }

//     return {
//         callChangeText() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();


// UICtrl.callChangeText();




// Revealing Module pattern
const ItemCtrl = (function() {
   let data = [];
   
   function add(item) {
       data.push(item);
       console.log("Item Added...");
   }

   function get(id) {
       return data.find(item => {
           return item.id === id;
       });
   }

   return {
       add,
       get
   }
})();


ItemCtrl.add({id: 1, name: "John"});
ItemCtrl.add({id: 2, name: "Mark"});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
