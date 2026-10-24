import { motion } from "motion/react";
import ProjectCard from "./uiComponents/ProjectCard";
import about from ".././images/about.png";
const projects = [
  {
    image: about,
    title: "Portfolio Website",
    description:
      "My personal portfolio website.website built with modern frontend technologies",
    techUsed: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    image: about,
    title: "Portfolio Website",
    description:
      "A responsive website built with modern frontend technologies.",
    techUsed: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
  {
    image: about,
    title: "Portfolio Website",
    description: "A clean and user-friendly web development project.",
    techUsed: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
    linkOfWebsite: "https://github.com/Nitinsaini1515",
    repoLink: "https://github.com/Nitinsaini1515",
  },
];

const MyProjects = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white px-5 sm:px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm sm:text-base text-white font-semibold uppercase tracking-widest border border-[#1E40AF] rounded-full px-5 py-2">
            Featured Projects
          </span>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Some Things I've <span className="text-[#1E40AF]">Built</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            Here are a few of my recent projects. Each project helped me learn,
            grow, and solve real-world problems through code.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {projects.map((projObj, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              key={`${projObj.title}-${index}`}
              className="group min-w-0 rounded-2xl border border-white/10 bg-[#111111] p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/60 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <ProjectCard
                title={projObj.title}
                liveink={projObj.linkOfWebsite}
                image={projObj.image}
                gitLink={projObj.repoLink}
                description={projObj.description}
                techUsed={projObj.techUsed}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
