import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/costs_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container-header">
      <div className="container">
        <Link to="/">
          <img className="img-Logo" src={Logo} alt="Logo Costs" />
        </Link>
        <nav className="wrapper-navBar">
          <FaBars className="menuBars-icon" onClick={() => setMenu(!menu)} />
          <ul
            className={
              menu
                ? windowWidth > 760
                  ? "menuBars"
                  : "menuBars-active"
                : "menuBars"
            }
          >
            <FaTimes
              className="menuTime-close"
              onClick={() => setMenu(!menu)}
            />
            <li className="navBar-link">
              <Link to="/">Home </Link>
            </li>
            <li className="navBar-link">
              <Link to="/newproject">Projetos </Link>
            </li>
            <li className="navBar-link">
              <Link to="/contact">Empresa </Link>
            </li>
            <li className="navBar-link">
              <Link to="/company">Contato </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
