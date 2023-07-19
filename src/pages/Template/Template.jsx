import React from "react";
import Navbars from "../../components/Navbars/Navbars";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Template = () => {
  return (
    <React.Fragment>
      <Navbars />
      <main className="bg-gray-800 w-screen px-[2rem] pt-[5rem] md:pt-[10rem] md:px-[5rem] xl:px-[12rem] overflow-x-hidden font-poppins">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Template;
