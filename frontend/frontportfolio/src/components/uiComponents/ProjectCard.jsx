import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const ProjectCard = ({ icon, title, description, linkOfWebsite, githubRepo }) => {
  return (
    <div
      className="m-2 sm:m-3 p-5 sm:p-6 w-full flex flex-col items-center text-center
      shadow-sm shadow-black/20 rounded-2xl hover:border-2 hover:border-amber-100
      hover:transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1"
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-2xl sm:text-3xl" />}
      <div className="font-semibold text-base sm:text-lg mt-2">{title}</div>
      <div className="text-sm sm:text-base text-gray-500 mt-1">{description}</div>
 
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center mt-5 text-black w-full">
        <a
          className="font-semibold cursor-pointer h-10 px-5 rounded-2xl hover:border-2
          hover:border-amber-200 flex justify-center items-center hover:font-extrabold"
          href={linkOfWebsite}
          target="_blank"
          rel="noreferrer"
        >
          Live link
        </a>
 
        <a
          className="font-semibold cursor-pointer h-10 px-5 rounded-2xl hover:border-2
          flex justify-center items-center hover:font-extrabold"
          href={githubRepo}
          target="_blank"
          rel="noreferrer"
        >
          Repo link
        </a>
      </div>
    </div>
  );
};
 
export default ProjectCard;