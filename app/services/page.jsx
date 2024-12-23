"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    name: "01",
    title: "Full Stack Development",
    description: "I'm very good at Web Development.",
    href: "",
  },
  {
    name: "02",
    title: "Front-End Development",
    description: "I'm very good at Web Development.",
    href: "",
  },
  {
    name: "03",
    title: "Back-end Development",
    description: "I'm very good at Web Development.",
    href: "",
  },
  {
    name: "04",
    title: "Back-end Development",
    description: "I'm very good at Web Development.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {services.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col group justify-center gap-6"
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.name}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent duration-500 transition-all flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
