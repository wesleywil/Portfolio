import { configureStore } from "@reduxjs/toolkit";

import projectsReducer from "./projects/projectsSlice";
import tagsReducer from "./tags/tagsSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tags: tagsReducer,
  },
});
