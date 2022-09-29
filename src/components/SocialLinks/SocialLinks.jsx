import React from "react";
import "./SocialLinks.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedinIn size={30} />
        </>
      ),
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arun-kumar-1aa790213/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      name: "GitHub",
      href: "https://github.com/Arunkumarbalasubramani",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      name: "Mail",
      href: "mailto:arunkumar.vbs.b@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      name: "Resume",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="social-links-container">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id} className="social-links   ">
            <a href={href} className="" download={download} target="_blank">
              {child}
            </a>
          </li>
        ))}
      </ul>
      <div className="  hidden lg:flex flex-col top-[35%] left-0 fixed "></div>
    </div>
  );
};
