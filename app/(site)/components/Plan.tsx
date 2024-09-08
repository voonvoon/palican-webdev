"use client";

// Sample component using Swiper.js with Tailwind CSS
import { Swiper, SwiperSlide } from "swiper/react"; // must use client else won't works
import "swiper/css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Plan = () => {
  const plans = [
    {
      title: "E-Commerce",
      description: "For Company plan to create an E-store",
      features: [
        "No Montly Subscription fee!",
        "Full E-commerce Website",
        "Unlimited Products",
        "Product Filtering(categories/brand)",
        "Payment Gateway",
        "Fully Own Source Code",
        "Social Media Intergration",
        "Live Chat Whatsapp Intergration",,
        "Authentication(User Login e.g Google)",
        "Automated Email",
        "Similar Product Recommendation",
        "SEO App Friendly",
        "Cloud-base Database",
        "Admin Dashboard",
        "Products CRM system",
        "Coupon Discount System",
        "Order Management System",
        "Domain & Hosting & SSL(free 1 year)",
        "Mobile Responsive",
        "Image Optimization(Cloudinary)",
        "Ultra-Speedy with Next.js"
      ],
      priceBefore: "RM5500",
      price: "RM4800 ++",
    },
    {
      title: "Company/Corporate",
      description: "SMEs, Corporate and Other Company",
      features: [
        "5-10 Dynamic pages",
        "Social Media Intergration",
        "Live Chat Whatsapp Intergration",,
        "Content management system",
        "Domain & Hosting & SSL(free 1 year)",
        "Mobile Responsive",
        "Image Optimization(Cloudinary)",
         "Ultra-Speedy with Next.js",
         "SEO App Friendly",
        
      ],
      priceBefore: "RM3500",
      price: "RM2480",
    },
    {
      title: "Personal",
      description: "For Self-employed, Enterprenuers, Start-up & Landing Page",
      features: [
        "1-2 Dynamic pages Or 1 page website",
        "Complete Web Design",
        "Social Media Intergration",
        "Live Chat Whatsapp Intergration",
        "Domain & Hosting & SSL(free 1 year)",
        "Content management system",
        "Mobile Responsive",
        "Image Optimization(Cloudinary)",
         "Ultra-Speedy with Next.js",
         "SEO App Friendly",
      ],
      priceBefore: "RM1600",
      price: "RM1250",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-20">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 mb-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 flex flex-col items-center text-center h-[32rem]">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {plan.title}
              </h3>
              <h4 className="text-sm text-gray-500 mb-4 sm:text-2xl">
                {plan.description}
              </h4>

              <ul className="mb-6 space-y-2 m-8 overflow-y-auto h-96 custom-scrollbar p-8">
                {" "}
                {/* Apply the custom class */}
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-xs flex items-center sm:text-sm truncate"
                  >
                    <IoIosArrowDroprightCircle color="green" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="line-through text-sm text-gray-500">
                {plan.priceBefore}
              </p>

              <p className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn text-lg font-bold">
                {plan.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Plan;
