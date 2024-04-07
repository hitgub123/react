import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./common/error-page";
import Router, {
  action as rootAction,
  loader as rootLoader,
} from "./common/router";
import A, { actionA } from "./components/a";
import B from "./components/b";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./components/contact";
import EditContact, { action as editAction } from "./components/edit";
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
        //common errorElement for children routes
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <A /> },
          {
            path: "contact/:contactId",
            element: <Contact />,
            // errorElement: <ErrorPage />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contact/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contact/:contactId/destroy",
            element: <A />,
            // errorElement: <ErrorPage />,
            action: actionA,
          },
        ],
      },
    ],
  },
  {
    path: "/b",
    element: <B />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
