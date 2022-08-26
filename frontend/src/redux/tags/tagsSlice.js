import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tags: [],
  status: "idle",
  error: null,
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const res = await axios.get("http://localhost:8000/api/projects/tags/");
  console.log("RESULT TAGS =>", res);
  return res.data;
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "succeeded!";
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allTags = (state) => state.tags.tags;

export const tagById = (state, tagId) =>
  state.tags.tags.find((tag) => tag.id === tagId);

export default tagsSlice.reducer;
