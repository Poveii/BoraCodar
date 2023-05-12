import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { Project01 } from "./pages/project01/Project01";
import { Project02 } from "./pages/project02/Project02";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project01",
    element: <Project01 />,
  },
  {
    path: "/project02",
    element: <Project02 />,
  }
]);
