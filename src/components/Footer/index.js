import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <footer className="footer">
        <div className="footer-container">
          <div className="copyright">
            <Link to="/">
              <img
                src={require("../../assets/images/Logo.png")}
                alt="MoviePorium-Logo"
                className="footer-logo"
              />
            </Link>
            <p className="copy-p">Copyright &copy; 2024</p>
          </div>
         
          <div className="social">
            <a href="https://github.com/pritesh123-dev" target="_blank">
              <GitHub fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/pritesh-kumar-sahoo-590a66230/"
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://www.instagram.com/__pritesh_/" target="_blank">
              <Instagram fontSize="large" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
