import React from "react";
import { motion } from "motion/react";
import aboutimg from "../images/about.png";
const AboutMe = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-screen flex flex-col   text-white bg-black">
          <div className=" flex justify-center h-screen items-center ">
            {/* lefti */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col w-1/2 relative left-30"
            >
              <h1 className="text-2xl font-sans p-5">About me</h1>
              <div className="p-5">
                <h2 className="text-7xl font-serif ">Your Partner </h2>
                <h2 className="text-7xl font-serif ">in Building </h2>
                <h2 className="text-7xl  text-[#1E40AF] font-serif">
                  Digital Solution
                </h2>
              </div>
              <div className="text-sans p-5">
                I'm a Computer Science student and Full Stack Developer
                passionate about turning ideas into impactful digital
                experiences. I enjoy solving problems, exploring new
                technologies, and building modern, user-friendly web
                applications that combine creativity with functionality.
              </div>
              <div className="flex justify-center items-center">
                <button className="p-5 rounded-3xl h- border-2 hover:bg-[#1E40AF]  border-white">
                  Download Resume
                </button>
              </div>
            </motion.div>
            {/* right */}
            <motion.div 
               initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
            className="  relative  flex justify-center items-center w-1/2">
              <img className="w-110 h-150" src={aboutimg} alt="" />
            </motion.div>
          </div>
          {/* bottom */}
        </div>
      </div>
      <div className="bottomContainer flex flex-3 justify-evenly h-50   bg-[#F8F3E8 border border-white/10 items-center">
        <div className="p-6">
          <div className="text-2xl font-sans">2+</div>
          <div className="text-xl"> Years of learning</div>
        </div>
        <div>
          <div className="text-2xl font-sans">2+</div>
          <div className="text-xl">Project Completed</div>
        </div>
        <div>
          <div className="text-2xl font-sans">100%</div>
          <div className="text-xl">Passion</div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
