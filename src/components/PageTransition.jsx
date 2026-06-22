import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";

// Simple crossfade — no translate, so there is no sliding motion.
// The Header lives in App.jsx (outside AnimatePresence) so it stays fully
// visible at all times and is never affected by this opacity transition.
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function PageTransition({ children }) {
  // Runs once when the new page enters the DOM (after exit with mode="wait").
  // Scroll first, then let React paint before AOS scans new elements.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const t = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
