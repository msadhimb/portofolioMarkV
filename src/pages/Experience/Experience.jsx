import React, { useRef } from "react";
import { Planet } from "react-planet";

export default function MyPlanet() {
  const PLANET_SIZE = 100;
  const SATELLITE_SIZE = PLANET_SIZE / 2;
  const centerRef = useRef(null);

  const mockSubPlanets = Array.from({ length: 4 }).map((e, index) => ({
    id: Date.now() * Math.random(),
    name: `subplanet-${index}`,
  }));

  return (
    <div className="z-50">
      <Planet
        open
        autoClose={false}
        orbitRadius={260}
        centerContent={
          <div
            ref={centerRef}
            style={{
              width: "4px",
              height: "4px",
              textAlign: "center",
              backgroundColor: "white",
            }}
          ></div>
        }
      ></Planet>
    </div>
  );
}
