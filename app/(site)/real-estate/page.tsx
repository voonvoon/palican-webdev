'use client'

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
    numberOfPages: number;
    seoFriently: boolean;
    domainSetup:boolean;
    whatsappContactIcon: boolean;
    contactForm: boolean;
    searchListingFunction: boolean;
    revisions: number;
  };
}

const packages: Package[] = [
  {
    name: "Basic",
    price: "RM800",
    features: {
      functionalWebsite: true,
      contentUpload: true,
      hostingSetup: true,
      socialMediaIcons: true,
      contactForm: true,
      seoFriently: false,
      whatsappContactIcon: true,
      searchListingFunction: true,
      domainSetup:true,
      numberOfPages: 5,
      revisions: 2,
    },
  },
  {
    name: "Advance",
    price: "RM1200",
    features: {
      functionalWebsite: true,
      contentUpload: true,
      hostingSetup: true,
      socialMediaIcons: true,
      contactForm: true,
      seoFriently: true,
      whatsappContactIcon: true,
      searchListingFunction: true,
      domainSetup:true,
      numberOfPages: 10,
      revisions: 5,
    },
  },
];

const RealEstateListing: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="relative mb-4">
        <Image
          src="/real-estate.jpg" // Replace with your image path
          alt="Stunning Family Home"
          width={600} // Set a width of your choice
          height={400} // Set a height of your choice
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  text-xl sm:text-2xl lg:text-3xl font-extrabold text-white opacity-90 
  px-4 sm:px-6 lg:px-8 text-center sm:my-6 lg:my-8 leading-tight sm:leading-snug lg:leading-normal">
  Real Estate Agent Website with Content Management System (CMS)
</h1>

      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Create a Custom, professional & modern Real Estate Website for property agent
      </h2>
      <p className="text-gray-600 text-sm sm:text-base font-normal mb-4 leading-relaxed">
        As a skilled web developer, I specialize in creating dynamic real estate
        listing websites tailored to the needs of real estate agents. I focus on
        delivering an intuitive user experience, allowing agents to easily
        showcase properties and manage listings through a robust content
        management system (CMS). With my expertise, I ensure that your website
        not only looks professional but also functions seamlessly, enabling you
        to attract more clients and streamline your property management process.
        Let's work together to elevate your online presence and drive success in
        your real estate business!
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Choose Your Package</h3>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.functionalWebsite ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.contentUpload ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.contentUpload ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.hostingSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.hostingSetup ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                SEO Optimization
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.seoFriently ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
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
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.socialMediaIcons ? (
                  <span className="text-blue-500">✓</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
                Number of pages
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[0].features.numberOfPages}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 text-center text-sm sm:text-base">
                {packages[1].features.numberOfPages}
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
              <td className="py-1 px-2 sm:py-2 sm:px-4 border border-gray-200 font-bold text-sm sm:text-base">
                Price
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
                className="w-full mb-4 p-8 py-1 mt-5 bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
    </div>
  );
};

export default RealEstateListing;
