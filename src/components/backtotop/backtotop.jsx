import './backtotop.css';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export function Backtotop() {

  const [visible, setVisible] = useState(false);

  // Track scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollToTop}
            className="back-to-top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              scale: { type: "spring", bounce: 0.5, duration: 0.1 },
            }}
          >
            ⬆
          </motion.button>
      )}
    </AnimatePresence>
  );
}
