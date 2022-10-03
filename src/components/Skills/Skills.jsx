import React from "react";
import "./Skills.scss";
import CSS from "../../assets/css.png";
import HTML from "../../assets/html.png";
import JS from "../../assets/javascript.png";
import react from "../../assets/react.png";
import NodeJS from "../../assets/nodejs.svg";
import tailwind from "../../assets/tailwind.png";
import git from "../../assets/git.svg";
import github from "../../assets/github.png";
import heroku from "../../assets/heroku.svg";
import mongodb from "../../assets/mongodb.svg";
import sass from "../../assets/sass.svg";
import vscode from "../../assets/vscode.svg";
import netlify from "../../assets/netlify.svg";

const Skills = () => {
  const skills = [
    {
      tech: HTML,
      name: "HTML",
    },
    {
      tech: CSS,
      name: "CSS",
    },
    {
      tech: JS,
      name: "Javascript",
    },
    {
      tech: react,
      name: "React",
    },
    {
      tech: NodeJS,
      name: "Node JS",
    },
    {
      tech: tailwind,
      name: "TailWind CSS",
    },
    {
      tech: git,
      name: "Git",
    },
    {
      tech: github,
      name: "Github",
    },
    {
      tech: heroku,
      name: "Heroku Deploy",
    },
    {
      tech: netlify,
      name: "Netlify Deploy",
    },
    {
      tech: sass,
      name: "SASS",
    },
    {
      tech: mongodb,
      name: "Mongo DB",
    },
    {
      tech: vscode,
      name: "VS Code",
    },
  ];
  return (
    <div className="skills-container" name="skills">
      <div className="skills-heading-div">
        <h3 className="skills-heading">Skills</h3>
        <p className="skills-helper">
          {" "}
          These are the technologies I've worked with{" "}
        </p>
      </div>
    </div>
  );
};

export default Skills;
