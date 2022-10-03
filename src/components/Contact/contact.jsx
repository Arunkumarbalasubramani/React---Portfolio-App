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
      src: ImLocation,
      title: "Location",
      value: "Chennai, India",
    },
    {
      src: MdOutlineEmail,
      title: "Email ID",
      value: "arunkumar.vbs.b@gmail.com",
    },
    {
      src: FaUserGraduate,
      title: "Education",
      value: "B.E., Mechanical Engineering",
    },
    {
      src: AiOutlineMobile,
      title: "Mobile No",
      value: "+91 96593 15121",
    },
    {
      src: TbLanguageHiragana,
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
                  {src} <span> {title}: </span>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
