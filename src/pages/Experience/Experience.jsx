import React from "react";
import Planet from "./Planet";
import data from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
const Experience = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="h-[50rem] mx-auto relative z-40">
          <h1 className="text-center text-5xl text-white">
            Planetary Experience
          </h1>
          <Planet
            subPlanet={data.filter((item, index) => index < 2)}
            secOrbit={data.filter((item, index) => index > 1)}
          />
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Experience;
