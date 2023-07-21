import React, { useState } from "react";
import Planet from "./Planet";
import abbauf from "../../assets/img/experience/company-logo/abbauf.png";
import graphie from "../../assets/img/experience/company-logo/graphie.png";
import udinus from "../../assets/img/experience/company-logo/udinus.png";
import senatMahasiswa from "../../assets/img/experience/company-logo/senatMahasiswa.png";
import len from "../../assets/img/experience/company-logo/len.png";

const Experience = () => {
  return (
    <section className="h-[50rem] mx-auto relative z-40">
      <h1 className="text-center text-5xl text-white">Planetary Experience</h1>
      <Planet
        subPlanet={[
          {
            name: "Abbauf",
            image: abbauf,
          },
          {
            name: "Abbauf",
            image: graphie,
          },
        ]}
        secOrbit={[
          {
            name: "Universitas Dian Nuswantoro",
            image: udinus,
          },
          {
            name: "Senat Mahasiswa FEB UKSW",
            image: senatMahasiswa,
            className: "pt-[0.9rem]",
          },
          {
            name: "PT. Len Industri",
            image: len,
            className: "pt-[0.9rem]",
          },
        ]}
      />
    </section>
  );
};

export default Experience;
