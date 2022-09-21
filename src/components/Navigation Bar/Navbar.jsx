import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
      <div>
        <h1 className="text-5xl font-signature ml-3 "> Arun Kumar</h1>
      </div>
      <ul className="flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 ">
          Home
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 ">
          About
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 ">
          Portfolio
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 ">
          Skills
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150 ">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
