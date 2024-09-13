import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.h4
      className="text-sm bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
      initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0, 1, 1],
        rotate: [0, 5, -5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, 5],
        textShadow: "0px 0px 12px rgba(255, 255, 255, 0.8)",
        transition: { duration: 0.3 },
      }}
    >
      Pelican Webdev
    </motion.h4>
  );
};

export default Logo;
