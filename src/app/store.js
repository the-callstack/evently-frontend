import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rentalReducer from '../features/rentalItems/rentalItemsSlice';
import categoryReducer from '../features/categories/categorySlice';
import userReducer from '../features/auth/authSlice'
import eventCatReducer from '../features/EventCat/EventCatSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rentalItem: rentalReducer,
    category: categoryReducer,
    user:userReducer,
    eventCat: eventCatReducer
}

});
