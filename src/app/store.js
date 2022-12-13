import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rentalReducer from '../features/rentalItems/rentalItemsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rentalItem: rentalReducer
  },
});
