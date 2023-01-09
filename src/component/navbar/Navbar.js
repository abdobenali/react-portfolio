import React from "react";
import "./Navbar.css";
import moon from "./moon.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <BrowserRouter className="router-container">
      <div className="navbar-container">
        {screenWidth >= 921 && (
          <div className="navbar-sous-container">
            <h3 className="navbar-logo">
              <Link
                to="#home"
                style={{
                  textDecoration: "none",
                  color: "rgb(85, 91, 97)",
                  fontSize: "25px",
                  lineHeight: "24px",
                }}
              >
                Abdelilah Benali
              </Link>
            </h3>
            <ul className="navbar-list">
              <li className="item">
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
              <li className="item">
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
              <li className="item">
                <Link
                  to="#contact"
                  style={{
                    textDecoration: "none",
                    color: "rgb(85, 91, 97)",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  Contact
                </Link>
              </li>
              <li className="item">
                <img className="moon-img" src={moon} alt="moonimg" />
              </li>
            </ul>
          </div>
        )}
        {screenWidth < 921 && (
          <div className="mobile-navbar">
            <h3 className="navbar-logo">
              <Link
                to="#home"
                style={{
                  textDecoration: "none",
                  color: "rgb(85, 91, 97)",
                  fontSize: "25px",
                  lineHeight: "24px",
                }}
              >
                Abdelilah Benali
              </Link>
            </h3>
            <button
              className="menu-Bttn"
              onClick={() => {
                setToggleMenu(!toggleMenu);
                console.log(toggleMenu);
              }}
            >
              {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        )}
        {toggleMenu && screenWidth < 921 && (
          <div className="navbar-sous-container">
            <ul className="navbar-list">
              <li className="item">
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
              <li className="item">
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
              <li className="item">
                <Link
                  to="#contact"
                  style={{
                    textDecoration: "none",
                    color: "rgb(85, 91, 97)",
                    fontSize: "25px",
                    lineHeight: "24px",
                  }}
                >
                  Contact
                </Link>
              </li>
              <li className="item">
                <img className="moon-img" src={moon} alt="moonimg" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
