import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="flex items-center justify-center px-3 py-12 bg-black text-white">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Let's Keep In Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/contact.png"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
              alt="contact"
            />
          </div>

          {/* Form */}
          <div className="flex-1 w-full">
            <form className="flex flex-col gap-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-cyan-400 focus:outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
