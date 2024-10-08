"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 max-w-[42rem] border border-black/10 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gradient-to-br hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 transition-all duration-300 ease-in-out sm:group-even:pl-8 dark:text-white dark:bg-gradient-to-br dark:from-white/10 dark:via-white/20 dark:to-white/30 dark:hover:bg-gradient-to-br dark:hover:from-white/20 dark:hover:via-white/30 dark:hover:to-white/40">
  <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
      {description}
    </p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag, index) => (
        <li
          className="bg-gradient-to-r from-black/80 to-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80 shadow-md"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>

  <Image
    src={imageUrl}
    alt="Project I worked on"
    quality={95}
    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
      transition-transform duration-300 ease-in-out
      group-hover:scale-105
      group-hover:-translate-x-5
      group-hover:translate-y-5
      group-hover:-rotate-2

      group-even:group-hover:translate-x-5
      group-even:group-hover:translate-y-5
      group-even:group-hover:rotate-2

      group-even:right-[initial] group-even:-left-40"
  />
</section>

    </motion.div>
  );
}
