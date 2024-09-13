"use client";

// components/TechShowcase.tsx
import { motion } from "framer-motion";

const technologies = [
    { name: "nodejs", image: "/images/nodejs.png", description: "Efficient JavaScript runtime for scalable applications" },
    { name: "Nextjs", image: "/images/next.svg", description: "React framework for server-side rendering, static sites, improved SEO and Super Fast!" },
    { name: "Reactjs", image: "/images/reactjs.png", description: "Flexible UI library for building interactive user interfaces" },
    { name: "TypeScript", image: "/images/typescript.svg", description: "JavaScript with static types for improved code reliability" },
    { name: "Tailwind CSS", image: "/images/tailwindcss.png", description: "Utility-first CSS framework for rapid custom design" },
    { name: "MongoDB", image: "/images/mongoDB.svg", description: "Flexible NoSQL database for scalable data storage solutions" },
    { name: "Sanity.io", image: "/images/sanityio.svg", description: "Customizable headless CMS for structured content management" },
    { name: "Cloudinary", image: "/images/cloudinary.svg", description: "Comprehensive image management and optimization platform" },
    { name: "Chip-In", image: "/images/chip-in.svg", description: "Seamless payment solutions for easy transaction processing" },
    { name: "Vercel", image: "/images/vercel.jpg", description: "Deploy fast, scalable, and globally optimized Next.js apps effortlessly" },
  ];
  

const TechShowcase = () => {
  return (
    <div className=" py-16 shadow-lg p-4">
      <h2 className="text-center text-2xl font-bold mb-4 sm:text-3xl">
          Powewful Technology Stack
      </h2>
      <h2 className="text-center text-lg mb-8 sm:text-2xl">
          Your E-commerce Website is Lightning Fast!!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white p-4 rounded-lg shadow-lg flex flex-col items-center group"
          >
            <img src={tech.image} alt={tech.name} className="w-20 h-20 mb-2 object-contain" />
            <h3 className="text-sm font-semibold text-gray-800 sm:text-lg">{tech.name}</h3>
            {/* <div className="cursor-pointer p-6 pl-10 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"> */}
            <div className="cursor-pointer p-4 pl-6 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white text-sm rounded-lg opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              {tech.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;
