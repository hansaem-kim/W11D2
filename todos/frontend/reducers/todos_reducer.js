import {receiveTodos, receiveTodo} from "../actions/todo_action.js"

const todosReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
};
  
export default todosReducer;