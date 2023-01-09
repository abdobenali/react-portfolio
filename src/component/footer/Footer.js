import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="footer-container">
      <BrowserRouter>
        <div className="footer-sous-container">
          <div className="footer-left-container">
            <h3>Abdelilah Benali</h3>
            <p>This Website is made with ❤️</p>
            <p>© Copyrights 2023. All Rights Reserved.</p>
          </div>
          <div className="footer-link-container">
            <h3>Links</h3>
            <ul className="footer-links-list">
              <li>
                <Link
                  to="#about"
                  style={{
                    textDecoration: "none",
                    color: "rgb(85, 91, 97)",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#projects"
                  style={{
                    textDecoration: "none",
                    color: "rgb(85, 91, 97)",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  style={{
                    textDecoration: "none",
                    color: "rgb(85, 91, 97)",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social-network-container">
            <h3>Stay Connected</h3>
            <ul className="footer-social-network-list">
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <AiFillGithub />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillFacebook />
              </li>
            </ul>
            <p>Want to Contribute?</p>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Footer;
