import React from "react";
import { Link } from "react-router-dom";

export default function PageTitle() {
  return (
    <div className="pagetitle">
      <h1>Unit Organisasi</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/dashboard"}>Reference</Link>
          </li>
          <li className="breadcrumb-item active">Unit Organisasi</li>
        </ol>
      </nav>
    </div>
  );
}
