import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "../src/styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./shared/Root/Root.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { About } from "./pages/About/About.tsx";
import { StoriesPage } from "./pages/StoriesPage/StoriesPage.tsx";
import { Contacts } from "./pages/Contacts/Contacts.tsx";
import { MobileHospital } from "./pages/MobileHospital/MobileHospital.tsx";
import { ServicePage } from "./pages/ServicePage/ServicePage.tsx";
import { Donation } from "./pages/Donation/Donation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <About /> },
      { path: "/stories", element: <StoriesPage /> },
      { path: "/hospital", element: <MobileHospital /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/donation", element: <Donation /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
