import React, { useEffect, useState } from "react";
import { Planet } from "react-planet";
import { motion, useIsPresent } from "framer-motion";
import { useInterval } from "../../components/utils/utils";
import earth from "../../assets/img/experience/earth.png";
import { Link } from "react-router-dom";

export default function Planets({ subPlanet, secOrbit }) {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [secOrbitRotation, setSecOrbitRotation] = useState(0);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const handleModal = (value, id) => {
    setShow(value);
    if (id) {
      setId(id);
    }
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

  useInterval(() => {
    !hovered && show === false && setRotation(rotation + 1);
  }, 100);

  useInterval(() => {
    !hovered && show === false && setSecOrbitRotation(secOrbitRotation + 1);
  }, 50);

  return (
    <React.Fragment>
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
              <Link to={`/experience/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
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
    </React.Fragment>
  );
}
