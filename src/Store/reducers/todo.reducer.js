//~ Import variables
import { ADD_TODO, DEFAULT_TODO } from '../actions/todo.actions.js';

//~ Define initial state
const initialState = { value: 'Default value' };
//value here, you have to look at the reducer function

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, value: action.payload.value };
    case DEFAULT_TODO:
      return initialState;
    default:
      return state;
  }
};

export default todoReducer;
