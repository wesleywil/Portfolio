import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import { fetchProjects } from "./redux/projects/projectsSlice";
import { fetchTags } from "./redux/tags/tagsSlice";

store.dispatch(fetchProjects());
store.dispatch(fetchTags());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
