import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
 
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certification" },
  { label: "Projects", id: "myproject" },
  { label: "About us", id: "aboutme" },
  { label: "Contact us", id: "contactme" },
];
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };
 
  return (
    <div>
      <div
        className="top-0 fixed left-0 w-full font-sans flex justify-between md:justify-center
        items-center gap-6 lg:gap-16 h-15 bg-gray-50 shadow-[0_4px_25px_rgba(0,0,0,0.10)]
        px-5 md:px-8 z-50"
      >
        {/* logo */}
        <div className="font-bold text-sm sm:text-base">PORTFOLIO</div>
 
        {/* middle section - desktop */}
        <div className="hidden md:flex gap-6 lg:gap-10 cursor-pointer font-medium text-sm lg:text-base">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
 
        {/* right section - resume button, desktop only */}
        <div className="hidden md:flex group relative h-10 w-28 lg:w-30 overflow-hidden border-2 border-black rounded-2xl justify-center items-center cursor-pointer">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <a
            href="./resume.pdf"
            className="relative z-10 font-medium text-base lg:text-xl text-black group-hover:text-white transition-colors duration-300"
          >
            Resume
          </a>
        </div>
 
        {/* hamburger - mobile only */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>
 
      {/* mobile dropdown menu */}
      <div
        className={`md:hidden fixed top-15 left-0 w-full bg-gray-50 shadow-[0_4px_25px_rgba(0,0,0,0.10)]
        flex flex-col items-center gap-6 font-medium overflow-hidden transition-all duration-300 z-40
        ${menuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
        <a
          href="./resume.pdf"
          className="border-2 border-black rounded-2xl px-6 py-2 font-medium"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
 
export default Navbar;
 