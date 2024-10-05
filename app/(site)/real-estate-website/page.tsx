"use client";

import React from "react";
import Image from "next/image";

interface Package {
  name: string;
  price: string;
  features: {
    functionalWebsite: boolean;
    contentUpload: boolean;
    hostingSetup: boolean;
    socialMediaIcons: boolean;
    numberOfListing: string;
    seoFriently: boolean;
    domainSetup: boolean;
    whatsappContactIcon: boolean;
    contactForm: boolean;
    searchListingFunction: boolean;
    revisions: number;
    numberDays: number;
  };
}

const packages: Package[] = [
  {
    name: "Basic",
    price: "RM900",
    features: {
      functionalWebsite: true,
      contentUpload: true,
      hostingSetup: true,
      socialMediaIcons: true,
      contactForm: true,
      seoFriently: false,
      whatsappContactIcon: true,
      searchListingFunction: true,
      domainSetup: true,
      numberOfListing: "unlimited",
      revisions: 2,
      numberDays: 4,
    },
  },
  {
    name: "Advance",
    price: "RM1300",
    features: {
      functionalWebsite: true,
      contentUpload: true,
      hostingSetup: true,
      socialMediaIcons: true,
      contactForm: true,
      seoFriently: true,
      whatsappContactIcon: true,
      searchListingFunction: true,
      domainSetup: true,
      numberOfListing: "unlimited",
      revisions: 5,
      numberDays: 6,
    },
  },
];

const RealEstateListing: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center sm:text-3xl ">
        Real Estate Listing Website For Property Agent
      </h1>
      <div className="relative mb-4">
        <Image
          src="/real-estate.jpg" // Replace with your image path
          alt="Stunning Family Home"
          width={600} // Set a width of your choice
          height={400} // Set a height of your choice
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  text-xl sm:text-2xl lg:text-3xl font-extrabold text-white opacity-90 
  px-4 sm:px-6 lg:px-8 text-center sm:my-6 lg: leading-tight sm:leading-snug lg:leading-normal"
        >
          Real Estate Agent Website with Content Management System (CMS)
        </h1>
      </div>

      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        Creating dynamic real estate listing websites tailored to the needs of
        real estate agents. I focus on delivering an intuitive user experience,
        allowing agents to easily showcase properties and manage listings
        through a robust content management system (CMS). your website not only
        looks professional but also functions seamlessly, enabling you to
        attract more clients and streamline your property management process.
        Let&apos; work together to elevate your online presence and drive
        success in your real estate business!
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Choose a plan</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border border-gray-200 text-sm sm:text-base">
                Package
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm sm:text-base">
                Standard
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm sm:text-base">
                Advance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Functional website
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.functionalWebsite ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.functionalWebsite ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Content upload(image/text)
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.contentUpload ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.contentUpload ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Search Listing By Category
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.searchListingFunction ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.contentUpload ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Hosting setup
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.hostingSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.hostingSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Domain setup
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.domainSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.hostingSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Social media icons
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Contact Form
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.contactForm ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                On-site SEO optimization
                <span className="ml-1 relative group inline-block">
                  <span className="text-gray-700 text-xs cursor-pointer flex items-center justify-center w-4 h-4 border-2 border-gray-700 rounded-full hover:bg-gray-300 transition duration-200">
                    ?
                  </span>
                  <div className="absolute left-0 top-full mt-1 opacity-0 group-hover:opacity-100 bg-gray-700 text-white font-light text-xs rounded-md p-2 z-10 w-52">
                    <ul className="list-disc list-inside">
                      <li>Keyword Research and Optimization</li>
                      <li>Goolge Search Console submission</li>
                      <li>Sitemap creation and submission</li>
                      <li>Title Tags and Meta Descriptions</li>
                      <li>Header Tags (H1, H2, H3)</li>
                      <li>Content Quality and Relevance</li>
                      <li>Image Optimization</li>
                      <li>URL Structure</li>
                      <li>Internal Linking</li>
                      <li>Mobile-Friendliness</li>
                      <li>Page Load Speed</li>
                      <li>User Experience (UX)</li>
                      <li>Schema Markup</li>
                      <li>Social Sharing Integration</li>
                      <li>Security (HTTPS)</li>
                    </ul>
                  </div>
                </span>
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.seoFriently ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Whatsapp Contact
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.whatsappContactIcon ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">✕</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Number of Listings
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.numberOfListing}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.numberOfListing}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Revisions
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.revisions}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.revisions}
              </td>
            </tr>

            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Delivery Time
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.numberDays} days
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.numberDays} days
              </td>
            </tr>

            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 font-bold text-sm sm:text-base relative">
                Price
                <span className="ml-1 relative group inline-block">
                  <span className="text-gray-700 text-xs cursor-pointer flex items-center justify-center w-4 h-4 border-2 border-gray-700 rounded-full hover:bg-gray-300 transition duration-200">
                    ?
                  </span>
                  <div className="absolute left-0 top-full mt-1 opacity-0 group-hover:opacity-100 bg-gray-700 text-white font-light text-xs rounded-md p-2 z-10 w-40">
                    Domain fee not included
                  </div>
                </span>
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].price}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].price}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="w-full mb-4 p-8 py-3 mt-5 bg-gray-500 text-white font-semibold shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() =>
            window.open(
              "https://wa.me/60183795728?text=Hello,%20I%20am%20interested%20in%20your%20services!",
              "_blank"
            )
          }
        >
          Contact
        </button>
      </div>
      <Image
        src="/real-estate-listing2.jpg" // Replace with your image path
        alt="Stunning Family Home"
        width={600} // Set a width of your choice
        height={400} // Set a height of your choice
        className="w-full h-auto rounded-lg"
      />
      <Image
        src="/real-estate-listing.jpg" // Replace with your image path
        alt="Stunning Family Home"
        width={600} // Set a width of your choice
        height={400} // Set a height of your choice
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-2xl font-bold mb-4">About this gig</h3>
      <h4 className="text-1xl font-bold mb-4">
        Get a Modern, Fast, and Secure Website Built with Next.js and React.js
      </h4>
      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        Looking for a cutting-edge web solution? I specialize in developing
        modern, responsive websites using Next.js and React.js, delivering a
        fast, SEO-friendly experience.
      </p>

      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        <strong>What I Offer in This Gig:</strong>
      </p>

      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed space-y-2">
        <li>
          <strong>Next.js</strong>: Server-Side Rendering (SSR) or Static Site
          for enhanced SEO and speed
        </li>
        <li>
          <strong>React.js</strong>, JavaScript/TypeScript, NPM, Git
        </li>
        <li>
          <strong>Tailwind CSS</strong>, CSS3, or React Bootstrap for beautiful,
          responsive design
        </li>
        <li>Headless CMS Integration (Sanity.io)</li>
        <li>Backend Development with Node.js, Express.js, React.js</li>
      </ul>

      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        <strong>Deployment Options:</strong> Vercel
      </p>

      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        <strong>Every Package Includes:</strong>
      </p>

      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed space-y-2">
        <li>100% responsive design (mobile, tablet, and desktop)</li>
        <li>SEO-friendly structure for better search engine rankings</li>
        <li>Cross-browser compatibility for consistent user experience</li>
        <li>Social media integration</li>
        <li>SSL installation for secure browsing</li>
        <li>Free deployment on Vercel</li>
      </ul>
      <Image
        src="/real-estate-listing3.jpg" // Replace with your image path
        alt="Stunning Family Home"
        width={600} // Set a width of your choice
        height={400} // Set a height of your choice
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default RealEstateListing;
