import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Updates from "./pages/Updates";
import App from "./App";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "updates",
    element: <Updates />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);