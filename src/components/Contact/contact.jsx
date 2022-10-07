import React from "react";
import "./contact.scss";
import { ImLocation } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { TbLanguageHiragana } from "react-icons/tb";

const Contact = () => {
  const contactLinks = [
    {
      src: <ImLocation />,
      title: "Location",
      value: "Chennai, India",
    },
    {
      src: <MdOutlineEmail />,
      title: "Email ID",
      value: "arunkumar.vbs.b@gmail.com",
    },
    {
      src: <FaUserGraduate />,
      title: "Education",
      value: "B.E., Mechanical Engineering",
    },
    {
      src: <AiOutlineMobile />,
      title: "Mobile No",
      value: "+91 96593 15121",
    },
    {
      src: <TbLanguageHiragana />,
      title: "Languages",
      value: "Tamil, English",
    },
  ];
  return (
    <div className="contact-container" name="contact">
      <div className="contact-heading-div">
        <h3 className="contact-heading">Contact</h3>
        <p className="contact-helper"> </p>
      </div>
      <div className="contact-page">
        <div className="left-contactpage">
          <h4> Contact me Here</h4>
          <div className="contact-info">
            {contactLinks.map(({ src, title, value }, index) => (
              <div className="contact-item" key={index}>
                <div className="icon">
                  {src} <span> {title} : </span>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-contactpage">
          <form
            action="https://getform.io/f/6a323b78-0f56-40a9-bdd5-b601e5b2fb80"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="contact-input focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="contact-input focus:outline-none"
              name="email"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="contact-input focus:outline-none"
            ></textarea>
            <button className="contact-btn hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
