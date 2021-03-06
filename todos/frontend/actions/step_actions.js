export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

const receiveSteps = (steps) => {
    return {
      type: RECEIVE_STEPS,
      steps,
    };
};

const receiveStep = (step) => {
    return {
        type: RECEIVE_STEP,
        step,
    };
};

const removeStep = (step) => {
    return {
        type: REMOVE_STEP,
        step,
    };
};

export {receiveSteps, receiveStep, removeStep };
