import React from "react";
import Star from "../../icons/Star";
import Fork from "../../icons/Fork";
import Language from "../../icons/Language";

import "./Projectcard.css";

function Projectcard({ item }) {
  return (
    <a href={item.html_url} className="project-card-container">
      <h4 className="project-name"> {item.name}</h4>
      <p className="project-description">{item.description}</p>
      <div className="project-statistics">
        <span className="language">
          <Language />
          {item.language}
        </span>
        <span className="project-stargazers_count">
          <Star />
          {item.stargazers_count}
        </span>
        <span className="project-forks_count">
          <Fork /> {item.forks_count}
        </span>
      </div>
    </a>
  );
}

export default Projectcard;
