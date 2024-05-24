import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { HelmetProvider } from "react-helmet-async";
import FirebaseProvider from "./firebase/Authentication/FirebaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
