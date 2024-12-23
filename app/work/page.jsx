"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "This is the best web.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "This is the best web.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Django" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "This is the best web.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-full flex flex-col justify-center items-center md:px-0 mt-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[400px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-6">
              {/* Outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </div>
              {/* description */}
              <div className="text-white/60">{project.description}</div>
              {/* stacks */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex gap-4 items-center">
                {/* Live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Git button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-auto sm:mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[400px] group relative flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute h-full w-full top-0 bottom-0 bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButton
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyle="bg-accent flex hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
