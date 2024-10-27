import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between bg-black text-white px-10 py-4 pt-5 fixed top-0">
      <h1 className="text-4xl font-medium">Pk</h1>

      <ul className="flex flex-row ml-20 gap-8 items-center p-2 text-xl">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-5 p-2 items-center">
          <a href="#">
            <FaGithub
            size={30} />
          </a>
          <a href="#">
            <FaLinkedin 
            size={30} />
          </a>
          <a href="#">
            <FaInstagram 
            size={30} />
          </a>
        </div>

        <div class="inline-block relative overflow-hidden">
          <button
            class="relative border-2 py-1 px-5 text-lg
            transition-colors before:absolute before:-left-4 before:top-0 before:-z-10 before:h-full before:w-36 before:rounded-full
            before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-700 
            hover:text-black before:hover:scale-x-100"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
