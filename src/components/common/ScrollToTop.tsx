import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={handleScrollToTop}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 80,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            fixed
            bottom-8
            right-8
            z-[999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full

            border
            border-blue-500/20

            bg-slate-900/80
            backdrop-blur-xl

            text-white

            shadow-lg
            shadow-blue-500/20

            transition-all
            duration-300

            hover:border-blue-500/50
            hover:bg-blue-600
            hover:shadow-blue-500/40

            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            focus:ring-offset-2
            focus:ring-offset-slate-950
          "
        >
          <HiArrowUp className="text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;