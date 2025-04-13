import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Home from "./pages/Home";
import Trains from "./pages/Trains";
import Error from "./components/Error";
import AppLayout from "./components/AppLayout";
import MyTrain from "./pages/MyTrain";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "all-trains", element: <Trains /> },
        { path: "my-train", element: <MyTrain /> },
      ],
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
