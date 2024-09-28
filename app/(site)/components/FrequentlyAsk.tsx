// "use client";

// import { useState, useRef } from "react";

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [height, setHeight] = useState<number>(0);
//   const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

//   const handleToggle = (index: number) => {
//     if (activeIndex === index) {
//       setActiveIndex(null); // Collapse if clicked again
//     } else {
//       setActiveIndex(index); // Expand selected
//       setHeight(contentRefs.current[index]?.scrollHeight || 0); // Dynamically set height
//     }
//   };

//   const faqs = [
//     {
//       question: "What i do?",
//       answer:
//         "My name is Peter, I am a freelance developer base in Malaysia. I create clean and responsive websites specializing in e-commerce and other services.",
//     },
//     {
//       question: "What services do you offer?",
//       answer:
//         "We specialize on custom e-commerce website development, Website, SEO services, and website hosting.",
//     },
//     {
//       question: "How long does it take to build a website?",
//       answer:
//         "It typically takes 3-4 weeks for e-commerce Website, depending on the project's complexity and features. for normal website about 3-7 days.",
//     },
//     {
//       question: "Do you offer support after the website is live?",
//       answer: "Yes! We offer ongoing maintenance and support after launch.",
//     },
//     {
//       question: "How much does it cost to build a website?",
//       answer:
//         "Our pricing depends on the features and scale of the project. Contact us for a custom quote or refer to plan & price section.",
//     },
//     {
//       question: "Do you build websites other than e-commerce?",
//       answer:
//         "Yes, we also build personal, business, and portfolio websites to fit your needs.",
//     },
//     {
//       question: "Why do I need an e-commerce website?",
//       answer:
//         "An e-commerce website allows you to reach a wider audience, operate 24/7, and streamline your sales process, making it easier for customers to shop online.",
//     },
//     {
//       question: "Will you do SEO for the Website too?",
//       answer:
//         "Yes, I will provide SEO for the app. For an additional affordable cost, I’ll ensure the application has all the basic elements for SEO in place. please find out more about SEO here:"
//     }
//   ];

//   return (
//     // <div className="w-full max-w-lg mx-auto p-4 m-8 space-y-4">
//     <div className="w-full max-w-lg mx-auto p-4 space-y-4 mb-8">
//       <h2 className="mt-4 font-bold text-gray-700 text-3xl text-center mb-8">
//         Frequently Ask Question
//       </h2>
//       {faqs.map((faq, index) => (
//         <div key={index}>
//           <button
//             onClick={() => handleToggle(index)}
//             className="w-full text-left text-sm bg-gray-700 text-white  px-4 py-2  rounded-lg shadow-md focus:outline-none transition duration-200 sm:text-base"
//           >
//             {faq.question}
//             <span
//               className={`float-right transform transition-transform ${
//                 activeIndex === index ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               ⌄
//             </span>
//           </button>
//           <div
//             // stores the DOM element of each accordion section at the correct position (index) in the contentRefs array. When the accordion is expanded or collapsed, you can easily access and manipulate the DOM element by referencing contentRefs.current[index].
//             ref={(el: any) => (contentRefs.current[index] = el)}
//             className={`transition-all duration-500 ease-in-out overflow-hidden`}
//             style={{
//               maxHeight: activeIndex === index ? `${height}px` : "0",
//             }}
//           >
//             <div className="bg-gray-700 text-white p-4 mt-2 rounded-lg shadow-inner">
//               <p className="text-xs sm:text-base  font-light">{faq.answer}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [height, setHeight] = useState<number>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if clicked again
    } else {
      setActiveIndex(index); // Expand selected
      setHeight(contentRefs.current[index]?.scrollHeight || 0); // Dynamically set height
    }
  };

  const faqs = [
    {
      question: "What I do?",
      answer:
        "My name is Peter, I am a freelance developer based in Malaysia. I create clean and responsive websites specializing in e-commerce and other services.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We specialize in custom e-commerce website development, Website, SEO services, and website hosting.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "It typically takes 3-4 weeks for an e-commerce Website, depending on the project's complexity and features. For a normal website, about 3-7 days.",
    },
    {
      question: "Do you offer support after the website is live?",
      answer: "Yes! We offer ongoing maintenance and support after launch.",
    },
    {
      question: "How much does it cost to build a website?",
      answer:
        "Our pricing depends on the features and scale of the project. Contact us for a custom quote or refer to the plan & price section.",
    },
    {
      question: "Do you build websites other than e-commerce?",
      answer:
        "Yes, we also build personal, business, and portfolio websites to fit your needs.",
    },
    {
      question: "Why do I need an e-commerce website?",
      answer:
        "An e-commerce website allows you to reach a wider audience, operate 24/7, and streamline your sales process, making it easier for customers to shop online.",
    },
  ];

  const seoFaq = {
    question: "Will you do SEO for the Website too?",
    answer:
      "Yes, I provide all necessary SEO services, including Google Search Console submission, Sitemap, Keyword Research, On-Page Optimization, and more with an additional cost. However, as my core service is application development, I recommend hiring an SEO expert or agency for advanced SEO needs.",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const structureDataSeoFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Will you do SEO for the Website too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I provide all necessary SEO services, including Google Search Console submission, Sitemap, Keyword Research, On-Page Optimization, and more with an additional cost. However, as my core service is application development, I recommend hiring an SEO expert or agency for advanced SEO needs."
      }
    }
  }
  

  return (
    <div className="w-full max-w-lg mx-auto p-4 space-y-4 mb-8">
      {/* Add the JSON-LD structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structureDataSeoFaq),
        }}
      />

      <h2 className="font-bold text-gray-700 text-3xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left text-sm bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none transition duration-200 sm:text-base"
          >
            {faq.question}
            <span
              className={`float-right transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ⌄
            </span>
          </button>
          <div
            ref={(el: any) => (contentRefs.current[index] = el)}
            className={`transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              maxHeight: activeIndex === index ? `${height}px` : "0",
            }}
          >
            <div className="bg-gray-700 text-white p-4 mt-2 rounded-lg shadow-inner">
              <p className="text-xs sm:text-base font-light">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => handleToggle(faqs.length)} // Unique index for SEO section
          className="w-full text-left text-sm bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none transition duration-200 sm:text-base"
        >
          {seoFaq.question}
          <span
            className={`float-right transform transition-transform ${
              activeIndex === faqs.length ? "rotate-180" : "rotate-0"
            }`}
          >
            ⌄
          </span>
        </button>
        <div
          ref={(el: any) => (contentRefs.current[faqs.length] = el)} // Last index for SEO
          className={`transition-all duration-500 ease-in-out overflow-hidden`}
          style={{
            maxHeight: activeIndex === faqs.length ? `${height}px` : "0",
          }}
        >
          <div className="bg-gray-700 text-white p-4 mt-2 rounded-lg shadow-inner">
            <p className="text-xs sm:text-base font-light">{seoFaq.answer}</p>
            <br />
            <Link
              //onClick={() => (window.location.href = "/blogs/what-we-can-do-to-improve-your-seo")}
              href="/blogs/what-we-can-do-to-improve-your-seo"
              className="mt-8 text-white bg-blue-500 px-4 py-2 rounded-lg"
            >
              My SEO Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
