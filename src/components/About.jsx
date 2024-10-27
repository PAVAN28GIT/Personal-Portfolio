import React from "react";
import { TypeAnimation } from 'react-type-animation';
import headerImg from '../../public/icons/header-img.svg';

const About = () => {
  return (
    <div className="w-full bg-cover h-screen bg-right " style={{ backgroundImage: `url('/images/col.jpg')` }} >
        <div className="pl-24  mt-16 w-full justify-between items-center flex flex-row gap-4 h-4/5">
          <div>
            <span className="border-2 text-xl text-white px-5 py-2 bg-gradient-to-r from-purple-900 to-blue-900">
              Welcome to my Portfolio
            </span>
            <h1 className="text-7xl mt-5 font-extrabold text-white font-nunito">
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
          <div className="slow-bounce ">
            <img className="w-2/3 ml-28 " src={headerImg} alt="header-image" />
          </div>
        </div>
    </div>
  );
};

export default About;

