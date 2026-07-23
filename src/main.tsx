import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ActiveSectionProvider } from "./context/ActiveSectionContext";

import "./index.css";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ActiveSectionProvider>
        <RouterProvider router={router} />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </ActiveSectionProvider>
    </HelmetProvider>
  </React.StrictMode>
);