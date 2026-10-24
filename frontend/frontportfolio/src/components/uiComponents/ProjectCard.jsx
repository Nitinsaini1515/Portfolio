
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  image,
  title,
  description,
  techUsed,
  gitLink,
  liveink,
}) => {
  return (
    <article className="h-full w-full overflow-hidden rounded-xl bg-[#111111] text-white">

      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-4 p-4 sm:p-5">

        <h3 className="text-xl sm:text-2xl font-semibold">
          {title}
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Technology Badges */}
        <ul className="flex flex-wrap gap-2">
          {techUsed.map((tech, index) => (
            <li
              key={index}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Project Links */}
        <div className="mt-2 flex flex-wrap gap-3">

          <a
            href={gitLink}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 py-3 text-sm font-medium transition-all duration-300 hover:border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
            GitHub
          </a>

          <a
            href={liveink}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1E40AF] px-3 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
          >
            Live Demo
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-sm"
            />
          </a>

        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
