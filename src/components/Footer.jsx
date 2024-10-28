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
      <div className="flex flex-row pt-20 px-8  justify-between">
        <h1 className="font-extrabold text-5xl font-nunito">Pavan Kumar K</h1>


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
      </div>
      <p className="font-nunito text-wrap font-thin px-2 text-center mb-5">
          Copy Right @{date}. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
