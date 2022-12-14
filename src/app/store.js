import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import eventCatReducer from '../features/EventCat/EventCatSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    eventCat: eventCatReducer
  },
});
