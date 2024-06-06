import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Correct import path

export const store = configureStore({
  reducer: {
    user: userReducer, // Key should be 'user'
  },
});
