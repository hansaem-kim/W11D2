import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions.js"

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

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_STEPS:
        const newObject = {}; 
        action.steps.forEach( step => {
          // debugger
          newObject[step.id] = step;
        });
        return newObject;

      case RECEIVE_STEP:
        newState[action.step.id] = action.step;
        return newState;

      case REMOVE_STEP:
        delete newState[action.step.id];
        return newState;
        
      default:
        return state;
    }
};
  
export default stepsReducer;