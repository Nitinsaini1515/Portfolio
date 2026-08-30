import React from "react";
import { TypeAnimation } from "react-type-animation";
import CodeCard from "./uiComponents/CodeCard";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-60px)] w-full flex justify-center items-center px-10">
        <div className="flex justify-center items-center max-w-6xl gap-60 ">
          {/* text */}

          <div className="ml-10 w-270 gap-5 flex flex-col">
            <div className="border border-black w-90 rounded-3xl flex justify-center items-center p-1 float-animation">
              B.Tech CSE Student • Full Stack Developer
            </div>
            <div>Hello, I am</div>
            <TypeAnimation
              className="font-bold text-6xl"
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
            <div className="text-xl w-150 h-auto text-black mt-4">
              I’m a Computer Science student and Full Stack Developer focused on
              building modern, responsive and user-friendly web applications
              with clean code and practical solutions.
            </div>
            <div className=" flex gap-5 font-medium">
              <button className="border border-black p-1 h-12 w-30 rounded-2xl hover:bg-black hover:text-white">
                View Project
              </button>
              <button className="border-0 border-black p-1 h-12 w-30 hover:w-32 transition-all duration-300 rounded-2xl shadow-2xl">
                Contact Me
              </button>
            </div>
          </div>
          {/* photo */}
          <div className="w-1/2 ">
            <span>
              <CodeCard />
            </span>
            <div className="border p-10 border-gray-200 rounded-full h-100 w-100">
              <img
                className="border-gray-500 border h-80 w-80 rounded-full"
                src="./profilepic.png"
                alt="MyImage"
              />
              <span className="border font-mono text-sm font-semibold border-black w-35 rounded-2xl flex flex-col ml-60 justify-center items-center p-1 float-animation">
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
