import React from "react";
import { skills } from "../utils/constants"; // Adjust the path as necessary

const Skill = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-black h-[500px]" id="skills">
      <h2 className="text-5xl w-full font-semibold mb-4 text-white font-Montserrat text-center ">
        <div className="flex flex-row justify-between">
          <div className="w-[600px] h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 item-center "></div>
          <div className="w-[600px] h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 items-end "></div>
        </div>
        Skills 
      </h2>

      <ul className="grid grid-cols-10 gap-4 text-white px-10 pt-20 justify-center items-center">
        {skills.map((skill) => (
          <li className=" slow-appear flex flex-col items-center p-4 border-2 border-purple-400 rounded-lg shadow transform transition-transform duration-300 hover:scale-125">
            <div className=" text-3xl mb-2">{<skill.icon />}</div>{" "}
            <span className="font-medium text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
