import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Project2.png";
import rmtdevImg from "@/public//Project1.png";
import wordanalyticsImg from "@/public/project4.jpg";
import protfolio from "@/public/Project3.png";


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
    title: "High School [CBSE]",
    location: "Ludhiana, Punjab",
    description:
      "Achieved a score of 89.6% in Class X and 88.6% in Class 12th [88.6%] with a focus on Physics, Chemistry, and Mathematics (PCM). Awarded the gold medal in the SOF Physics Olympiad in Class 12th at the school level.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2020",
  },
  {
    title: "Course Student - [Code in Place (CS-106A)]",
    location: "Stanford Online · Apprenticeship",
    description:
      "Completed an apprenticeship from April 2021 to June 2021, gained knowledge in computing and Python programming, along with exposure to various other computing concepts. Interacting with Section Leaders was a highly enriching and informative experience. ",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2021 - Jun 2021",
  },
  {
    title: "Bachelor of Technology IT [IKGPTU]",
    location: "Ludhiana, Punjab",
    description:
      "CGPA : 8.24",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  },
 
  
  {
    title: "Full-Stack Developer Training",
    location: "Mohali Punjab",
    description:
      "ThinkNEXT Technologies Private Limited",
    icon: React.createElement(FaReact),
    date: "Jan-June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Online Learning Portal",
    description:
      "The goal of this project is to develop an innovative Online Learning portal that revolutionizes the way students engage with learning materials",
    tags: ["React", "Razorpay", "PostMan", "Tailwind", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Room Reservation Website",
    description:
      "Webiste for booking hotels, PG rooms for guests, students, travel, vacation etc.",
    tags: ["Laravel", "JS", "PhP", "Tailwind", "Paypal"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CyberConverse",
    description:
      "A discord clone for creating server, chatting with friends, live chat, calls etc.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Portfolio",
    description:
      "Basic portfolio webiste",
    tags: ["Html", "css", "Js"],
    imageUrl: protfolio,
  },


] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "DBMS",
  "Java",
  "C/C++",
  "Computer Orgn.",
  "CN",
  "Digial logic",
] as const;
