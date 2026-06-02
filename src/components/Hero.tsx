import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-bold"
      >
        Akshay R
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "AI/ML Enthusiast",
          2000,
          "Information Science Student",
          2000,
        ]}
        repeat={Infinity}
        className="text-cyan-400 text-2xl mt-4"
      />

      <p className="max-w-2xl mt-6 text-gray-300">
        Building AI-powered applications and scalable web solutions.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Resume
        </button>

        <button className="border border-cyan-400 px-6 py-3 rounded-lg">
          Projects
        </button>
      </div>
    </section>
  );
}

export default Hero;