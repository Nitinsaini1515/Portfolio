
import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className="w-full">

        {/* Header */}
        <div className="ml-65 flex flex-col gap-4 mt-30 h-30 w-200">
          <h2 className="font-bold text-xl">Get in touch</h2>

          <h1 className="text-4xl font-bold">
            Have Something in Mind
          </h1>

          <h2 className="text-medium">
            Have a project, idea or opportunity? Let's build something amazing together.
          </h2>
        </div>

        {/* Contact Form */}
        <div className="h-170  flex justify-center items-center mt-5">

          <form
            className="flex flex-col justify-center items-center w-250 h-150 shadow-lg shadow-black/20 rounded-4xl"
            action="/post"
          >

            {/* Form Header */}
            <div className="flex flex-col h-30 w-200">
              <h2 className="font-bold text-xl">SEND MESSAGE</h2>

              <h1 className="text-4xl font-bold">
                Let's work together.
              </h1>

              <h2 className="text-medium">
                Tell me about your idea and I'll get back to you.
              </h2>
            </div>

            {/* Name + Email */}
            <div className="flex gap-20 mt-10">

              <div className="w-100 p-2 flex flex-col gap-2">
                <label htmlFor="name">Full Name</label>

                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300"
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="w-100 p-2 flex flex-col gap-2">
                <label htmlFor="email">Email</label>

                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300"
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

            </div>

            {/* Phone + Work Type */}
            <div className="flex gap-20 mt-5">

              <div className="w-100 p-2 flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone number</label>

                <input
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone no."
                />
              </div>

              <div className="w-100 p-2 flex flex-col gap-2">
                <label htmlFor="selection">Work Type</label>

                <select
                  id="selection"
                  className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none focus:border-amber-300"
                >
                  <option value="freelance">Freelance</option>
                  <option value="fulltime">Full Time</option>
                  <option value="internship">Internship</option>
                  <option value="project">Project</option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div className="w-200 mt-5 flex flex-col gap-2">
              <label htmlFor="textArea">Your Message</label>

              <textarea
                name="textArea"
                id="textArea"
                rows="4"
                placeholder="Tell me about your idea..."
                className="border border-gray-300 rounded-2xl p-3 shadow-sm shadow-black/20 outline-none resize-none focus:border-amber-300"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-5 px-8 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

export default ContactMe