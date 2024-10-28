import { TbBrandCpp } from "react-icons/tb";
import { FaJava, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";

export const skills = [
  { name: "C++", icon: TbBrandCpp },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "React JS", icon: GrReactjs },
  { name: "Node JS", icon: IoLogoNodejs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express JS", icon: SiExpress },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "GitHub", icon: FaGithub },
];


export const projects = [
  {
    name: "WeatherWiz",
    description: "WeatherWiz is a modern weather app that delivers real-time updates and forecasts built using Vite, React, and Tailwind CSS. It pulls data from the OpenWeatherMap API to deliver accurate weather information and forecasts for locations around the world.",
    Github: "https://github.com/PAVAN28GIT/WeatherWiz.git",
    LiveDemo: "https://weather-wiz-git-main-pavan28gits-projects.vercel.app/",
    img : "/project-images/weatherwiz.png"
  },
  {
    name: "Featured Stories",
    description: "Featured Stories is a simple Blogging web app that allows users to share their stories. Users can create, update, delete, and read their own stories, all managed within their personal profile page. The application is built using Node.js, Express.js, and Tailwind CSS for rapid front-end styling.",
    Github: "https://github.com/PAVAN28GIT/featured-stories.git",
    LiveDemo: "https://featured-blogs.onrender.com/",
    img : "/project-images/featured-stories.png"
  },
  {
    name: "VPC based Cloud Hosting Setup",
    description : "This project designs an AWS Virtual Private Cloud (VPC) to tackle three key challenges: security, availability, and traffic management. The goal is to create a secure and scalable infrastructure where we can host servers safely and securely for modern businesses.",
    Github: "",
    LiveDemo: "https://pavan-blog.hashnode.dev/aws-vpc-design1",
    img : "/project-images/aws-vpc.avif"
  },
  {
    name: "Rule Engine Using AST",
    description: "This project is a rule engine that allows users to create, modify, and evaluate rules based on conditions like age, department, salary, etc. The engine uses an Abstract Syntax Tree (AST) to represent rules, combine them and evaluation.",
    Github: "https://github.com/PAVAN28GIT/Rule-Engine-with-AST.git",
    LiveDemo: "https://rule-engine-with-ast-ten.vercel.app/",
    img : "/project-images/rule-engine.png"
  }
];
