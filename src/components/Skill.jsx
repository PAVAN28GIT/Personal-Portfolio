import React from "react";
import { skills } from "../utils/constants"; // Adjust the path as necessary

const Skill = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="text-5xl font-extrabold mb-4 text-white font-nunito">My Skillset</h2>
      <ul className="grid grid-cols-10 gap-4 text-white px-10 py-4 justify-center items-center">
        {skills.map((skill) => (
          <li className="flex flex-col items-center p-4 border-2 border-purple-400 rounded-lg shadow transform transition-transform duration-300 hover:scale-125">
            <div className="text-3xl mb-2">{<skill.icon />}</div>{" "}
            <span className="font-medium text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
