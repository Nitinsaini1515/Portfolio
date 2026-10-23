import React from "react";
import { TypeAnimation } from "react-type-animation";
import CodeCard from "./uiComponents/CodeCard";
import image from "../images/Abstract.png";
import myImage from "../images/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
const HomePage = () => {
  return (
    <>
      <div className="bg-[#F8F3E8]  h-screen w-full flex justify-center items-center px-4 sm:px-6 md:px-10 py-10 h">
        <div
          className="flex flex-col-reverse lg:flex-row justify-center items-center
          max-w-6xl w-full gap-10 lg:gap-20"
        >
          {/* text */}
          <motion.div className="w-full lg:w-1/2 gap-4 flex flex-col items-center text-center lg:items-start lg:text-left "
          initial ={{opacity:0,y:50,scale:0.95}}
          whileInView={{opacity:1,y:0,scale:1}}
          viewport={{once:false,amount:0.2}}
          transition={{duration:0.6,ease:"easeOut"}}
          >
        
          
            {/* <div className="border border-black w-fit max-w-full rounded-3xl flex justify-center items-center px-4 py-1 float-animation text-sm sm:text-base">
              B.Tech CSE Student • Full Stack Developer
            </div> */}

            <div className="text-lg sm:text-xl">Hello, I am</div>
            <h1 className="text-9xl font-serif ">Nitin Saini</h1>
            <div className="text-4xl font-serif text-[#1E40AF]">
              {" "}
              Full Stack Developer
            </div>
            <div className="text-base sm:text-lg md:text-xl w-full max-w-md md:max-w-lg text-black mt-4">
              I’m a Computer Science student and Full Stack Developer focused on
              building modern, responsive and user-friendly web applications
              with clean code and practical solutions.
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-medium mt-2">
              <button className="border text-white bg-black border-black px-6 h-12 rounded-2xl  hover:text-white transition-colors duration-300">
                View Project
              </button>
              <button className="borde bg-[#1E40AF] text-white border-black px-6 h-12 rounded-2xl shadow-2xl hover:px-8 transition-all duration-300">
                Contact Me
              </button>
            </div>

            {/* icons */}
            <section className="w-full mt-5 flex justify-center lg:justify-start items-center gap-6 sm:gap-8">
              <a
                href="https://www.linkedin.com/in/nitin-saini-ba1a64354/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="https://www.instagram.com/nitin_saini0234?stkn=bHRycXY2OHlqcWxu&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://wa.me/qr/MPJMSJWLHFNJP1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faWhatsapp}
                />
              </a>
              <a href="mailto:nitinsaini07330@gmail.com">
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faEnvelope}
                />
              </a>
            </section>
                 </motion.div>

          {/* photo */}
          <div className="w-full lg:w-1/2  flex flex-col content-center items-center">
            {/* <CodeCard /> */}

            {/* <div className="bg-[#1E40AF] rounded-full  h-30 w-30  "></div> */}
            <div className="relative mt-10 flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
              {/* Blue circle background */}
              <div className="absolute inset-0 rounded-full bg-[#1E40AF]" />

              {/* Profile image extending outside the circle */}
              < motion.img
              initial={{opacity:0,y:50,scale:0.9}}
              whileInView={{opacity:1,y:0,scale:1}}
              viewport={{once:false,amount:0.2}}
              transition={{duration:0.4,ease:"easeOut"}}
                src={myImage}
                alt="My Profile"
                className="absolute bottom-0 z-10 h-[115%] w-[115%] max-w-none object-contain object-bottom"
              />


             

              {/* Floating label */}
              <span className="absolute bottom-5 -right-8 z-20 rounded-2xl border border-black bg-[#F8F3E8] px-4 py-3 font-mono text-xs font-semibold shadow-md sm:-right-12 sm:text-sm float-animation">
                Turning Ideas
                <br />
                Into Reality
              </span>
            </div>
          </div>
        </div>
  
      </div>
    </>
  );
};

export default HomePage;
