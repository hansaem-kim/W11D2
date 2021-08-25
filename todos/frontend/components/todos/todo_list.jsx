import React from 'react';
import {TodoListItem} from './todo_list_item';

export default (props) => {
    const todoLis = props.todos.map( todo => {
        return (
            < TodoListItem key={todo.id} todo={todo}/>
        )
    })

    return (
        <ul>
            {todoLis}
        </ul>
    )
}