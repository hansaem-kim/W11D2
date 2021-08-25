import React from 'react';

export const TodoListItem = (props) => {
    let buttonName;
    function toggleStatus(props){
        if (!props.todo.done){
            props.todo.done = true;
            props.receiveTodo(props.todo);
            buttonName = <p>Done</p>
        } else {
            props.todo.done = false;
            props.receiveTodo(props.todo);
            buttonName = <p>Incomplete</p>
        }
    }
    return (
            <div>
                <li key={props.todo.id}>{props.todo.title}</li>
                <button onClick={()=>props.removeTodo(props.todo)}> Delete </button>
                <button onClick={()=>toggleStatus(props)}> Done </button>
            </div>
        )
}