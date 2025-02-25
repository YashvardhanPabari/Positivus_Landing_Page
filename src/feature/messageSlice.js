import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.message = action.payload.message;
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
