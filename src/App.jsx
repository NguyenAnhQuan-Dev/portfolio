import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/about",
    element: <About />,
  },
  {
    id: 3,
    path: "/experiences",
    element: <Experiences />,
  },
  {
    id: 4,
    path: "/project",
    element: <Project />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
