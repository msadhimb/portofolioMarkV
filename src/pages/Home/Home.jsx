import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFiletypePdf,
} from "react-icons/bs";
import { SiGmail, SiTailwindcss, SiBootstrap } from "react-icons/si";
import {
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaHtml5,
  FaVuejs,
  FaReact,
} from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import Icon from "../../components/Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import logoNavbarDark from "../../assets/img/logo/logo-navbar-dark.png";
import gambar1 from "../../assets/img/profile/gambar1.jpg";
import gambar2 from "../../assets/img/profile/gambar2.jpg";
import gambar3 from "../../assets/img/profile/gambar3.jpg";
import gambar4 from "../../assets/img/profile/gambar4.jpg";
import gambar5 from "../../assets/img/profile/gambar5.jpg";
import gambar6 from "../../assets/img/profile/gambar6.jpg";
import gambar7 from "../../assets/img/profile/gambar7.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <section id="profile">
        <main className="grid grid-flow-row md:grid-flow-col 2xl:mx-[5rem]">
          <article className="xl:w-[45rem] flex flex-col xl:mr-[5rem] mb-5 xl:mb-0 xl:row-start-2 z-40">
            <div className="flex items-end justify-between pb-1 ">
              <h1 className="text-3xl md:text-5xl text-white">
                Muhamad Salman Adhim Baqy
              </h1>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  rotate: [0, 45, -45, 0],
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                }}
              >
                <img
                  src={logoNavbarDark}
                  alt="logo"
                  className="h-[6rem] hidden xl:block"
                />
              </motion.div>
            </div>
            <motion.h2
              whileHover={{
                scale: 1.7,
                x: 250,
                y: 10,
              }}
              className="pb-4 mt-2 text-lg md-text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600"
            >
              Front End Developer
            </motion.h2>
            <p className="text-white text-justify text-sm md:text-md pb-5 font-extralight">
              7th-Semester student of Informatics Engineering Study Program,
              Faculty of Computer Science, Universitas Dian Nuswantoro who is
              enthusiastic, highly motivated, and a challenge seeker. I am able
              to create responsive websites using HTML, CSS, Javascript and PHP.
            </p>
            <h2 className="text-2xl md:text-3xl text-white">Get To Know Me</h2>
            <div className="flex flex-row mt-3">
              <Icon
                element={<BsInstagram color="#ef45ff" />}
                className={"mr-4 text-[20px] md:text-[25px]"}
                hoverAnimate={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  },
                }}
              />
              <Icon
                element={<BsLinkedin color="#458cff" />}
                className={"mx-4 text-[20px] md:text-[25px]"}
                hoverAnimate={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  },
                }}
              />
              <Icon
                element={<BsGithub color="#a19f9c" />}
                className={"mx-4 text-[20px] md:text-[25px]"}
                hoverAnimate={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  },
                }}
              />
              <Icon
                element={<SiGmail color="#ff2b59" />}
                className={"mx-4 text-[20px] md:text-[25px]"}
                hoverAnimate={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  },
                }}
              />
              <Icon
                element={<BsFiletypePdf color="#ff9d1c" />}
                className={"mx-4 text-[20px] md:text-[25px]"}
                hoverAnimate={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  },
                }}
              />
            </div>
          </article>
          <figure className="xl:row-start-1 xl:row-end-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[15rem] h-[20rem] md:w-[20rem] md:h-[25rem] mx-auto my-5 md:my-0 "
              autoplay
              loop
            >
              <SwiperSlide>
                <img src={gambar1} alt="gambar1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar2} alt="gambar2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar3} alt="gambar3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar4} alt="gambar4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar5} alt="gambar5" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar6} alt="gambar6" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gambar7} alt="gambar7" />
              </SwiperSlide>
            </Swiper>
          </figure>
        </main>
      </section>
      <section id="skill" className="relative z-50">
        <main className="py-[3rem] font-ubuntu font-thin">
          <h2 className="text-white text-center md:text-3xl text-xl">
            Have experience with
          </h2>
          <div className="grid xl:grid-cols-5 grid-cols-3 place-content-center gap-4 my-[2.5rem] z-50">
            <Icon
              element={<FaHtml5 />}
              className={
                "flex justify-center hover:text-[#f59e42] md:text-[100px] text-[80px] z-50"
              }
            />
            <Icon
              element={<FaCss3Alt />}
              className={
                "flex justify-center hover:text-[#42b9f5] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<FaJs />}
              className={
                "flex justify-center hover:text-[#f5e042] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<FaPhp />}
              className={
                "flex justify-center hover:text-[#593ec5] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<DiCodeigniter />}
              className={
                "flex justify-center hover:text-[#f54242] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<FaVuejs />}
              className={
                "flex justify-center   hover:text-[#42f5a3] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<FaReact />}
              className={
                "flex justify-center hover:text-[#42b9f5] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<SiTailwindcss />}
              className={
                "flex justify-center hover:text-[#42b9f5] md:text-[100px] text-[80px]"
              }
            />
            <Icon
              element={<SiBootstrap />}
              className={
                "flex justify-center hover:text-[#593ec5] md:text-[100px] text-[80px]"
              }
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
};

export default Home;
