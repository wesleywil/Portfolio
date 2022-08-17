import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";

import "./App.css";
import SideBar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route exact="true" path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
