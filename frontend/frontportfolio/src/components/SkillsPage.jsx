import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
const SkillsPage = () => {
  return (
    <>
      <div className="m-20">
        <div className="ml-60 h-30 w-150  flex flex-col justify-center items-center ">
          <div className="font-bold text-sm flex-none ">Technologies</div>
          <div className="font-bold text-6xl">Skills i work with </div>
        </div>

        <div className="m-15 gap-80 flex justify-center items-center">
          {/* left side animation */}

          <div className="w-1/4">
            {/* image / label center me skill aye and uske circle me sab skills aaye  */}

            <div className="flex justify-center items-center flex-col border-blue-200 border-2 rounded-full h-95 w-95">
              <div className="flex justify-center items-center flex-col border-2 rounded-full h-70 w-70">
                <div className="flex justify-center items-center flex-col border-2 rounded-full h-55 w-55">
                  <div className="flex justify-center items-center flex-col border-2 rounded-full h-40 w-40">
                    <img src="../../public/skills.png" alt="" name="skills" />
                    <label htmlFor="Skills">Skills</label>

                    <div className="relative">

                      <div className=" absolute -mt-40">
                <FontAwesomeIcon icon={faReact} />
                <label htmlFor="react">React</label>
              </div>

              <div className="absolute -ml-20 -mb-30 -mt-40">
              <FontAwesomeIcon icon={faNodeJs} />
                <label htmlFor="react">Node.js</label>
              </div>
              {/* <div>
             <FontAwesomeIcon icon={faE} />
                <label htmlFor="react">Express.js</label>
              </div> */}

              <div>
             <FontAwesomeIcon icon={faDatabase} />
                <label htmlFor="react">MongoDB</label>
              </div>

              <div>
             <FontAwesomeIcon icon={faHtml5} />
                <label htmlFor="react">HTML</label>
              </div>

              <div>
             <FontAwesomeIcon icon={faCss3Alt} />
                <label htmlFor="react">CSS</label>
              </div>

              <div>
             <FontAwesomeIcon icon={faJs} />
                <label htmlFor="react">JS</label>
              </div>

              <div>
             <FontAwesomeIcon icon={faCode} />
                <label htmlFor="react">Problem solving</label>
              </div>
              <div>
             <FontAwesomeIcon icon={faGitAlt} />
                <label htmlFor="react">Git/GitHub</label>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
          {/* right side */}
          <div className=" w-1/2 text-xl ">
            <div className="font-bold text-4xl mb-5">
              Turning Ideas Into Products
            </div>
            I work across the full development stack, combining modern frontend
            technologies with powerful backend tools to build complete web
            applications. I enjoy creating responsive and intuitive interfaces
            while also focusing on efficient APIs, databases, and scalable
            backend systems. I’m comfortable working with technologies like
            React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, and Git,
            while constantly exploring new tools and technologies. For me,
            learning isn’t just about knowing a technology — it’s about using it
            to solve real-world problems and build something meaningful.
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
