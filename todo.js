const prompt = require("prompt-sync")();

let todos = []; // Now this will hold OBJECTS, not strings

const addTask = () => {
  let title = prompt("Enter task name: ");
  // Create an OBJECT instead of just a string
  let task = {
    title: title,
    completed: false,
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
  const editTask = () => {
    let index = Number(prompt("Enter the number to edit: "));
    if (index >= 0 && index < todos.length) {
      // 1. Show old title so they know what they are changing
      console.log(`Current task: ${todos[index].title}`);

      // 2. Ask for new title
      let newTitle = prompt("Enter the new task name: ");

      // 3. Update the Object
      todos[index].title = newTitle;
      console.log("Task updated successfully!");
    } else {
      console.log("Invalid number.");
    }
  };
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
  let command = prompt(
    "Enter command (add, list, edit, complete, delete, quit): "
  );

  if (command === "quit") {
    console.log("Goodbye!");
    break;
  } else if (command === "add") {
    addTask();
  } else if (command === "list") {
    listTasks();
  } else if (command === "edit") {
    // <--- NEW BLOCK
    editTask();
  } else if (command === "complete") {
    completeTask(); // New Feature!
  } else if (command === "delete") {
    deleteTask();
  } else {
    console.log("Invalid command.");
  }
}
