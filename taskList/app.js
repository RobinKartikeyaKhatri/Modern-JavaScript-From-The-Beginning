// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector("ul.collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


// Load all event listeners
loadEventListeners();


// Load all event listeners
 function loadEventListeners() {
    // Add task event
    form.addEventListener("submit", addTask);
}

// addTask
function addTask(e) {
    if (taskInput.value === '') {
        alert("Add a task");
    }
    // Create li element
    const li = document.createElement("li");
    // Add class to newly created li
    li.className = "collection-item";
    // Create a textNode for newly create li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link
    const link = document.createElement("a");
    // Add class to newly created link
    link.className = "delete-item secondary-content";
    // Add icon link html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    // Append link to newly created li
    li.appendChild(link);
    
    // Append the li to ul
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = "";

    e.preventDefault();
}