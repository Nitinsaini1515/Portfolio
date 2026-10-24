import React from "react";
import quoteImage from "../../images/quoteImage.png";
import { motion } from "motion/react";
const QuoteCard = () => {
  return (
    <div className="h-screen">
      <div className="w-full min-h-screen flex justify-around items-center bg-[#F8F3E8] px-10 gap-10]">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
         
          className="left w-1/2"
        >
          <div className="quoteDiv font-serif text-9xl text-[#1E40AF] ">“</div>
          <h2 className="font-serif text-6xl">
            “Code is not just about writing programs, it’s about solving{" "}
            <span className="text-[#1E40AF]">real world problems.</span>”
          </h2>
        </motion.div>
        <div className="right h-140 w-100 opacity-80">
          <img src={quoteImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
