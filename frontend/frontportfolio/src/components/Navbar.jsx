import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className=" font-sans  flex justify-center items-center gap-85 h-15 bg-gray-50  shadow-[0_4px_25px_rgba(0,0,0,0.10)]">
        {/* logo */}
        <div className="font-bold ">PORTFOLIO</div>

        {/* middle section */}
        <div className="flex gap-10 cursor-pointer font-medium">
          <button
            onClick={() => scrollToSection("home")}
            className="relative group "
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300  "></span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="relative group"
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("certification")}
            className="relative group"
          >
            Certifications
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 "></span>
          </button>
          <button
            onClick={() => scrollToSection("myproject")}
            className="relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 "></span>
          </button>
          <button
            onClick={() => scrollToSection("aboutme")}
            className="relative group"
          >
            About us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("contactme")}
            className="relative group"
          >
            Contact us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {/* right section */}
        <div className="group relative h-10 w-30 overflow-hidden border-2 border-black rounded-2xl flex justify-center items-center cursor-pointer">
          {/* Black background - bottom to top */}
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

          {/* Text */}
          <span className="relative z-10 font-medium text-xl text-black group-hover:text-white transition-colors duration-300">
            Resume
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
