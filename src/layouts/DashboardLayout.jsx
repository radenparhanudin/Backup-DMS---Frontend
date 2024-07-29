import React from "react";
import { useStateUserContext } from "../contexts/UserContextProvider";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./DashboardLayout/Sidebar";
import Footer from "./DashboardLayout/Footer";
import Header from "./DashboardLayout/Header";

export default function DashboardLayout() {
  /* Context */
  const { token } = useStateUserContext();
  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
