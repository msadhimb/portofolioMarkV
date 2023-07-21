import React, { useState } from "react";
import { Planet } from "react-planet";
import { motion } from "framer-motion";
import { useInterval } from "../../components/utils/utils";
import earth from "../../assets/img/experience/earth.png";

export default function Planets({ subPlanet, secOrbit }) {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [secOrbitRotation, setSecOrbitRotation] = useState(0);

  useInterval(() => {
    !hovered && setRotation(rotation + 1);
  }, 100);

  useInterval(() => {
    !hovered && setSecOrbitRotation(secOrbitRotation + 1);
  }, 50);

  return (
    <div className="flex justify-center ml-[-10rem] mt-[18rem]">
      <Planet
        orbitRadius={170}
        centerContent={
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.8 }}
            className="w-[10rem] h-[10rem]"
          ></motion.div>
        }
        open
        rotation={rotation}
      >
        {subPlanet?.map((item, index) => (
          <motion.div
            whileTap={{ scale: 0.8 }}
            key={index}
            className="w-[5rem] h-[5rem] bg-white rounded-full p-2"
          >
            <img src={item.image} alt={item.name} />
          </motion.div>
        ))}
      </Planet>
      <Planet
        orbitRadius={285}
        centerContent={
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.8 }}
            className="w-[10rem] h-[10rem]"
          >
            <img src={earth} alt="planet" />
          </motion.div>
        }
        open
        rotation={secOrbitRotation}
      >
        {secOrbit?.map((item, index) => (
          <motion.div
            whileTap={{ scale: 0.8 }}
            key={index}
            className={`w-[5rem] h-[5rem] bg-white rounded-full p-2 ${item.className}`}
          >
            <img src={item.image} alt={item.name} />
          </motion.div>
        ))}
      </Planet>
    </div>
  );
}
