import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
const SkillsCard = ({ icon,title, skills }) => {
  return (
    
    <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="rounded-2xl bg-[#080B10]  text-white p-5 h-60 w-80"
    >
           {/* <div> */}
        {/* <div className="cardDiv text-2xl rounded-2xl  font-semibold font-sans flex flex-col justify-center  items-start pl-5 border border-white/0  opacity-90  bg-[#080B10] h-60 w-80"> */}
          <div className="flex gap-5 text-2xl ">
            <FontAwesomeIcon
              className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
              icon={icon}
            />
            <div>{title}</div>
          </div >
          <ul className="text-lg p-3">
           {skills.map((sk,index)=>{
            return (
          <li key={index} >{sk}</li>
          ) })}
            {/* {skills.map((sk, index) => (
          <li key={index}>{sk}</li>
        ))} */}
          </ul>
         {/* </div> */}
         {/* </div> */}
         </motion.div>
    
  );
};

export default SkillsCard;
