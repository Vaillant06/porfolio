import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
