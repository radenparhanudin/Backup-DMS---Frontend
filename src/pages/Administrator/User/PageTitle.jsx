import React from "react";
import { Link } from "react-router-dom";

export default function PageTitle() {
  return (
    <div className="pagetitle">
      <h1>User</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/dashboard"}>Administrator</Link>
          </li>
          <li className="breadcrumb-item active">User</li>
        </ol>
      </nav>
    </div>
  );
}
