import ProjectCard from "./uiComponents/ProjectCard";
 
const projects = [
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    icon: "faHandLove",
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
];
 
const MyProjects = () => {
  return (
    <div className="mt-20 sm:mt-32 mb-20 px-4 sm:px-8">
      {/* header section */}
      <div className="w-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-sm">MY WORK</h1>
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Things I've built
        </div>
      </div>
 
      {/* cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10
        w-full max-w-6xl mx-auto rounded-2xl shadow-sm shadow-black/20 p-4"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            linkOfWebsite={project.linkOfWebsite}
            githubRepo={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};
 
export default MyProjects;