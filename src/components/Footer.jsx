import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-full text-white bg-cover bg-center" style={{backgroundImage : `url("images/footer-bg.png")`}}>
    <div className="flex flex-row pt-20 p-8 justify-between">
        <h1 className="font-extrabold text-5xl font-nunito">Pavan Kumar K</h1>
      <div>
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

        <p className="font-nunito text-wrap font-thin p-2">Copy Right @{date}. All Rights Reserved</p>  
      </div>

    </div>
</div>
  )
}

export default Footer