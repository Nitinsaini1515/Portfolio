import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProjectCard = ({index,icon,title,description,linkOfWebsite,githubRepo}) => {
  return (
    <div className='h-50'>
      <div>
{/* card div */}
    <div className=' m-5 items-center flex justify-center ml-30  h-40 w-80 flex-col hover:border-amber-100 shadow-sm shadow-black/20 hover:border-2  rounded-2xl hover:transition-all duration-100 hover:-translate-x-2  hover:-translate-y-2'>
            {/* <div>{icon}</div> */}

            <FontAwesomeIcon {...icon}/>
            <div>{index}</div>
            <div>{title}</div>
            <div>{description}</div>
<div className='flex gap-10 justify-evenly mt-5 text-black'>

            <a className='text-black  font-semibold cursor-pointer  h-10 rounded-2xl hover:border-2 hover:border-amber-200 w-30 flex justify-center items-center hover:font-extrabold' href={linkOfWebsite}>
              <div>Live Link</div>
            </a>

            <a className='text-black  font-semibold cursor-pointer  h-10 rounded-2xl hover:border-2 w-30 flex justify-center items-center hover:font-extrabold' href={githubRepo}>
              <div>Repo Link</div>
            </a>
</div>
    </div>
      </div>
    </div>
  )
}

export default ProjectCard
