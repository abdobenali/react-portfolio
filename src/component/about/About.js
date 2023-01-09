import React from "react";
import "./About.css";
import abdelilahIMG from "./abdelilahBack.png";
import watchSVG from "./undraw_in_no_time_-6-igu.svg";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-sous-container">
        <div className="container1">
          <div className="container1-2">
            <h2 className="container1-2-title">More About me</h2>
            <p className="container1-2-paragraph">
              I’ve spent the past 4+ years studying across different modules of
              back-end front-end development.
              <br />
              <br />
              These days my time is spent researching,prototyping, and coding.
              <br />
              <br />
              Out of the office you’ll find me dreaming of soccer all the time
            </p>
          </div>
        </div>
        <div className="container2">
          <div className="container2-1">
            <h2 className="container2-1-title">My skills</h2>
            <ul className="list1">
              <li className="li">HTML 5</li>
              <li className="li">CSS 3</li>
              <li className="li">React Js</li>
              <li className="li">JAVA JEE (Spring)</li>
            </ul>
            <ul className="list2">
              <li className="li">JavaScript</li>
              <li className="li">Java</li>
              <li className="li">Script Shell</li>
              <li className="li">Python</li>
            </ul>
            <ul className="list3">
              <li className="li">UML</li>
              <li className="li">Design Pattern</li>
            </ul>
            <ul className="list4">
              <li className="li">MySQL</li>
              <li className="li">Mongodb</li>
            </ul>
          </div>
          <div className="percentage-container">
            <img src={watchSVG} className="percentage-img" alt="imgBack" />
          </div>
        </div>

        <div className="container3">
          <p className="container3-paragraph">
            Get in touch to discuss, or you can call me at this number
            +212606930829. If you have any questions or comments feel free to
            email me at abdobenali.dev@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
