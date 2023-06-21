const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const form = document.querySelector("#todoForm") as HTMLFormElement;
const list = document.querySelector("#todoList") as HTMLUListElement;

interface Todo {
  text: string;
  isCompleted: boolean;
}

function readTodos(): Todo[] {
  const todosJson = localStorage.getItem("todos");
  return todosJson === null ? [] : JSON.parse(todosJson);
}
const todos: Todo[] = readTodos();

function saveTodod() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("DOMContentLoaded", () => {
  todos.forEach(createTodo);
});

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: todoInput.value,
    isCompleted: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);
  saveTodod();
  todoInput.value = "";
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.isCompleted;
  checkBox.addEventListener("change", function () {
    todo.isCompleted = checkBox.checked;
    saveTodod();
  });

  newLi.append(todo.text, checkBox);
  list.append(newLi);
}

form.addEventListener("submit", handleSubmit);
