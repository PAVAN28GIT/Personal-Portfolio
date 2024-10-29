import React from "react";
import { TypeAnimation } from 'react-type-animation';
import headerImg from '../../public/icons/header-img.svg';


const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('/images/col.jpg')] bg-center bg-cover" id="hero" >
        <div className="flex-col w-full md:px-20 md:justify-between items-center flex md:flex-row h-4/5">
          <div className="flex flex-col items-center md:items-start justify-center order-2 lg:order-1">
            <span className="border-2 text-sm md:text-xl text-white px-5 py-2 bg-gradient-to-r from-purple-900 to-blue-900 text-nowrap">
              Welcome to my Portfolio
            </span>
            <h1 className="text-4xl py-2 md:text-7xl font-extrabold text-white font-nunito">
              Hi! I'm Pavan
            </h1>
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                1000, 
                "Video Editor",
                1000,
                "Blog Writer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              
              style={{ fontSize: '2em', display: 'inline-block' }}
              className="text-white font-nunito font-thin"
              repeat={Infinity}
            />
          </div>
          <div className="slow-appear-logo order-1 lg:order-2">
            <div className="slow-bounce ">
              <img className="opacity-50 lg:opacity-100 h-[30rem] w-[30rem]" src={headerImg} alt="header-image" />
            </div>
          </div>
          
        </div>
    </div>
  );
};

export default Hero;

