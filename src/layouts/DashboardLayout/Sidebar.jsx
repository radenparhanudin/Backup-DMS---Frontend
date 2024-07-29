import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toCamelCase } from "../../helpers";
import viewerDms from "./Sidebar/viewerDms";

export default function Sidebar() {
  /* Define variable */
  const { pathname } = useLocation();
  let mySidebar = {
    viewerDms,
  };

  /* Context */
  /* State */
  /* useEffect */
  useEffect(() => {
    document
      .querySelector(".toggle-sidebar-btn")
      .addEventListener("click", function () {
        document.querySelector("body").classList.toggle("toggle-sidebar");
      });
  }, []);

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {mySidebar[toCamelCase("viewer-dms")] &&
          mySidebar[toCamelCase("viewer-dms")].map((sidebar, index) => {
            return (
              <li key={index} className={sidebar.type}>
                {sidebar.type == "nav-heading" ? (
                  sidebar.label
                ) : (
                  <Link
                    to={sidebar.to}
                    className={`nav-link ${pathname != sidebar.to && "collapsed"}`}
                  >
                    <i className={sidebar.icon} />
                    <span>{sidebar.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
