import React, { useState } from "react";
import "../container/Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
export const Navbar = () => {
  const items = ["home", "about", "portfolio", "skills", "contact"];
  const [nav, setNav] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-sign flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
        <div>
          <h1 className=".app__logo text-4xl font-signature"> Arun Kumar</h1>
        </div>

        <ul className="app__navbar-links hidden md:flex">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-150   "
            >
              <Link to={item} smooth duration={500} className="href">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className=" cursor-pointer px-4 z-10 text-gray-500 hover:text-gray-100 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div>
        {nav ? (
          <ul className="mobile-nav md:hidden">
            {items.map((item, index) => (
              <li
                key={index}
                className="nav-item-mbile px-4 hover:-translate-x-3.5 text-white duration-150   "
              >
                <Link
                  to={item}
                  smooth
                  duration={500}
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="href"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  );
};
