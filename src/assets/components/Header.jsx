import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("clicked");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header
        id="header"
        className={`header fixed-top d-flex align-items-center ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center ">
            <img
              src="https://heeranew.netlify.app/assets/img/logo.jpg"
              alt=""
            />
            <span className="d-none d-lg-block">GMM Admin</span>
          </Link>

          <FontAwesomeIcon
            icon={sidebarOpen ? faBarsStaggered : faBars}
            className={`toggle-sidebar-btn ${sidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          />
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Admin
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bx bxs-cog"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bx bx-right-arrow-alt"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
}
