import React from "react";
import "./SocialLinks.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Tooltip from "@mui/material/Tooltip";

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
      name: "Download Resume",
      href: "/Arunkumar-B-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="social-links-container  ">
      <ul clasName="social-list">
        {links.map(({ id, name, child, href, download }) => (
          <Tooltip title={name} arrow placement="right">
            <li key={id} className="social-links   ">
              <a
                href={href}
                className=""
                download={download}
                target="_blank"
                rel="nonreferer"
              >
                {child}
              </a>
            </li>
          </Tooltip>
        ))}
      </ul>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed"></div>
    </div>
  );
};
