import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const SkillsCard = ({ icon, name, description }) => {
  return (
    <div className="m-2 sm:m-3 md:m-4 rounded-2xl shadow-xs shadow-black/20 aspect-square w-full flex flex-col justify-center items-center gap-1 p-2 text-center">
      <FontAwesomeIcon icon={icon} className="text-xl sm:text-2xl md:text-3xl" />
      <label htmlFor="html" className="font-medium text-xs sm:text-sm">
        {name}
      </label>
      <div className="text-[10px] sm:text-xs text-gray-500">{description}</div>
    </div>
  );
};
 
export default SkillsCard;