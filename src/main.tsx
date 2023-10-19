import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900-italic.css";

import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Recents from "./routes/Recents";
import Favorites from "./routes/Favorites";
import Nearby from "./routes/Nearby";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recents",
        element: <Recents />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/nearby",
        element: <Nearby />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
