import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { Project01 } from "./pages/project01/Project01";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "project01",
        element: <Project01 />,
      },
    ],
  },
]);
