// Export the constants - convention to write it like that
export const ADD_TODO = 'ADD_TODO';
export const DEFAULT_TODO = 'DEFAULT_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';

//~ Action creators
// export const addTodo = (task) => {
//   return {
//     // action creator dispatch
//     type: ADD_TODO,
//     payload: task,
//   };
// };
export const addTodo = (task) => {
  return (dispatch) => { //thanks to the thunk middleware, it can be asynchronous
    dispatch(
      //give it to the reducer
      {
        // action creator dispatch
        type: ADD_TODO,
        payload: task,
      }
    );
  };
};

export const defaultTodo = () => {
  return (dispatch) => {
    dispatch(
      //give it to the reducer
      {
        // action creator dispatch
        type: DEFAULT_TODO,
        
      }
    );
  };
};
