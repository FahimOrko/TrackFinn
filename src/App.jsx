import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Home from "./pages/Home";
import Trains from "./pages/Trains";
import Error from "./components/Error";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "trains", element: <Trains /> },
    ],
  },
]);

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
