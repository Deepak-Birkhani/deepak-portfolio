import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";
export default function Hero() {
  const typedRef = useRef(null);
  const ref = useRef(null);

  // Track scrolling progress for parallax/fade effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smoothly move section upward & fade when scrolling
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer 💻",
        "Machine Learning Enthusiast 🤖",
        "Creative Engineer 🚀",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <motion.section
  ref={ref}
  style={{ y, opacity }}
  id="home"
  className="relative min-h-screen flex flex-col justify-center items-center 
  bg-gradient-to-br from-indigo-100 via-white to-indigo-50 
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
  text-center px-4 overflow-hidden"
>
  <ParticlesBackground />


      <h1 className="text-5xl md:text-6xl font-bold text-gray-500 mb-4">
        Hi, I’m{" "}
        <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Deepak Birkhani
        </span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
        <span ref={typedRef}></span>
      </h2>

      <p className="mt-6 text-gray-600 max-w-xl">
        Passionate about building intelligent, user-focused web solutions —
        blending creativity and AI to make impactful tech.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
}
