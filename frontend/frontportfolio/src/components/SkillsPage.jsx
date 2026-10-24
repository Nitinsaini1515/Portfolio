import React from "react";
import SkillsCard from "./uiComponents/SkillsCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skillsBg from "../images/skillsBg.png";
import CodeCard from "./uiComponents/CodeCard.jsx";

import { faReact } from "@fortawesome/free-brands-svg-icons";

import {
  faServer,
  faDatabase,
  faScrewdriverWrench,
  faBookOpen,
  faUsers,
  faR,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
const SkillsPage = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: faReact,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5, CSS3",
        "Vite",
      ],
    },
    {
      title: "Backend",
      icon: faServer,
      skills: ["Node.js", "Express.js", "Python (Django)", "REST APIs"],
    },
    {
      title: "Database",
      icon: faDatabase,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: faScrewdriverWrench,
      skills: ["Git & GitHub", "VS Code", "Postman", "Docker", "AWS / Cloud"],
    },
    {
      title: "Currently Learning",
      icon: faBookOpen,
      skills: ["System Design", "DSA", "Next.js", "TypeScript"],
    },
    {
      title: "Soft Skills",
      icon: faUsers,
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Quick Learning",
      ],
    },
  ];

  return (
    <>
      {/* <img src="../imag" alt="" /> */}
      <div>
        <div
          className="min-h-fit p-5 text-white bg-no-repeat"
          style={{ backgroundImage: `url(${skillsBg})` }}
        >
          {/* <div className="topdivskills flex flex-col justify-center items-start w-300"> */}

          <div className="ml-30 h-70 relative  flex flex-col justify-around ">
            
            <div className="flex flex-row justify-around">
              <div className="text-6xl  font-serif">
            <div className=" text-2xl font-sans">Skills</div> 
                <div>Technologies</div>
                <div className=" flex  space-x-5 mt-5 ">
                  <div>I</div>
                  <div className="text-[#1E40AF]">work with</div>
                </div>
              </div>
              <div className="w-1/2">
                I love working with modern tools and technologies to build fast,
                scalable, and user-friendly applications. I enjoy exploring new
                technologies, solving complex problems, and transforming
                creative ideas into meaningful digital experiences through clean
                code, intuitive design, and efficient solutions.
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="cardDiv   grid grid-cols-3 gap-5 justify-items-center relative  ">
            {/* <div className="flex justify-around mt-5">
         <SkillsCard/>
         <SkillsCard/>
         <SkillsCard/>
            </div >
            <div className="flex justify-around mt-5">

         <SkillsCard/>
         <SkillsCard/>
         <SkillsCard/>
            </div> */}
            {skillsData.map((item) => (
              <div className=" rounded-2xl ">

              <SkillsCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                skills={item.skills}
                />
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
