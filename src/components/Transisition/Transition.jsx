import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const transition = ({ component }) => {
  const location = useLocation();
  const isPresent = useIsPresent();

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        {isPresent && component}
        <motion.div
          key={location.pathname}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50 origin-bottom"
        />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50 origin-top"
        />
      </AnimatePresence>
    </React.Fragment>
  );
};

export default transition;
