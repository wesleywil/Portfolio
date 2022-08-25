import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  message: "no token",
};

export const loginUser = createAsyncThunk(
  "accounts/loginUser",
  async (user) => {
    const res = await axios.post(
      "http://localhost:8000/api/account/login/",
      user
    );
    return res.data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.message = "awaiting for response...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = "logged successfully!";
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.message = "failed to get credentials";
        state.message = action.error.message;
      });
  },
});

export const getToken = () => localStorage.getItem("token");

export default accountSlice.reducer;
