//Model
//If local strage has a todos array, then use it
//Otherwise use the defalut array

let todos;
let savedTodos = JSON.parse(localStorage.getItem('todos'));

if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
    todos = [];
  }

render();

//Functions-----------------------------------
// Creates a todo
function createTodo(title, dueDate) {
  let id = '' + new Date().getTime()
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });

  saveTodos();
}

// Delete a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo){
    //If the id of this todo matches idTodelete, return false
    //For everything else, return true

    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

//Controller
function addTodo() {
  let textbox =document.getElementById("todo-title");
  let title = textbox.value;
  let datePicker = document.getElementById("date-picker")
  let dueDate = datePicker.value;

  createTodo(title, dueDate);
  textbox.value = '';
  render();
};

function deleteTodo(event) {
  let deleteButton = event.target;
  let idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

//View
function render() {
  // reser our list
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function (todo) {
    let element = document.createElement('div');
    element.className = "task-row"
    element.innerText = todo.title +': 締切日: ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "タスク完了";
    deleteButton.style = "margin-left: 100px; background-color: white; color: rgb(3, 3, 156); border: 1px solid rgb(3, 3, 156); font-size: 20px;";
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    let todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
})};


