import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AnimatedSection from "./components/AnimatedSection";
import Loader from "./components/Loader";



export default function App() {
  return (
    <>

      <Loader />

      {/* 🧭 Top Navigation */}
      <Navbar />

      {/* 🎯 Hero Section (no animation — already dynamic) */}
      <Hero />

      {/* 🔥 Animated Sections */}
      <AnimatedSection delay={0.1} direction="up">
        <About />
      </AnimatedSection>

      <AnimatedSection delay={0.15} direction="up">
        <Education />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="left">
        <Skills />
      </AnimatedSection>

      <AnimatedSection delay={0.3} direction="right">
        <Projects />
      </AnimatedSection>

      <AnimatedSection delay={0.4} direction="up">
        <Certificates />
      </AnimatedSection>

      <AnimatedSection delay={0.5} direction="up">
        <Contact />
      </AnimatedSection>

      {/* 🧩 Footer (can also fade in slightly) */}
      <AnimatedSection delay={0.6} direction="up">
        <Footer />
      </AnimatedSection>
      <Toaster position="top-right" reverseOrder={false} />

    </>
  );
}
