import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import App from "./App";
import Updates from "./pages/Updates/Updates";
import Faq from "./pages/Faq/Faq"
import Contact from "./pages/Contact/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "updates",
    element: <Updates />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);