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

export const createTag = createAsyncThunk("tags/createTag", async (data) => {
  const res = await axios.post(
    "http://localhost:8000/api/projects/tags/",
    data.newTag,
    {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    }
  );
  console.log("Axios Res=> ", res);
  return res.data;
});

export const updateTag = createAsyncThunk("tags/updateTag", async (data) => {
  const res = await axios.put(
    `http://localhost:8000/api/projects/tags/${data.data.id}`,
    data.newTag,
    {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    }
  );
  console.log("Axios Res=> ", res);
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
      })
      .addCase(createTag.pending, (state) => {
        state.status = "preparing the tag creation!";
      })
      .addCase(createTag.fulfilled, (state, action) => {
        state.status = "tag successfully created!";
        state.tags = action.payload;
      })
      .addCase(createTag.rejected, (state, action) => {
        state.status = "An error occurred and the tag was not created!";
        state.error = action.error.message;
      })
      .addCase(updateTag.pending, (state) => {
        state.status = "preparing to update tag!";
      })
      .addCase(updateTag.fulfilled, (state, action) => {
        state.status = "tag successfully updated!";
        state.tags = action.payload;
      })
      .addCase(updateTag.rejected, (state, action) => {
        state.status = "An error occurr and the tag was not updated!";
        state.error = action.error.message;
      });
  },
});

export const allTags = (state) => state.tags.tags;

export const tagById = (state, tagId) =>
  state.tags.tags.find((tag) => tag.id === tagId);

export default tagsSlice.reducer;
