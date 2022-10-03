import React from "react";
import "./Skills.scss";
import CSS from "../../assets/css.png";
import HTML from "../../assets/html.png";
import JS from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
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
      style: "shadow-orange-500",
    },
    {
      tech: CSS,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      tech: JS,
      name: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      tech: reactImage,
      name: "React",
      style: "shadow-blue-600",
    },
    {
      tech: NodeJS,
      name: "Node JS",
      style: "shadow-green-600",
    },
    {
      tech: tailwind,
      name: "TailWind CSS",
      style: "shadow-sky-400",
    },
    {
      tech: git,
      name: "Git",
      style: "shadow-orange-400",
    },
    {
      tech: github,
      name: "GitHub",
      style: "shadow-gray-400",
    },
    {
      tech: heroku,
      name: "Heroku Deploy",
      style: "shadow-indigo-400",
    },
    {
      tech: netlify,
      name: "Netlify Deploy",
      style: "shadow-cyan-400",
    },
    {
      tech: sass,
      name: "SASS",
      style: "shadow-pink-400",
    },
    {
      tech: mongodb,
      name: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      tech: vscode,
      name: "VS Code",
      style: "shadow-blue-400",
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
      <div className="skills-card-div">
        {skills.map(({ tech, name, style }, index) => (
          <div
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            key={index}
          >
            <img src={tech} alt="" srcset="" className="skillImage" />
            <p className="skillName">{name}</p>
          </div>
        ))}
      </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"></div>
    </div>
  );
};

export default Skills;
