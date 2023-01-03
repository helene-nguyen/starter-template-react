//~ Import modules
import { combineReducers } from 'redux';
import todoReducer from './todo.reducer.js';
import testSliceReducer from './test.slice.js';

const reducer = combineReducers({
  task: todoReducer, //!
  slice: testSliceReducer,
});

export default reducer;
