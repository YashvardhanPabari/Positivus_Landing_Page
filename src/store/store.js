import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../feature/messageSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
