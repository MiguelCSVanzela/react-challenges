import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import App from "./App.jsx";
import NotFound from "./components/routing/NotFound.jsx";
import Home from "./components/routing/Home.jsx";
import Contact from "./components/routing/Contact.jsx";
import About from "./components/routing/About.jsx";
import User from "./components/routing/User.jsx";
import History from "./components/routing/user-links/History.jsx";
import Friends from "./components/routing/user-links/Friends.jsx";
import Search from "./components/routing/Search.jsx";

import "./index.css";

// Routing
const isAuth = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        // Authentication
        element: isAuth ? <About /> : <Navigate to="/" />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/historia",
        element: <History />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/search",
        element: <Search />,
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
