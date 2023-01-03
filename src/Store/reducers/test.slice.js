import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: ['Never Give Up'],
  done: true,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    toggleDone: (state) => {
      state.done = !state.done;
    },
    addTaskSlice: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

// redux toolkit automatically generate actions
export const { toggleDone, addTaskSlice } = taskSlice.actions;

export default taskSlice.reducer;
