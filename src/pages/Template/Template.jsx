import React from "react";
import Navbars from "../../components/Navbars/Navbars";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Template = () => {
  return (
    <React.Fragment>
      <Navbars />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Template;
