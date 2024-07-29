import React from "react";
import { Link } from "react-router-dom";

export default function PageTitle() {
  return (
    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
  );
}
