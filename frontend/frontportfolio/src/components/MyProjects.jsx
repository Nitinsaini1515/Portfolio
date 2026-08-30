import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from './uiComponents/ProjectCard'
const projects = [
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  {
    icon :"faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515"
  },
  
]

const MyProjects = () => {
  return (
    <div>
      {/* header section */}
    <div className='ml-60 w-170 h-30 mt-20 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-sm'>MY WORK</h1>
      <div className='font-bold text-6xl' >Things I've Built</div>
    </div>

    {/* cards */}
    <div className='flex  mt-10  flex-wrap rounded-2xl border-0 w-350 ml-15 shadow-sm shadow-black/20  '>

{
  projects.map((projects,index)=>{
    return(
    <ProjectCard 
    key={index}
    icon={projects.icon}
    title={projects.title}
    description={projects.description}
    linkOfWebsite={projects.linkOfWebsite}
    githubRepo={projects.repoLink}
    />
    )
  })
}
    </div>



    </div>
  )
}

export default MyProjects
