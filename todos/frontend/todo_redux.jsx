import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import { App } from '../frontend/components/app';
import  Root  from '../frontend/components/root';
import { allTodos } from '../frontend/reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
    window.allTodos = allTodos;

    // debugger
    const content = document.getElementById("content");
    ReactDOM.render(<Root store={ store }/>, content);
});