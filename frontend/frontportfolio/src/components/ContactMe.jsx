import React from "react";
 
const ContactMe = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8">
        {/* Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 mb-10 sm:mb-16 mt-16 sm:mt-24 text-center lg:text-left lg:mx-0">
          <h2 className="font-bold text-xl">Get in touch</h2>
 
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Have something in mind
          </h1>
 
          <h2 className="text-base sm:text-lg">
            Have a project, idea or opportunity? Let's build something amazing
            together.
          </h2>
        </div>
 
        {/* Contact Form */}
        <div className="flex justify-center items-center mt-5 mb-16">
          <form
            className="flex flex-col justify-center items-center w-full max-w-3xl
            p-6 sm:p-10 shadow-lg shadow-black/20 rounded-4xl"
            action="/post"
          >
            {/* Form Header */}
            <div className="flex gap-2 flex-col w-full text-center lg:text-left">
              <h2 className="font-bold text-xl">SEND MESSAGE</h2>
 
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Let's work together.
              </h1>
 
              <h2 className="text-base sm:text-lg">
                Tell me about your idea and I'll get back to you.
              </h2>
            </div>
 
            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-10 w-full">
              <div className="flex-1 p-2 flex flex-col gap-2">
                <label htmlFor="name">Full name</label>
 
                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300 w-full"
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
 
              <div className="flex-1 p-2 flex flex-col gap-2">
                <label htmlFor="email">Email</label>
 
                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300 w-full"
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
 
            {/* Phone + Work Type */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-5 w-full">
              <div className="flex-1 p-2 flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone number</label>
 
                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300 w-full"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone no."
                />
              </div>
 
              <div className="flex-1 p-2 flex flex-col gap-2">
                <label htmlFor="selection">Work type</label>
 
                <select
                  id="selection"
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300 w-full"
                >
                  <option value="freelance">Freelance</option>
                  <option value="fulltime">Full time</option>
                  <option value="internship">Internship</option>
                  <option value="project">Project</option>
                </select>
              </div>
            </div>
 
            {/* Message */}
            <div className="w-full mt-5 flex flex-col gap-2">
              <label htmlFor="textArea">Your message</label>
 
              <textarea
                name="textArea"
                id="textArea"
                rows="4"
                placeholder="Tell me about your idea..."
                className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none resize-none focus:border-amber-300 w-full"
              />
            </div>
 
            {/* Button */}
            <button
              type="submit"
              className="mt-5 px-8 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition duration-300 w-full sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
 
export default ContactMe;