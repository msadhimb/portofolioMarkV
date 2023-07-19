import React, { useEffect, useState } from "react";
import logoNavbarDark from "../../assets/img/logo/logo-navbar-dark.png";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <React.Fragment>
      <nav
        className={` fixed w-screen z-50 ${
          navbarOpen
            ? "bg-gray-900"
            : onScroll
            ? null
            : `bg-gradient-to-b from-[#025464] to-70% to-transparent transition-all duration-700 ease-in`
        }
        ${
          onScroll
            ? "bg-gray-900 transition-all duration-700 ease-in"
            : navbarOpen && !onScroll
        }
        `}
      >
        <Navbar
          fluid
          rounded
          className="bg-transparent mx-[1rem] md:mx-[8rem] my-2"
        >
          <Navbar.Brand as="a" href="https://flowbite-react.com">
            <img
              src={logoNavbarDark}
              className="h-10 mr-3"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-transparent focus:bg-transparent focus:border-none focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
          <Navbar.Collapse
            className={navbarOpen ? `block my-4 rounded-b-lg` : "hidden"}
          >
            <Link to="/experience">
              <Navbar.Link as="a" href="#" className="text-white">
                <p>Experience</p>
              </Navbar.Link>
            </Link>
            <Navbar.Link href="#" className="text-white">
              <p>Projects</p>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </React.Fragment>
  );
};

export default Navbars;
