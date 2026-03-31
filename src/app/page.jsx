import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between min-h-[80vh] gap-10">
      {/* LEFT */}
      <div className="flex flex-col justify-center text-left max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Building modern web experiences with
          <br />
          {""}
          <span className="bg-linear-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            React & Next.js
          </span>
        </h1>

        <p className="pt-4 text-lg text-gray-400">
          I create fast, scalable, and user-focused web applications using
          modern frontend technologies.
        </p>

        {/* CTA */}
        <div className="pt-6 flex gap-4">
          <button className="px-5 py-2 bg-cyan-500 text-black font-medium rounded hover:scale-[1.1] hover:transition-all cursor-pointer">
            View Projects
          </button>

          <button className="px-5 py-2 border border-cyan-500 rounded hover:scale-[1.1] hover:transition-all cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="shrink-0">
        <Image
          width={500}
          height={500}
          src="/hero.png"
          alt="hero image"
          className="object-contain"
        />
      </div>
    </div>
  );
}
