import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = ({icon,name,description}) => {
  return (
    <>
    <div className='m-8 rounded-2xl shadow-xs shadow-black/20  h-35 w-35 flex flex-col justify-center items-center '>
    <FontAwesomeIcon icon={icon} />
  <label htmlFor="html">{name}</label>
   <div>{description}</div>
    </div>
  </>
  )
}

export default SkillsCard
