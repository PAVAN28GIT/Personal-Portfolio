import React from "react";
import { skills } from "../utils/constants"; // Adjust the path as necessary

const Skill = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-black" id="skills">
      <h2 className="text-5xl w-full font-semibold mb-4 text-white font-Montserrat text-center ">
        <div className="flex flex-row items-center space-x-6 px-4 lg:px-20 justify-between">
          <div className="text-5xl lg:text-7xl font-bold">
            Skills
          </div>
          <div className="w-full h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 items-end "></div>
        </div>
      </h2>

      <ul className="flex flex-wrap text-white px-4 lg:px-40 py-5 lg:py-10 justify-center items-center">
        {skills.map((skill) => (
          <li className="w-24 lg:h-40 lg:w-40 flex flex-col m-1 lg:m-2 items-center justify-center p-4 border-2 border-purple-400 rounded-lg">
            <div className=" text-3xl lg:text-6xl mb-2">{<skill.icon />}</div>{" "}
            <span className="font-medium text-center text-nowrap">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
