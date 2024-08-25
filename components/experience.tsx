"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
  visible={true}
  contentStyle={{
    background: theme === "light" ? "linear-gradient(to right, #f3f4f6, #e5e7eb)" : "linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "left",
    padding: "1.5rem 2.2rem",
    borderRadius: "10px",
    transition: "transform 0.3s ease, background 0.3s ease",
  }}
  contentArrowStyle={{
    borderRight: theme === "light"
      ? "0.4rem solid #9ca3af"
      : "0.4rem solid rgba(255, 255, 255, 0.5)",
  }}
  date={item.date}
  icon={item.icon}
  iconStyle={{
    background: theme === "light" ? "linear-gradient(to bottom, #ffffff, #e0e0e0)" : "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))",
    color: theme === "light" ? "#4b5563" : "#ffffff",
    fontSize: "1.8rem",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
  }}
  iconOnClick={() => console.log('Icon clicked!')}
>
  <h3 className="font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
    {item.title}
  </h3>
  <p className="font-normal !mt-0 text-gray-600 dark:text-gray-300">
    {item.location}
  </p>
  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 leading-relaxed">
    {item.description}
  </p>
</VerticalTimelineElement>

          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
