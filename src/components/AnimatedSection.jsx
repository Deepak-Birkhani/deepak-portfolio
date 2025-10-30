import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children, delay = 0, direction = "up" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // Start animating when 15% of the element is visible
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
