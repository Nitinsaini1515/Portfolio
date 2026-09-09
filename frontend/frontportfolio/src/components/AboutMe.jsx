import React from "react";
 
const AboutMe = () => {
  return (
    <>
      <div className="px-4 sm:px-8">
        {/* upper section */}
        <div className="w-full max-w-xl mx-auto flex flex-col justify-center items-center text-center mt-10">
          <h1 className="font-bold text-sm">About me</h1>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Get to know me
          </h2>
        </div>
 
        <div className="gap-10 lg:gap-16 flex flex-col lg:flex-row justify-center items-center lg:items-start mt-10 max-w-6xl mx-auto">
          {/* left side text */}
          <div className="w-full lg:max-w-3xl p-5 rounded-xl shadow-md shadow-black/20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Journey & education
            </h1>
            <h1 className="text-lg sm:text-xl font-bold mt-4 mb-4">
              A developer who loves to build and learn.
            </h1>
            <div className="text-sm sm:text-base">
              I'm a Computer Science student and Full-Stack Developer passionate
              about turning ideas into real-world applications. I enjoy building
              modern web experiences, solving challenging problems, and
              continuously exploring new technologies. I believe in learning by
              building — from full-stack projects and hackathons to DSA and
              problem-solving, every experience helps me grow as a developer.
            </div>
 
            {/* education boxes */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-5">
              {/* higher */}
              <div className="shadow-md shadow-black/20 p-5 flex-1 min-w-[220px] text-sm sm:text-base">
                <div>Degree: B.Tech — Computer Science & Engineering</div>
                <div>CGC College of Engineering, Landran</div>
                <div>Year: 2024 – 2028</div>
                <div>Status: Pursuing</div>
              </div>
 
              {/* sr secondary */}
              <div className="shadow-md shadow-black/20 p-5 flex-1 min-w-[220px] text-sm sm:text-base">
                <div>Senior secondary (12th)</div>
                <div>School: GMSSS, Raipur Rani</div>
                <div>Year: 2023</div>
                <div>Result: 72%</div>
              </div>
 
              {/* secondary */}
              <div className="shadow-md shadow-black/20 p-5 flex-1 min-w-[220px] text-sm sm:text-base">
                <div>Secondary (10th)</div>
                <div>School: Aggarsen Senior Secondary School</div>
                <div>Year: 2021</div>
                <div>Result: 94%</div>
              </div>
            </div>
          </div>
 
          {/* right section */}
          <div className="w-full max-w-xs sm:max-w-sm lg:w-72 hidden lg:block lg:max-w-none aspect-square bg-red-50 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="./profilepic.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};
 
export default AboutMe;
 