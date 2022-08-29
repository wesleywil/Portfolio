import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  title: "Form",
  hidden: true,
  isproject: true,
};

export const adminFormSlice = createSlice({
  name: "adminForm",
  initialState,
  reducers: {
    close: (state) => {
      state.data = null;
      state.title = "Form";
      state.hidden = true;
    },
    create: (state, action) => {
      state.data = null;
      state.title = "Create";
      state.hidden = false;
      state.isproject = action.payload;
    },
    update: (state, action) => {
      state.data = action.payload.item;
      state.isproject = action.payload.isProject;
      state.title = "Update";
      state.hidden = false;
    },
  },
});

export const { close, create, update } = adminFormSlice.actions;

export default adminFormSlice.reducer;
