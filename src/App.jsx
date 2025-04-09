import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Home from "./pages/Home";
import Trains from "./pages/Trains";
import Error from "./components/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/trains",
      element: <Trains />,
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
