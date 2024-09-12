"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

type Feature = {
  text: string;
  highlight?: boolean;
};

type PlanType = {
  title: string;
  description: string;
  features: Feature[];
  priceBefore?: string;
  price?: string;
  popular?: boolean; // Add popular property
};

const Plan = () => {
  const plans: PlanType[] = [
    {
      title: "Standard",
      description: "For Company plan to create an E-commerce",
      features: [
        { text: "No Monthly Subscription fee!" },
        { text: "6 Pages Website" },
        { text: "Full E-commerce Website" },
        { text: "Unlimited Products" },
        { text: "Payment Gateway" },
        { text: "Fully Own Source Code" },
        { text: "Social Media Integration" },
        { text: "Live Chat Whatsapp Integration" },
        { text: "Authentication (User Login e.g., Google)" },
        { text: "Automated Email" },
        { text: "SEO App Friendly" },
        { text: "Cloud-based Database (MongoDB)" },
        { text: "Admin Dashboard" },
        { text: "Products CRM System" },
        { text: "Order Management System" },
        { text: "Domain & Hosting & SSL (free 1 year)" },
        { text: "Mobile Responsive" },
        { text: "Image Optimization (Cloudinary)" },
        { text: "Ultra-Speedy with Next.js" },
      ],
      priceBefore: "RM5500",
      price: "RM3900",
    },
    {
      title: "Premium",
      description:
        "SMEs, Corporate and Other Company plan to create an E-commerce",
      features: [
        { text: "Similar Product Recommendation", highlight: true },
        { text: "Coupon Discount System", highlight: true },
        { text: "Auto Invoice generation", highlight: true },
        { text: "12 Pages Website", highlight: true },
        {
          text: "Product Filtering(categories/brand..)",
          highlight: true,
        },
        { text: "No Monthly Subscription fee!" },

        { text: "Full E-commerce Website" },
        { text: "Unlimited Products" },

        { text: "Payment Gateway" },
        { text: "Fully Own Source Code" },
        { text: "Social Media Integration" },
        { text: "Live Chat Whatsapp Integration" },
        { text: "Authentication (User Login e.g., Google)" },
        { text: "Automated Email" },

        { text: "SEO App Friendly" },
        { text: "Cloud-based Database (MongoDB)" },
        { text: "Admin Dashboard" },
        { text: "Products CRM System" },

        { text: "Order Management System" },
        { text: "Domain & Hosting & SSL (free 1 year)" },
        { text: "Mobile Responsive" },
        { text: "Image Optimization (Cloudinary)" },
        { text: "Ultra-Speedy with Next.js" },
      ],
      priceBefore: "RM6500",
      price: "RM4900",
      popular: true, // Mark the Premium plan as popular
    },
    {
      title: "Custom Plan",
      description:
        "SMEs, Corporate and Other Company plan to create an E-commerce, Designed for companies with unique needs, Our Custom Plan offers tailored solutions and exclusive features to fit your business requirements. Get the flexibility and customization you need to scale and optimize your operations.",
      features: [],
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-20">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-2 pl-4 pr-4 mb-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 flex flex-col items-center text-center h-[40rem]">
              {/* Render ribbon for popular plans */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-lg font-bold px-4 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              <h3 className="mt-8 text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {plan.title}
              </h3>
              <h4 className="text-xs text-gray-500 mb-0 mt-2 p-4 sm:text-sm">
                {plan.description}
              </h4>

              <ul className="mb-6 space-y-2 m-8 overflow-y-auto h-auto custom-scrollbar p-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`text-gray-600 text-xs flex items-center sm:text-sm truncate ${
                      feature.highlight ? "font-bold" : ""
                    }`}
                  >
                    <IoIosArrowDroprightCircle color="green" />
                    <span className="flex items-center">
                      {feature.text}
                      {feature.highlight && (
                        <span className="text-yellow-500">
                          <MdOutlineWorkspacePremium color="gold" size={18} />
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.price && (
                <>
                  <p className="line-through text-sm text-gray-500">
                    {plan.priceBefore}
                  </p>
                  <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn text-lg font-bold">
                    {plan.price}
                  </p>
                </>
              )}

              <button
                className="mb-4 px-4 py-1 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Plan;
