"use client";

import { useState, useRef } from "react";

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
      question: "What i do?",
      answer:
        "My name is Peter, I am a freelance developer base in Malaysia. I create clean and responsive websites specializing in e-commerce and other services.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We specialize on custom e-commerce website development, Website, SEO services, and website hosting.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "It typically takes 3-4 weeks for e-commerce Website, depending on the project's complexity and features. for normal website about 3-7 days.",
    },
    {
      question: "Do you offer support after the website is live?",
      answer: "Yes! We offer ongoing maintenance and support after launch.",
    },
    {
      question: "How much does it cost to build a website?",
      answer:
        "Our pricing depends on the features and scale of the project. Contact us for a custom quote or refer to plan & price section.",
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

  return (
    // <div className="w-full max-w-lg mx-auto p-4 m-8 space-y-4">
    <div className="w-full max-w-lg mx-auto p-4 space-y-4 mb-8">
      <h2 className="mt-4 font-bold text-gray-700 text-3xl text-center mb-8">
        Frequently Ask Question
      </h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left text-sm bg-gray-700 text-white  px-4 py-2  rounded-lg shadow-md focus:outline-none transition duration-200 sm:text-base"
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
            // stores the DOM element of each accordion section at the correct position (index) in the contentRefs array. When the accordion is expanded or collapsed, you can easily access and manipulate the DOM element by referencing contentRefs.current[index].
            ref={(el: any) => (contentRefs.current[index] = el)}
            className={`transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              maxHeight: activeIndex === index ? `${height}px` : "0",
            }}
          >
            <div className="bg-gray-700 text-white p-4 mt-2 rounded-lg shadow-inner">
              <p className="text-xs sm:text-base  font-light">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
