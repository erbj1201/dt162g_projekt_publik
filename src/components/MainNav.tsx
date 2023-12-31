// MainNav.tsx
//Import
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Component
const MainNav: React.FC = () => {
  //State for menu open/closed
  const [isMenuOpen, setMenuOpen] = useState(false);
  //Show/hide navbar
  const toggleMenu = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar d-flex flex-row-reverse">
        {/* hamburger menu icon with eventhandler */}
        <button
          className="navbar-toggler navbar-dark text-white align-self-end m-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ToggleNavBar"
          aria-controls="ToggleNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        {/*Navbar with links*/}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="ToggleNavBar"
        >
          <ul className="navbar-nav">
            <li className="nav-item d-flex justify-content-end">
              <NavLink
                className="nav-link text-white px-4 m-1"
                to="/"
                onClick={toggleMenu}
              >
                Start
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <NavLink
                className="nav-link text-white px-4 m-1"
                to="/menu"
                onClick={toggleMenu}
              >
                Meny
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <NavLink
                className="nav-link text-white px-4 m-1"
                to="/contact"
                onClick={toggleMenu}
              >
                Kontakta oss
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
