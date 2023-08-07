import React from "react";
import "../css/Sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <>
      <aside id="sidebar" className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
