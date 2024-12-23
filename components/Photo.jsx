"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-ful h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[208px] h-[208px] xl:w-[348px] lg:w-[348px] xl:h-[348px] lg:h-[348px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            className="object-contain"
            alt=""
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[210px] xl:w-[356px] lg:w-[356px] h-[210px] xl:h-[356px] lg:h-[356px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeLinecap="round"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
