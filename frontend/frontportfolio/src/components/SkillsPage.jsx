import React from "react";
import SkillsCard from "./uiComponents/skillsCard.jsx";
// import SkillsCard from "./uiComponents/SkillsCard.jsx";
// import SkillsCard from "./uiComponents/SkillsCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
 
const skillArr = [
  { icon: faHtml5, name: "HTML", description: "Structure" },
  { icon: faCss3Alt, name: "CSS", description: "Styling" },
  { icon: faJs, name: "JavaScript", description: "Interaction" },
  { icon: faReact, name: "React", description: "UI & Components" },
  { icon: faNodeJs, name: "Node.js", description: "Backend & API" },
  { icon: faCode, name: "Express.js", description: "Backend & API" },
  { icon: faDatabase, name: "MongoDB", description: "Database" },
  { icon: faGitAlt, name: "Git/GitHub", description: "Version Control" },
  { icon: faCode, name: "DSA", description: "Logic & Algorithms" },
  { icon: faCode, name: "C++", description: "Programming & DSA" },
];
 
const SkillsPage = () => {
  return (
    <>
      <div className="mt-10 px-4 sm:px-8">
        {/* heading */}
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-1">
          <div className="font-bold text-sm">Technologies</div>
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Skills i work with
          </div>
        </div>
 
        <div className="my-10 sm:my-15 gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-center">
          {/* left side - skills grid */}
          <div className="w-full max-w-lg lg:w-1/3">
            <div className="font-bold text-xl mb-3 text-center lg:text-left">
              Skills
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 shadow-xs shadow-black/20 rounded-2xl w-full p-2 max-h-[420px] overflow-y-scroll">
              {skillArr.map((skill, index) => (
                <SkillsCard
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
 
          {/* right side - text */}
          <div className="w-full max-w-lg lg:w-1/2 text-base sm:text-lg lg:text-xl text-center lg:text-left">
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-5">
              Turning Ideas Into Products
            </div>
            I work across the full development stack, combining modern frontend
            technologies with powerful backend tools to build complete web
            applications. I enjoy creating responsive and intuitive interfaces
            while also focusing on efficient APIs, databases, and scalable
            backend systems. I'm comfortable working with technologies like
            React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, and Git,
            while constantly exploring new tools and technologies. For me,
            learning isn't just about knowing a technology — it's about using it
            to solve real-world problems and build something meaningful.
          </div>
        </div>
      </div>
    </>
  );
};
 
export default SkillsPage;
 