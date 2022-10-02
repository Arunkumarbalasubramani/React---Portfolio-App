import React from "react";
import "./portfolio.scss";
import moviesApp from "../../assets/portfolio/movieapp.jpg";
import marvelMoviesApp from "../../assets/portfolio/marvelmoviesApp.jpeg";
import calculator from "../../assets/portfolio/calculator.jpeg";
import tipCalculator from "../../assets/portfolio/tip-calc.png";
import staticWebsite from "../../assets/portfolio/static-web.jpg";
import landingPage from "../../assets/portfolio/Bootstrap page.png";
import Card from "@mui/material/Card";

import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Portfolio = () => {
  const portfolioLink = [
    {
      src: moviesApp,
      name: "Movie-app",
      github: "https://github.com/Arunkumarbalasubramani/My-first-react-app",
      netlify: "https://movies-app-practise.netlify.app",
    },
    {
      src: marvelMoviesApp,
      name: "marvel-movie-app",
      github: "",
      netlify: "",
    },
    {
      src: calculator,
      name: "calculator-app",
      github: "https://github.com/Arunkumarbalasubramani/CalculatorProject-DOM",
      netlify: "https://arunkumar-b-calculator-dom.netlify.app",
    },
    {
      src: tipCalculator,
      name: "tipCalculator-app",
      github: "https://github.com/Arunkumarbalasubramani/TipCalculator-DOM",
      netlify: "https://tipcalculator-arunb.netlify.app",
    },
    {
      src: landingPage,
      name: "staticWebsite-app",
      github:
        "https://github.com/Arunkumarbalasubramani/Landing_Page_using_Bootstrap",
      netlify: "https://landingpage-usingbootstrap-arunkumarbtask.netlify.app",
    },
    {
      src: staticWebsite,
      name: "staticWebsite-app",
      github: "https://github.com/Arunkumarbalasubramani/Laud-Page-",
      netlify: "https://arunkumar-b-laudpage-task.netlify.app",
    },
  ];
  return (
    <div className="portfolioContainer" name="portfolio">
      <div className="portfolio-heading-div">
        <h3 className="portfolio-heading">Portfolio</h3>
        <p className="portfolio-helper"> Check out my works Here</p>
      </div>
      <div className="portfolio-card-div">
        {portfolioLink.map(({ src, name, github, netlify }, index) => (
          <div
            className="portfolio-card shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            key={index}
          >
            <div className="portfolio-thumbnail-div">
              <img
                className="portfolio-thumbnail duration-200 hover:scale-105"
                src={src}
                alt={`${name}-portfolio`}
              />
            </div>
            <div className="portfolio-actions">
              <button className="duration-150 hover:scale-150">
                <a href={github} target="_blank" className="action-btn">
                  <FaGithub size={30} />
                </a>
              </button>
              <button className="duration-150 hover:scale-150">
                <a href={netlify} target="_blank" className="action-btn">
                  <SiNetlify size={30} />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
