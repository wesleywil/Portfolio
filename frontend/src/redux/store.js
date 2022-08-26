import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./account/accountSlice";
import projectsReducer from "./projects/projectsSlice";
import tagsReducer from "./tags/tagsSlice";
import adminFormReducer from "./adminForm/adminFormSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    projects: projectsReducer,
    tags: tagsReducer,
    adminForm: adminFormReducer,
  },
});
