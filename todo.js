const prompt = require("prompt-sync")();

let todos = []; // Now this will hold OBJECTS, not strings

const addTask = () => {
    let title = prompt("Enter task name: ");
    // Create an OBJECT instead of just a string
    let task = {
        title: title,
        completed: false
    };
    todos.push(task);
    console.log("Task added!");
};

const listTasks = () => {
    console.log("--- YOUR TODO LIST ---");
    for (let i = 0; i < todos.length; i++) {
        // We access the .title and .completed properties
        // If completed is true, show [X], otherwise [ ]
        let status = todos[i].completed ? "[X]" : "[ ]";
        console.log(`${i}. ${status} ${todos[i].title}`);
    }
    console.log("----------------------");
};

const completeTask = () => {
    let index = Number(prompt("Enter number to mark complete: "));
    if (index >= 0 && index < todos.length) {
        // Update the OBJECT property
        todos[index].completed = true;
        console.log("Great job! Task marked done.");
    } else {
        console.log("Invalid number.");
    }
};

const deleteTask = () => {
    let index = Number(prompt("Enter the number to delete: "));
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        console.log("Task removed.");
    } else {
        console.log("Invalid number.");
    }
};

// Main Loop
console.log("Welcome to the Pro Todo App!");
while (true) {
    let command = prompt("Enter command (add, list, complete, delete, quit): ");

    if (command === "quit") {
        console.log("Goodbye!");
        break;
    } else if (command === "add") {
        addTask();
    } else if (command === "list") {
        listTasks();
    } else if (command === "complete") {
        completeTask(); // New Feature!
    } else if (command === "delete") {
        deleteTask();
    } else {
        console.log("Invalid command.");
    }
}