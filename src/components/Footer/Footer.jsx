import React from "react";
import { FaLinkedin, FaGithub, FaPortrait } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="container">
        <ul className="wrapper-footer">
          <li className="footer-link">
            <FaLinkedin className="img-link" />
          </li>
          <li className="footer-link">
            <FaGithub className="img-link" />
          </li>
          <li className="footer-link">
            <FaPortrait className="img-link" />
          </li>
        </ul>
        <p className="copyWrite">
          <span>Costs</span> &copy; 2023
        </p>
      </footer>
    </div>
  );
};

export default Footer;
