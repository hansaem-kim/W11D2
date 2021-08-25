import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';
// import { receiveTodo } from '../../actions/todo_actions';

export default (props) => {
    const todoLis = props.todos.map( todo => {
        return (
            <TodoListItem key={todo.id} todo={todo} receiveTodo={props.receiveTodo} removeTodo={props.removeTodo}/>
        )
    })
    debugger;
    return (
        <ul>
            {todoLis}
            <TodoForm receiveTodo={props.receiveTodo}/>
        </ul>
    )
}