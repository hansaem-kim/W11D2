import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    // debugger
    const content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);
});