import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes";

import "./assets/scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

import "bootstrap";

import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition:Slide
    />
  </UserContextProvider>,
);
