//~ Import modules
import { combineReducers } from 'redux';
import todoReducer from './todo.reducer.js';

const reducer = combineReducers({
  task: todoReducer, //!
});

export default reducer;
