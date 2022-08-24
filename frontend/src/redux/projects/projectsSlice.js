import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const res = await axios.get("http://localhost:8000/api/projects/projects/");
    console.log("RESULT PROEJCTS => ", res);
    return res.data;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded!";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allProjects = (state) => state.projects.projects;

export const personalProjects = (state) =>
  state.projects.projects.filter((project) => project.personal === true);

export const notPersonalProjects = (state) =>
  state.projects.projects.filter((project) => project.personal === false);

export const projectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);

export default projectsSlice.reducer;
