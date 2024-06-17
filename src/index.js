import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./Route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={router} />
  </React.StrictMode>
);
