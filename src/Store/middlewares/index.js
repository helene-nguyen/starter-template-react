import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default applyMiddleware(thunk);

//? examples
// import logger from "./logger";
// import checker from "./checker";
// import thunk from "redux-thunk";
// import { applyMiddleware } from "redux";

// export default applyMiddleware(thunk, checker, logger);

// the checker function
// import { ADD_TODO } from "../actions/todos";
// import { ADD_GOAL } from "../actions/goals";

// function checker(store) {
//   return function(next) {
//     return function(action) {
//       if (
//         action.type === ADD_TODO &&
//         action.todo.name.toLowerCase().includes("bitcoin")
//       ) {
//         return alert("Nope, bad idea!");
//       }

//       if (
//         action.type === ADD_GOAL &&
//         action.goal.name.toLowerCase().includes("bitcoin")
//       ) {
//         return alert("Nope, bad idea!");
//       }

//       // next(action) is basically running the next middleware otherwise, dispatch on the action
//       return next(action);
//     };
//   };
// }

// export default checker;
