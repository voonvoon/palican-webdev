import React from "react";

interface Package {
  name: string;
  price: string;
  details: string;
}

const packages: Package[] = [
  {
    name: "Basic Plan",
    price: "RM800/month",
    details: "Ideal for individuals looking to list a few properties.",
  },
  {
    name: "Premium Plan",
    price: "$1000/month",
    details: "Best for agencies with a larger portfolio.",
  }
];

const RealEstateListing: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
         Realtor, Agent, Real Estate Website
      </h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Custom, professional & modern Real Estate Website for agent, realtor
      </h2>
      <p className="text-gray-600 mb-4">
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
      <img
        src="/real-estate.jpg" // Replace with your image path
        alt="Stunning Family Home"
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Choose Your Package</h3>
        {packages.map((pkg, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">{pkg.name}</h4>
            <p className="text-xl font-bold text-green-600">{pkg.price}</p>
            <p className="text-gray-600">{pkg.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateListing;
