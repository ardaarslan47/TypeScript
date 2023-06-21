"use strict";
const todoInput = document.getElementById("todoInput");
const form = document.querySelector("#todoForm");
const list = document.querySelector("#todoList");
function readTodos() {
    const todosJson = localStorage.getItem("todos");
    return todosJson === null ? [] : JSON.parse(todosJson);
}
const todos = readTodos();
function saveTodod() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
window.addEventListener("DOMContentLoaded", () => {
    todos.forEach(createTodo);
});
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: todoInput.value,
        isCompleted: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodod();
    todoInput.value = "";
}
function createTodo(todo) {
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
