import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SkillsPage from "./components/SkillsPage";
import AboutMe from "./components/AboutMe";
import CertificationPage from "./components/CertificationPage";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import ProjectCard from "./components/uiComponents/ProjectCard";
import ThreeVantaComponent from "./components/ThreeVantaComponent";

const App = () => {
  return (
    <div>

        <Navbar />

        <main>
          <HomePage />
          <SkillsPage />
          <AboutMe />
          <MyProjects />
          <CertificationPage />
          <ContactMe />
          <ProjectCard />
          
        </main>
    </div>
    // <div className="relative min-h-screen bg-black text-white">

    //   {/* Vanta Waves Background */}
    //   <ThreeVantaComponent />

    //   {/* Website Content */}
    //   <div className="relative z-10">
      // </div>

    // </div>
  );
};

export default App;