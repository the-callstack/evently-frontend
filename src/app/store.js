import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import rentalReducer from "../features/rentalItems/rentalItemsSlice";
import categoryReducer from "../features/categories/categorySlice";
import userReducer from "../features/auth/authSlice";
import eventCatReducer from "../features/EventCat/EventCatSlice";
import storesSlice from "../features/stores/storesSlice";
import saleReducer from "../features/saleItems/saleItemsSlice";
import eventReducer from "../features/events/EventSlice";
import cartReducer from "../features/Cart/CartSlice";
import packageReducer from "../features/packageSlice/PackageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rentalItems: rentalReducer,
    saleItems: saleReducer,
    category: categoryReducer,
    user: userReducer,
    eventCat: eventCatReducer,
    stores: storesSlice,
    events: eventReducer,
    cart: cartReducer,
    eventPackage: packageReducer,
  },
});
