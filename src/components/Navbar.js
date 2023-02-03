import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);

  const showMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
          </Link>

          <div className="menu-icon">
            <i
              className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={showMenu}
            />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Головна
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/menu"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Меню
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/drinks"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Напої
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Про нас
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
