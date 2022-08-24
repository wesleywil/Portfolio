import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Admin from "./pages/admin/admin";

// Components
import SideBar from "./components/sidebar/sidebar.component";

// Css
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route exact="true" path="/" element={<Homepage />} />
        <Route exact="true" path="/about" element={<About />} />
        <Route exact="true" path="/projects" element={<Projects />} />
        <Route exact="true" path="/skills" element={<Skills />} />
        <Route exact="true" path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
