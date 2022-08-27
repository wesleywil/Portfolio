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

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (data) => {
    console.log("DATA IS ", data);
    const res = await axios.post(
      `http://localhost:8000/api/projects/projects/`,
      data,
      {
        headers: { Authorization: `token ${localStorage.getItem("token")}` },
      }
    );
    console.log("AXIOS RES=> ", res);
    return res.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async (data) => {
    const res = await axios.put(
      `http://localhost:8000/api/projects/projects/${data.id}/`,
      data,
      {
        headers: { Authorization: `token ${localStorage.getItem("token")}` },
      }
    );
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
      })
      .addCase(createProject.pending, (state) => {
        state.status = "preparing the project creation!";
      })
      .addCase(createProject.fulfilled, (state) => {
        state.status = "project successfully created!";
      })
      .addCase(createProject.rejected, (state, action) => {
        state.status = "An error occurr and the project was not created!";
        state.error = action.error.message;
      })
      .addCase(updateProject.pending, (state) => {
        state.status = "preparing to update project!";
      })
      .addCase(updateProject.fulfilled, (state) => {
        state.status = "project successfully updated!";
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.status = "An error occurr and the project was not updated!";
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
