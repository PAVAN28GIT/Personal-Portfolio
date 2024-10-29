import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHamburger, FaGithub, FaLinkedin, FaBloggerB } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Navigation tabs data
  const navTabs = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "https://drive.google.com/file/d/1qsgJjMkWxsQWpyP7ZWBMwOiSCms_BTvm/view?usp=sharing" },
  ];

  // Handle drawer toggle
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav
      className={`w-full flex flex-row justify-between items-center px-8 lg:px-14 fixed top-0 z-50 border-b border-[rgba(255,255,255,0.4)] transition-all duration-300
        shadow-2xl shadow-gray-800 py-4 backdrop-blur-2xl text-white`}
    >
      {/* Logo */}
      <NavLink to="/" className="cursor-pointer text-4xl font-semibold">
        Pk
      </NavLink>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex flex-row ml-24 gap-10 items-center p-2 text-xl">
        {location.pathname === "/" ? (
          <ScrollLink
            to="hero"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
            activeClass="!text-white border-b-4 px-3 border-pink-600"
            className="text-gray-300 cursor-pointer"
          >
            Home
          </ScrollLink>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 cursor-pointer"
          >
            Home
          </button>
        )}

        {location.pathname === "/" && (
          <>
            <ScrollLink
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass="!text-white border-b-4 px-3 border-pink-600"
              className="text-gray-300 cursor-pointer"
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
              className="text-gray-300 cursor-pointer"
            >
              Projects
            </ScrollLink>
          </>
        )}


        <a 
        className=" text-gray-300 hover:text-white cursor-pointer"
        target="_blank"
        href="https://drive.google.com/file/d/1qsgJjMkWxsQWpyP7ZWBMwOiSCms_BTvm/view"> Resume </a>
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex flex-row gap-4">
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
        )}
      </div>

      {/* Mobile Hamburger Drawer */}
      <div className="md:hidden w-fit">
        <button onClick={toggleDrawer} className="text-gray-500">
          <FaHamburger size={30} />
        </button>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-70 bottom-[60rem]">
            <div
              className={`fixed top-0 left-0 right-0 bg-black text-gray-400 p-4 transition-transform duration-500 ease-in-out ${
                drawerOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <button
                onClick={toggleDrawer}
                className="absolute top-4 right-4"
              >
                X
              </button>
              <ul className="text-lg mt-8 space-y-4">
                {navTabs.map((tab) => (
                  <li key={tab.name} onClick={toggleDrawer}>
                    {tab.link.startsWith("#") && location.pathname === "/" ? (
                      <ScrollLink
                        to={tab.link.substring(1)}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="cursor-pointer"
                      >
                        {tab.name}
                      </ScrollLink>
                    ) : (
                      <a href={tab.link} target="_blank" className="">
                        {tab.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
