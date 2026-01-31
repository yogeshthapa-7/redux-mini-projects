import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import boxReducer from "./boxSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    box: boxReducer,
  },
});
