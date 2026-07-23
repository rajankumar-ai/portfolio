import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative flex h-96 w-96 items-center justify-center rounded-full border-4 border-blue-500/30 bg-slate-900 shadow-2xl">
        <span className="text-lg text-slate-500">
          Your Photo
        </span>
      </div>
    </motion.div>
  );
}

export default HeroImage;