import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-8">
        
        {/* 👇 Image — slides in from the left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/deepak.png"
            alt="Deepak Birkhani"
            className="rounded-2xl shadow-lg w-80 h-100 object-cover"
          />
        </motion.div>

        {/* 👇 Text — slides in from the right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I’m <span className="font-semibold">Deepak Birkhani</span>, a passionate developer
            with a strong foundation in machine learning, AI, and web development.  
            I enjoy building intelligent systems and dynamic web apps that combine creativity
            with functionality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I’m currently exploring cutting-edge technologies like deep learning and
            generative AI to create real-world solutions that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

