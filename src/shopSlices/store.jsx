import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: basketReducer,
  },
});
