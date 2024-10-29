import React from "react";
import { projects } from "../utils/constants"; // Assuming projects is imported from this path

const Projects = () => {
  return (
    <div className="bg-black" id="projects">
      <h2 className="text-5xl w-full font-semibold mb-4 text-white font-Montserrat text-center ">
        <div className="flex flex-row items-center space-x-6 px-6 lg:px-20 justify-between">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-nowrap items-start">
            Personal Projects
          </div>
          <div className="w-full h-[3px] bg-gradient-to-r from-purple-800 to-pink-700 items-end "></div>
        </div>
      </h2>

      <div className="flex overflow-x-auto space-x-10 px-5 py-2 lg:px-20 md:py-10 ">
        {projects.map((project , index) => (
          <div className="flex h-[36rem] flex-col p-4 rounded-xl space-y-6 border border-[rgba(255,255,255,0.5)] shadow-2xl shadow-[rgba(255,255,255,0.5)]">
            <h1 className="text-4xl font-bold text-white font-sans text-wrap">
              {project.name}
            </h1>
            <div className="h-60 w-80 lg:w-[24rem] relative overflow-hidden rounded-lg">
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

              {project.Blog && (
                <a
                  href={project.Blog}
                  target="_blank"
                  className="bg-gradient-to-r from-purple-800 to-pink-700 px-10 text-white py-3 rounded-md hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400 hover:text-black"
                >
                  Read Blog
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
