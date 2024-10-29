import React from "react";

import { FaGithub, FaBloggerB } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      className="w-full text-white bg-cover bg-center absolute"
      style={{ backgroundImage: `url("images/footer-bg.png")` }}
    >
      <div className="flex flex-row pt-20 lg:pt-32 pb-10 px-4 lg:px-8  justify-between">
        <h1 className="font-extrabold text-3xl lg:text-5xl font-nunito">Pavan Kumar K</h1>


        <div className="flex flex-row gap-3 lg:gap-5 p-2 items-center">
          <a href="https://github.com/PAVAN28GIT">
            <FaGithub className="text-xl lg:text-3xl " />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-k-/">
            <FaLinkedin className="text-xl lg:text-3xl " />
          </a>
          <a href="https://pavan-blog.hashnode.dev/">
            <FaBloggerB className="text-xl lg:text-3xl " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
