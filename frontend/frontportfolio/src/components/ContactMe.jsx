import React from "react";
import contactMe from "../images/contactMe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
const ContactMe = () => {
  return (
   
    <div

      style={{ backgroundImage: `URL(${contactMe})` }}
      className="min-h-screen w-full flex justify-around text-white bg-[#080B10] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="leftDiv m-auto w-130 "
              >
        <div className="font-sans ">GET IN TOUCH</div>
       <div className="text-7xl font-serif">

        <div>Let’s Build </div>
        <div className="">Something <span className="text-[#1E40AF]">Great</span> </div>
        <div>Together.</div>
       </div>


        <div className="font-sans  mt-10 text-lg">
          I’m always open to discussing new projects, creative ideas or
          opportunities. Feel free to reach out, I’ll get back to you soon.
        </div>

        <div className="flex flex-col gap-7 relative top-10 text-lg">

        <div>
          <i></i>
          <div >nitinsaini07330@gmail.com</div>
        </div>
        <div>
          <i></i>
          <div>+91 70277-96056</div>
        </div>
        <div>
          <i></i>
          <div> Chandigarh, India</div>
        </div>
        </div>

        <div className="relative top-15 h-fit space-x-5 ">
           <a
                href="https://www.linkedin.com/in/nitin-saini-ba1a64354/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="https://www.instagram.com/nitin_saini0234?stkn=bHRycXY2OHlqcWxu&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://wa.me/qr/MPJMSJWLHFNJP1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faWhatsapp}
                />
              </a>
              <a href="mailto:nitinsaini07330@gmail.com">
                <FontAwesomeIcon
                  className="text-3xl sm:text-4xl hover:scale-125 transition-transform duration-200"
                  icon={faEnvelope}
                />
              </a>
        </div>
  
      </motion.div>

      
     
      <div className="rightDiv  m-auto text-white bg-none  max-h-fit min-h-fit w-120 p-10 border border-white/10  bg-[#080B10] rounded-2xl "> 
        <form className="flex flex-col border border-white/10  p-5 gap-10 rounded-2xl " action="">
      <input placeholder="Enter Name" className="name border focus-within:border-[#1E40AF] outline-none  border-white/10 p-5 rounded-2xl " type="text" />
      <input placeholder="Enter Email " className="email border-2 focus-within:border-[#1E40AF] outline-none p-5 rounded-2xl border-white/10" type="text" />
      <textarea  placeholder="Enter Message" className="message border focus-within:border-[#1E40AF] outline-none p-5 rounded-2xl border-white/10" name="" id=""></textarea>
      <div className="flex justify-center items-center h-15 ">
      <button className=" w-full bg-[#1E40AF]  border border-white/10 h-full  rounded-2xl " type="submit">Submit</button>

      </div>
        </form>
 </div>
      </div>
  );
};

export default ContactMe;
