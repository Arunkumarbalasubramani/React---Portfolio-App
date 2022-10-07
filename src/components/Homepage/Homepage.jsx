import React from "react";
import "./Homepage.scss";
import ProfilePic from "../../assets/Arunkumarpic.JPG";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-scroll";
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
          {/* <button className="group action-buttons ">
            <a href="/Arunkumar-B-resume.pdf" className="href" download={true}>
              {" "}
              Resume
            </a>
            <span className="group-hover:rotate-90 duration-300 ">
              <ImArrowRight2 className="arrow-icon" size={20} />
            </span>
          </button> */}
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group action-buttons hover:scale-105 font-bold duration-300 text-white "
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <ImArrowRight2 className="arrow-icon" size={20} />
            </span>
          </Link>
        </div>
      </div>
      <div className="home-image-section">
        <img classname="my-profile" src={ProfilePic} alt="arunkumar-profile" />
      </div>
    </div>
  );
};

export default Homepage;
