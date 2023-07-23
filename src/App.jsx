import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Template from "./pages/Template/Template";
import Experience from "./pages/Experience/Experience";
import ExperienceDetail from "./pages/Experience/ExperienceDetail";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Template />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/experience", element: <Experience /> },
        { path: "/experience/:id", element: <ExperienceDetail /> },
      ],
    },
  ]);
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {cloneElement(element, { key: location })}
      </AnimatePresence>
    </>
  );
}

export default App;
