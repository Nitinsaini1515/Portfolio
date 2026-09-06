import React from "react";
// import SkillsCard from "./uiComponents/SkillsCard";
import SkillsCard from "./uiComponents/skillsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faE,
} from "@fortawesome/free-solid-svg-icons";
const skillArr = [
  {
    icon: faHtml5,
    name: "HTML",
    description: "Structure",
  },
  {
    icon: faCss3Alt,
    name: "CSS",
    description: "Styling",
  },
  {
    icon: faJs,
    name: "JavaScript",
    description: "Interaction",
  },
  {
    icon: faReact,
    name: "React",
    description: "UI & Components",
  },
  {
    icon: faNodeJs,
    name: "Node.js",
    description: "Backend & API",
  },
  {
    icon: faCode,
    name: "Express.js",
    description: "Backend & API",
  },
  {
    icon: faDatabase,
    name: "MongoDB",
    description: "Database",
  },
  {
    icon: faGitAlt,
    name: "Git/GitHub",
    description: "Version Control",
  },
  {
    icon: faCode,
    name: "DSA",
    description: "Logic & Algorithms",
  },
  {
    icon: faCode,
    name: "C++",
    description: "Programming & DSA",
  },
];



const SkillsPage = () => {
  return (
    <>
      <div className="m-20">
        <div className="ml-60 h-30 w-150  flex flex-col justify-center items-center ">
          <div className="font-bold text-sm flex-none ">Technologies</div>
          <div className="font-bold text-6xl">Skills i work with </div>
        </div>

        <div className="m-15 gap-80 flex justify-center items-center">
          {/* left side animation */}

          <div className="w-1/4">
            {/* heading */}

<div>
    Skills
</div >
<div className="grid grid-cols-3 shadow-xs shadow-black/20  rounded-2xl w-160 h-160 top-5 overflow-y-scroll">

{skillArr.map((skill ,index)=>{
return (
<SkillsCard key = {index}
icon = {skill.icon}
name ={skill.name}
description  = {skill.description}
  />
)
})}

</div>
          </div>
          {/* right side */}
          <div className=" w-1/2 text-xl ">
            <div className="font-bold text-4xl mb-5">
              Turning Ideas Into Products
            </div>
            I work across the full development stack, combining modern frontend
            technologies with powerful backend tools to build complete web
            applications. I enjoy creating responsive and intuitive interfaces
            while also focusing on efficient APIs, databases, and scalable
            backend systems. I’m comfortable working with technologies like
            React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, and Git,
            while constantly exploring new tools and technologies. For me,
            learning isn’t just about knowing a technology — it’s about using it
            to solve real-world problems and build something meaningful.
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
