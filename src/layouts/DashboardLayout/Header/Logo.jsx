import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo-siumpeg.png";

export default function Logo() {
  return (
    <Link to={"/dashboard"} className="logo d-flex align-items-center">
      <img src={logo} alt="Logo DMS" />
      <span className="d-none d-lg-block fw-medium">DMS Backup</span>
    </Link>
  );
}
