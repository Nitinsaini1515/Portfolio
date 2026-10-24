import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
// import CertificationPage from "./components/CertificationPage";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import SkillsPage from "./components/SkillsPage";
import ProjectCard from "./components/uiComponents/ProjectCard";
import ThreeVantaComponent from "./components/ThreeVantaComponent";
// import QuoteCard from "./components/uiComponents/QuoteCard";
import QuoteCard from "./components/uiComponents/quoteCard";
const App = () => {
  return (
    <div>
      <Navbar />
      <main >
        <section id="home" className="">
          <HomePage />
        </section>
        <section id="aboutme" className="">
          <AboutMe />
        </section>
        <section id="skills" className="">
          <SkillsPage />
        </section>
        <QuoteCard/>
        <section id="myproject" className="">
          <MyProjects />
        </section>

        <section id="contactme" className="">
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
