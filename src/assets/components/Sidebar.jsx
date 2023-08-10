import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      <aside id="sidebar" className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeSidebar}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Departments" className="nav-link" onClick={closeSidebar}>
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Facilities" className="nav-link" onClick={closeSidebar}>
              Facilities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Doctors" className="nav-link" onClick={closeSidebar}>
              Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Gallery" className="nav-link" onClick={closeSidebar}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Recent-news" className="nav-link" onClick={closeSidebar}>
              Recent News
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
