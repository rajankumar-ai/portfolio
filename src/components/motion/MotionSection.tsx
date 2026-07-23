import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  variants: Variants;
  delay?: number;
  className?: string;
};

function MotionSection({
  children,
  variants,
  delay = 0,
  className = "",
}: MotionSectionProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionSection;