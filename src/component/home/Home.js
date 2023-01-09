import React from "react";
import "./Home.css";
import CodeType from "./programming.svg";
import imOfme from "../about/abdelilahBack.png";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-sous-container">
        <div className="home-1">
          <h3 className="home-paragraph">
            Hi, I'am Abdelilah Benali
            <br />
            Full Stack Developer Based in Morocco
            <br />
          </h3>
          <button className="home-button">Hire me</button>
        </div>
        <div className="home-image">
          <img className="image" src={imOfme} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;
