import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "idle",
};

const messageStatusSlice = createSlice({
  name: "messageStatus",
  initialState,
  reducers: {
    created: (state) => {
      state.message = "Successfully Created!";
    },
    updated: (state) => {
      state.message = "Successfully Updated!";
    },
    done: (state) => {
      state.message = "idle";
    },
  },
});

export const { created, updated, done } = messageStatusSlice.actions;

export default messageStatusSlice.reducer;
