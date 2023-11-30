import React from "react";

import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, NotFound, PlaceDetails } from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/place",
    element: <PlaceDetails />,
  },
  {
    path: "**",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
