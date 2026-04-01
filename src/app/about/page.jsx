import Image from "next/image";
export default async function Page() {
  // await new Promise((res) => setTimeout(res, 2000));
  return (
    <section className=" flex flex-col gap-7">
      <div className="relative w-full h-75px md:h-70">
        <Image
          src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg"
          //  // replace with your image

          alt="about hero"
          fill
          className="object-cover rounded-lg grayscale"
        />

        <div className="absolute bottom-6 left-6 bg-[#53c28b] px-4 py-2 rounded">
          <h2 className="text-white text-xl md:text-2xl font-bold">
            Crafting Modern Web Experiences
          </h2>
          <p className="text-sm text-white">
            React • Next.js • Clean UI • High Performance
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 py-3 text-left">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">Who Am I?</h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Frontend developer specializing in{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
              React & Next.js
            </span>
            , building modern, scalable, and user-focused web applications.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I turn ideas into clean, high-performance products with a strong
            focus on UI, performance, and usability.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently focused on building real-world, production-ready
            applications.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">What I Do</h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I build responsive, high-performance web applications with clean UI
            and seamless user experience.
          </p>

          <ul className="text-gray-400  mb-5">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✔</span> React & Next.js
              Development
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✔</span> API Integration & State
              Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✔</span> Performance Optimization
            </li>
          </ul>

          <button className="px-6 py-2 bg-linear-to-r from-cyan-400 to-blue-500  rounded-lg hover:scale-[1.1] transition-all">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
