import { TbBrandCpp } from 'react-icons/tb';
import { FaJava, FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMongodb, SiExpress } from 'react-icons/si';


export const navTabs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];


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
    { name: "GitHub", icon: FaGithub }
];