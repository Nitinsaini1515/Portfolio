import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import CertificationPage from "./components/CertificationPage";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import SkillsPage from "./components/SkillsPage";
import ProjectCard from "./components/uiComponents/ProjectCard";
import ThreeVantaComponent from "./components/ThreeVantaComponent";

const App = () => {
  return (
    <div>
      <Navbar />
        
      <main className="">

   
        <section id="home" className="scroll-mt-20">
          <HomePage />
        </section>

        <section id="skills" className="scroll-mt-20">
          <SkillsPage />
        </section>
        <section id="certification" className="scroll-mt-20">
          <CertificationPage />
        </section>
        <section id="myproject" className="scroll-mt-20">
          <MyProjects />
        </section>

        <section id="aboutme" className="scroll-mt-20">
          <AboutMe />
        </section>
        <section id="contactme" className="scroll-mt-20">
          <ContactMe />
        </section>
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
