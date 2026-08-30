import React from "react";

const AboutMe = () => {
  return (
    <>
      <div>
        {/*upper section  */}
        <div className="h-30 w-150 ml-75 flex flex-col justify-center items-center">
          <h1 className="font-bold text-sm ">About me</h1>
          <h2 className="font-bold text-6xl">Get To Know Me</h2>
        </div>

        {/*left  side text */}
        <div className="gap-80 flex">
          <div className="w-2/4 h-130 p-5 mt-10 ml-30 rounded-xl shadow-md shadow-black/20">
            <h1 className="text-4xl font-bold mb-4">Journey & Education</h1>
            <h1  className="text-xl font-bold mt-4 mb-4">A developer who loves to build and learn.</h1>
            <div>
              I’m a Computer Science student and Full-Stack Developer passionate
              about turning ideas into real-world applications. I enjoy building
              modern web experiences, solving challenging problems, and
              continuously exploring new technologies.I believe in learning by
              building — from full-stack projects and hackathons to DSA and
              problem-solving, every experience helps me grow as a developer.
            </div>
            {/* bpx */}
            <div className=" flex gap-10 w-auto ">

              {/* higher */}
              <div className="shadow-md shadow-black/20 p-5 m-5">
                <div>B.Tech — Computer Science & Engineering</div>
                <div>CGC College of Engineering, Landran</div>
                <button>Currently pursuing </button>
              </div>
                  {/* sr secondary */}
              <div className="shadow-md shadow-black/20 p-5 m-5">
                <div>B.Tech — Computer Science & Engineering</div>
                <div>CGC College of Engineering, Landran</div>
                <button>Currently pursuing </button>
              </div>
      {/* secondary */}
              <div className="shadow-md shadow-black/20 p-5 m-5">
                <div>B.Tech — Computer Science & Engineering</div>
                <div>CGC College of Engineering, Landran</div>
                <button>Currently pursuing </button>
              </div>
            </div>
          </div>
        {/* right section */}
          <div>



          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
