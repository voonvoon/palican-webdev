"use client";

import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/types/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Swiper autoplay styles

// Defining a separate BlogProps type makes it immediately clear that you're defining the structure of the component’s props.
type BlogProps = {
  blogs: Blog[];
};

// Blog component using Swiper for swipable blog items
const Blog = ({ blogs }: BlogProps) => {
  return (
    <div className="mt-5 overflow-x-auto pb-4">
      <Swiper
        modules={[Autoplay]} // Enable autoplay module
        spaceBetween={16} // Space between slides
        slidesPerView={1} // Adjust to show one slide at a time; you can change this based on the screen size
        loop={true} // Make it loop infinitely
        autoplay={{
          delay: 1500, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay running after user interactions
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="p-4"
      >
        {blogs?.map((blog: Blog) => (
          <SwiperSlide key={blog._id}>
            <Link href={`/blogs/${blog?.slug}`}>
              <div className="group relative flex flex-col items-stretch hover:scale-105 transition cursor-pointer shadow-md p-1">
                <div className="w-full h-35 overflow-hidden rounded-md bg-gray-200 flex-shrink-0 group-hover:opacity-75">
                  {blog.image && (
                    <Image
                      src={blog.image}
                      alt={blog.alt || "Project Image"}
                      width={750}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="mt-4 flex justify-between flex-grow">
                  <div>
                    <h3 className="text-sm text-gray-700 p-2">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 "
                      ></span>
                      {blog?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
