import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import startupsReducer from "./features/startupsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    startups: startupsReducer,
  },
});

