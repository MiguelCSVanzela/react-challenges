import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/5Roteamento/Home.jsx";
import Contato from "./components/5Roteamento/Contato.jsx";
import Sobre from "./components/5Roteamento/Sobre.jsx";
import User from "./components/5Roteamento/User.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Historia from "./components/5Roteamento/user-links/historia.jsx";
import Amigos from "./components/5Roteamento/user-links/amigos.jsx";
import NaoEncontrado from "./components/5Roteamento/NaoEncontrado.jsx";

// Roteamento Basico
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NaoEncontrado />,
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
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/historia",
        element: <Historia />,
      },
      {
        path: "/Amigos",
        element: <Amigos />,
      },
      {
        path: "/busca",
        element: <Busca />,
      },
    ],
  },
]);

//Rotas com parametros

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
