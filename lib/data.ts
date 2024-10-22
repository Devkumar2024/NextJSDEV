import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/project.jpg";
import rmtdevImg from "@/public//project.jpg";
import wordanalyticsImg from "@/public/project.jpg";
import protfolio from "@/public/abc.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School [PSEB]",
    location: "Amritsar, Punjab",
    description:
      "Did my high schooling form PB memorial public school, I did my Xii in commerce.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2022",
  },
  
  {
    title: "Diploma in IT",
    location: "Govt. Polytechnique college Amritsar, Punjab",
    description:
      "Persuing my current study in diploma",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
 
  
 
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "Basic portfolio webiste, to be updated more in future as per my training project",
    tags: ["Html", "css", "Js", "React JS"],
    imageUrl: protfolio,
  },
  {
    title: "Project 1",
    description:
      "To be updated.....",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 2",
    description:
      "To be updated.....",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 3",
    description:
      "To be updated.....",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    imageUrl: rmtdevImg,
  },


] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Ms office",
  "Word",
  "Windows OS",
  "Core CS",
  "Operating system",
  "Data Structure",
  "Computer Networks",
  "DBMS",
  "Java",
  "C/C++",
  "Computer Orgn.",
  "English",
  "Digial logic",
] as const;
