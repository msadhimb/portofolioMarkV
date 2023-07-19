import React from "react";
import { motion } from "framer-motion";

const Icon = ({ element, className, hoverAnimate }) => {
  return (
    <motion.button
      whileHover={hoverAnimate}
      className={`${className} rounded-lg cursor-pointer`}
    >
      {element}
    </motion.button>
  );
};

export default Icon;
