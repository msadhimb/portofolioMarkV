import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Template from "./pages/Template/Template";
import Experience from "./pages/Experience/Experience";
import Space from "./components/Space/Space";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
          <Route path="/projects" element={<Space />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
