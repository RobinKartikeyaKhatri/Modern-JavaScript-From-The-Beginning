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
    // DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks);
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks
    filter.addEventListener("keyup", filterTasks);
}

// Get tasks from Local Storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement("li");
        // Add class to newly created li
        li.className = "collection-item";
        // Create a textNode for newly create li
        li.appendChild(document.createTextNode(task));
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
    });
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


    // Store in Local Storage
    storetaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = "";

    e.preventDefault();
}

// Store in Local Storage
function storetaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// removeTask
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if(confirm("Are You Sure?")) {
            e.target.parentElement.parentElement.remove();

            // Remove from Local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clearTasks
function clearTasks() {
    // taskList.innerHTML = "";

    // Faster way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from Local Storage
    clearTasksFromLocalStorage();
}

// Clear tasks from Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// filterTasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
    
}