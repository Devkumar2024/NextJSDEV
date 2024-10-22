"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-5 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
  Hi, my name is <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Ishaan</span>, a passionate IT student currently pursuing a diploma in Information Technology. My core knowledge includes subjects like <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">COA, DBMS, and Theoretical Computer Science</span>. I also have a solid understanding of <span className="font-semibold text-green-500 dark:text-green-400">core computer science subjects</span>.
</p>



<p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
  <span className="italic text-gray-600 dark:text-gray-400">When I'm not coding</span>, I enjoy playing games, reading, and going for walks. I have a passion for <span className="font-semibold text-yellow-500 dark:text-yellow-400">learning new things</span>, especially when it comes to <span className="font-semibold text-yellow-500 dark:text-yellow-400">science</span>.
</p>

    </motion.section>
  );
}
