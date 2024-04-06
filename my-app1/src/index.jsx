import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./common/error-page";
import Router, {
  action as rootAction,
  loader as rootLoader,
} from "./common/router";
import A, { actionA } from "./components/a";
import Contact, { loader as contactLoader } from "./components/contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contact/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
  {
    path: "/a",
    element: <A />,
    action: actionA,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
