"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ImageSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden and scaled down)
        animate={controls}
        className="rounded-lg shadow-lg"
      >
        <Image
          src="/images/ecommerce.png" // Replace with your actual image file path
          alt="palican webdev advertising images with qr code"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default ImageSection;

