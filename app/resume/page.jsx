"use client";

import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiDjango, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description: "I'm very good at front-end React and backend Django.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Min Khant Thaw",
    },
    {
      fieldName: "Phone",
      fieldValue: "+959 686 515 598",
    },
    {
      fieldName: "Experience",
      fieldValue: "+1 year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "MYANMAR",
    },
    {
      fieldName: "Email",
      fieldValue: "mkt293822@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Myanmar",
    },
    {
      fieldName: "Work Time",
      fieldValue: "10 Hrs",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I've done self learning for more than 1 years",
  items: [
    {
      degree: "Be.mechanic",
      institution: "MAGWAY GTC",
      duration: "6 years",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "These are the skills I've learned.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      title: "html 5",
    },
    {
      icon: <FaCss3 />,
      title: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      title: "tailwind.css",
    },
    {
      icon: <FaJs />,
      title: "javascript",
    },
    {
      icon: <FaNodeJs />,
      title: "node.js",
    },
    {
      icon: <FaReact />,
      title: "react",
    },
    {
      icon: <SiNextdotjs />,
      title: "next.js",
    },
    {
      icon: <SiDjango />,
      title: "django",
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import clsx from "clsx";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="flex items-center justify-center min-h-[80vh] py-12 xl:py-0 lg:py-3 mt-8 w-full"
    >
      <div className="container">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-rw lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] gap-6 mx-auto xl:mx-0 lg:mx-0">
            <TabsTrigger
              value="skills"
              className="hover:font-extrabold hover:text-accent"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="hover:font-extrabold hover:text-accent"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="hover:font-extrabold hover:text-accent"
            >
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* skill */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap[30px] text-center xl:text-left lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillLists.map((skill, index) => {
                    return (
                      <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize rounded-xl font-bold">
                              {skill.title}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text:left lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-clip md:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:gap-x-[5rem] xl:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0 lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start lg:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
