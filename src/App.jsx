import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Home from "./pages/Home";
import Trains from "./pages/Trains";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trains",
    element: <Trains />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
