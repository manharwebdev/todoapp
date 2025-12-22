// OLD WAY (var)
let todos = []; 

// NEW WAY (arrow)
const addTodo = () => {
    const input = document.getElementById('todoInput');
    const text = input.value;

    if (text === '') {
        alert('Please write something!');
        return;
    }

    // Create object
    const newTodo = {
        id: Date.now(),
        text: text
    };

    todos.push(newTodo);
    input.value = '';
    
    renderTodos();
};
window.addTodo = addTodo;

// NEW WAY (arrow + filter)
const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
};
window.deleteTodo = deleteTodo;

// NEW WAY (arrow + map + template literals)
const renderTodos = () => {
    const listElement = document.getElementById('todoList');
    listElement.innerHTML = todos
        .map(todo => `<li>${todo.text} <span class="delete-btn" onclick="deleteTodo(${todo.id})">X</span></li>`)
        .join('');
};
window.renderTodos = renderTodos;