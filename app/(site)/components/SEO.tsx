"use client";

import Image from "next/image";
import Link from "next/link";

const SEO = () => {
  return (
    <div className="  flex flex-col md:flex-row items-center justify-around p-8 mt-28 mb-28  gap-x-4">
      {/* Left Column: Image */}
      <div className="md:w-1/2">
        <Image
          src="/seo.jpg" // Replace with your actual image path
          alt="SEO Illustration"
          width={600}
          height={300}
          className="rounded-lg shadow-lg ml-4"
        />
      </div>

      {/* Right Column: Title and Description */}
      <div className="md:w-1/2 mt-6 md:mt-0 md: text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Search Engine Optimization
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-light mb-4 leading-relaxed">
          Improve your website's visibility and ranking on search engines with
          effective SEO strategies tailored for your business.
        </p>

        <div className="flex justify-center">
          <Link
            href="/blogs/what-we-can-do-to-improve-your-seo"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out"
          >
            Learn More About SEO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SEO;
