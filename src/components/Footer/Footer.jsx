import React from "react";
import logoNavbardark from "../../assets/img/logo/logo-navbar-dark.png";
import { SiGmail } from "react-icons/si";
import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footers = () => {
  return (
    <Footer container className="bg-gray-900 rounded-none z-50 relative">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <div className="flex items-center mb-5">
              <img
                src={logoNavbardark}
                alt="logo-footer"
                className="h-10 mr-2"
              />
              <p className=" text-gray-400 font-poppins text-xl">
                SALMAN ADHIM
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Salman Adhim</Footer.Link>
                <Footer.Link href="#">ReactJS</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Salman Adhim™" href="#" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={SiGmail} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
