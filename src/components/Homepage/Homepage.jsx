import React from "react";
import "./Homepage.scss";
import ProfilePic from "../../assets/Arunkumarpic.JPG";
import { ImArrowRight2 } from "react-icons/im";
import { SocialLinks } from "../SocialLinks/SocialLinks";

const Homepage = () => {
  return (
    <div className="home-container " name="home">
      <div className="home-brief ">
        <h2 className="role"> I'm a Full Stack Developer</h2>
        <p className="home-brief-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          consequuntur, animi at ipsum aspernatur debitis maxime, obcaecati
          accusamus rerum, eveniet hic laudantium! Nam voluptatem ea suscipit
          praesentium iusto repellendus molestias nobis provident aliquid
          facere? Ratione esse aperiam vel deserunt sequi, dolorum maiores quos?
          Autem necessitatibus hic eveniet dolorem itaque corporis.
        </p>
        <div className="home-actions">
          <button className="group action-buttons ">
            Resume
            <span className="group-hover:rotate-90 duration-300 ">
              <ImArrowRight2 className="arrow-icon" size={20} />
            </span>
          </button>
          <button className="group action-buttons ">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <ImArrowRight2 className="arrow-icon" size={20} />
            </span>
          </button>
        </div>
      </div>
      <div className="home-image-section">
        <img classname="my-profile" src={ProfilePic} alt="arunkumar-profile" />
      </div>
    </div>
  );
};

export default Homepage;
