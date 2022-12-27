import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //     },
    //   ],
  },
]);
