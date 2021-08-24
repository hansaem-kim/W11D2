import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from "../actions/todo_actions.js"

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_TODOS:
        const newObject = {}; 
        action.todos.forEach( todo => {
          // debugger
          newObject[todo.id] = todo;
        });
        return newObject;

      case RECEIVE_TODO:
        newState[action.todo.id] = action.todo;
        return newState;

      case REMOVE_TODO:
        delete newState[action.todo.id];
        return newState;
        
      default:
        return state;
    }
};
  
export default todosReducer;