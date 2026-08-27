import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" font-sans  flex justify-center items-center gap-85 h-15 bg-gray-50  shadow-[0_4px_25px_rgba(0,0,0,0.10)]">
        {/* logo */}
        <div className="font-bold ">PORTFOLIO</div>

        {/* middle section */}
        <div className="flex gap-10 cursor-pointer font-medium">
          <span className="relative group ">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300  "></span>
          </span>
          <span className="relative group">
            Skils
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
          <span className="relative group">
            Certificates
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 "></span>
          </span>
          <span className="relative group">
            Resume
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
          <span className="relative group">
            About us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
          <span className="relative group">
            Contact us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </span>
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
