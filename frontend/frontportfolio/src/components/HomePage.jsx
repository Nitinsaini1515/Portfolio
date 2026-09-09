import React from "react";
import { TypeAnimation } from "react-type-animation";
import CodeCard from "./uiComponents/CodeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 
const HomePage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-60px)] w-full flex justify-center items-center px-4 sm:px-6 md:px-10 py-10">
        <div
          className="flex flex-col-reverse lg:flex-row justify-center items-center
          max-w-6xl w-full gap-10 lg:gap-20"
        >
          {/* text */}
          <div className="w-full lg:w-1/2 gap-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="border border-black w-fit max-w-full rounded-3xl flex justify-center items-center px-4 py-1 float-animation text-sm sm:text-base">
              B.Tech CSE Student • Full Stack Developer
            </div>
 
            <div className="text-lg sm:text-xl">Hello, I am</div>
 
            <TypeAnimation
              className="font-bold text-4xl sm:text-5xl md:text-6xl"
              sequence={[
                "Nitin Saini",
                2000,
                "Full stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
 
            <div className="text-base sm:text-lg md:text-xl w-full max-w-md md:max-w-lg text-black mt-4">
              I’m a Computer Science student and Full Stack Developer focused on
              building modern, responsive and user-friendly web applications
              with clean code and practical solutions.
            </div>
 
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-medium mt-2">
              <button className="border border-black px-6 h-12 rounded-2xl hover:bg-black hover:text-white transition-colors duration-300">
                View Project
              </button>
              <button className="border border-black px-6 h-12 rounded-2xl shadow-2xl hover:px-8 transition-all duration-300">
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
          </div>
 
          {/* photo */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <CodeCard />
 
            <div className="relative border p-4 sm:p-8 border-gray-200 rounded-full h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 flex items-center justify-center mt-6">
              <img
                className="border-gray-500 border h-full w-full rounded-full object-cover"
                src="./profilepic.png"
                alt="MyImage"
              />
              <span className="absolute bottom-2 right-0 sm:-right-4 border font-mono text-xs sm:text-sm font-semibold border-black rounded-2xl flex flex-col justify-center items-center px-3 py-2 bg-white float-animation">
                Turning Ideas
                <div>Into Reality</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HomePage;
 