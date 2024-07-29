import React from "react";
import { useStateUserContext } from "../../../contexts/UserContextProvider";
import axiosClient from "../../../axiosClient";
export default function UserInfo() {
  /* Context */
  const { user } = useStateUserContext();

  /* Define Function */
  const doLogout = (event) => {
    event.preventDefault();
    axiosClient.post("/authentication/logout").then((response) => {
      window.localStorage.clear();
      window.location.href = "/";
    });
  };
  return (
    <>
      <li className="nav-item dropdown pe-3">
        <a
          className="nav-link nav-profile d-flex align-items-center pe-0"
          href="#"
          data-bs-toggle="dropdown"
        >
          <img src={user.avatar} alt="Profile" className="rounded-circle" />
          <span className="d-none d-md-block dropdown-toggle ps-2 text-uppercase">
            {user.name}
          </span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>{user.name}</h6>
            <span>{user.username}</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="https://wa.me/6282342788059"
              target="_blank"
            >
              <i className="bi bi-question-circle" />
              <span>Bantuan?</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="#"
              onClick={(e) => {
                doLogout(e);
              }}
            >
              <i className="bi bi-box-arrow-right" />
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}
