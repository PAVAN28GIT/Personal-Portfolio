import React from "react";
import { projects } from "../utils/constants"; // Assuming projects is imported from this path

const Projects = () => {
  return (
    <div className="bg-black py-20" id="projects">
      <h2 className="text-5xl font-semibold mb-4 text-white font-Montserrat text-center ">
        <div className="flex flex-row justify-between">
          <div className="w-[500px] h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 item-center "></div>
          <div className="w-[500px] h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 items-end "></div>
        </div>
        Personal Projects
      </h2>

      <div className="slow-appear flex overflow-x-auto space-x-20 px-20 py-5 pt-16">
        {projects.map((project) => (
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white font-sans text-wrap">
              {project.name}
            </h1>
            <div className="h-64 w-96 relative overflow-hidden rounded-lg">
              {" "}
              {/* Container for the image */}
              <img
                src={project.img}
                alt="projectImage"
                className="absolute top-0 left-0 h-full w-full object-cover object-center"
              />
            </div>

            <p className="text-white font-light text-left py-2">
              {project.description}
            </p>

            <div className="flex flex-row justify-between">
              {project.Github && (
                <a
                  href={project.Github}
                  target="_blank"
                  className="bg-gradient-to-r from-purple-800 to-pink-700 px-10 text-white py-3 rounded-md hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400 hover:text-black"
                >
                  Github
                </a>
              )}
              {project.LiveDemo && (
                <a
                  href={project.LiveDemo}
                  target="_blank"
                  className="bg-gradient-to-r from-blue-700 to-purple-700 px-10 text-white py-3 rounded-md hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400 hover:text-black"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
