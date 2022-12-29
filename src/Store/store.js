import rootReducer from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';
import middleware from './middlewares/index.js';

// Error if no middleware, we have to help redux to work asynchronous
// Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.

// export const store = createStore(
//     rootReducer,
//     {},
//     applyMiddleware(thunk)
// );

//recent way to configure store
export const store = configureStore(
  {
    reducer: rootReducer,
  },
  middleware
);
