import { motion, AnimatePresence } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 7;
  return totalSteps - (index + 1);
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion div, each representing a step of stairs */}
      {[...Array(7)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: 0.4,
              duration: reverseIndex(index) * 0.1,
              ease: "easeInOut",
            }}
            className="w-full h-full relative bg-white border-r-4"
          />
        );
      })}
    </>
  );
};

export default Stairs;
