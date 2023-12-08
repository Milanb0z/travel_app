import React from "react";

import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Home, NotFound, PlaceDetails } from "pages";
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
        element: <PlaceDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <Error>
      <RouterProvider router={router} />
    </Error>
  );
};

export default App;
