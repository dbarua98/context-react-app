import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
    counter: counterSlice,
  },
  // Redux DevTools enabled by default
  devTools: process.env.NODE_ENV !== "production",
});
