import React, { useState, useEffect } from "react";
import Projectcard from "./Projectcard";
import "./Projects.css";

function Projects() {
  const [data, setData] = useState();
  {
    /* "id":for keys "name": "description": "language": "stargazers_count":
      "forks_count": */
  }
  const getData = async () => {
    await fetch("https://api.github.com/users/abdobenali/repos")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setData(arr);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return (
    <div className="project-container" id="projects">
      <div className="project-sous-container">
        <h2 className="project-title">Projects</h2>
        <div className="project-sous-container1">
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} className="project-card">
                  <Projectcard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
