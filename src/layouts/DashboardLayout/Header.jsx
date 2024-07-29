import React from "react";

import Logo from "./Header/Logo";
import UserInfo from "./Header/UserInfo";

export default function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Logo />
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <UserInfo />
        </ul>
      </nav>
    </header>
  );
}
