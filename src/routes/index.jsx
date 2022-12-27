import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeContainer from "../pages/HomeContainer";
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
    ],
  },
]);
