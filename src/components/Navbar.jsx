import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // smooth scroll to section
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaBloggerB } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 20; // 20vh threshold
      setScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex flex-row justify-between px-14 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black py-4" : "bg-transparent pt-10"
      } text-white`}
    >
      <h1 className="text-4xl font-medium">Pk</h1>

      <ul className="flex flex-row ml-24 gap-10 items-center p-2 text-xl">
        {/* Home Link */}
        {location.pathname === "/" ? (
          <ScrollLink
            to="hero"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
            activeClass="!text-white border-b-4 px-3 border-pink-600"
            className="text-gray-300"
          >
            Home
          </ScrollLink>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="text-gray-300"
          >
            Home
          </button>
        )}

        {/* Conditionally render links based on route */}
        {location.pathname === "/" && (
          <>
            <ScrollLink
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="!text-white border-b-4 px-3 border-pink-600"
              className="text-gray-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="!text-white border-b-4 px-3 border-pink-600"
              className="text-gray-300"
            >
              Projects
            </ScrollLink>
          </>
        )}

        {/* Resume Link */}
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? 'text-white border-b-4 px-2 border-pink-600' : 'text-gray-300')}
        >
          Resume
        </NavLink>
      </ul>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-5 p-2 items-center">
          <a href="https://github.com/PAVAN28GIT">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-k-/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://pavan-blog.hashnode.dev/">
            <FaBloggerB size={30} />
          </a>
        </div>

        {location.pathname === "/" && (
          <>
            <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
            className="inline-block relative overflow-hidden"
            >

            <button
            className="relative border-2 py-3 px-5 text-lg transition-colors 
            before:absolute before:-left-5 before:top-0 before:-z-10 before:h-full before:w-56 before:rounded-full
            before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-700 
            hover:text-black before:hover:scale-x-100"
            >
            Send a Message
            </button> 



            </ScrollLink>
    
         
   
          </>
        )}

        
      </div>
    </nav>
  );
};

export default Navbar;
