import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/5Roteamento/Home.jsx";
import Contato from "./components/5Roteamento/Contato.jsx";
import Sobre from "./components/5Roteamento/Sobre.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Roteamento Basico
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
