"use client";

import Image from "next/image";
import Link from "next/link";

const SEO = () => {
  return (
    <div className=" shadow-lg flex flex-col md:flex-row items-center justify-around mt-28 mb-28  gap-x-4">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/seo.jpg"
          alt="SEO Illustration"
          width={600}
          height={300}
          className="w-full h-auto rounded-lg "
        />
      </div>

      {/* Right Column: Title and Description */}
      <div className="flex flex-col  pt-4 pb-4 md:w-1/2 mt-4 m-4 md:mt-0 md: text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Search Engine Optimization(SEO)
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-light mb-12 leading-relaxed">
          When creating an ecommerce website, improve your website&apos;s
          visibility and ranking on search engines with effective SEO strategies
          tailored for your business.
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
