import React from "react";

import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, NotFound, PlaceDetails } from "pages";
import Dashboard from "pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/place/:id",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
