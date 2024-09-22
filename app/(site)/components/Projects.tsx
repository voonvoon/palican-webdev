"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Swiper autoplay styles

type ProjectsProps = {
  displayedProjects: Project[];
};

const Projects = ({ displayedProjects }: ProjectsProps) => {
  return (
    <div className="mt-10 grid  md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 mb-16">

      {displayedProjects.map((project: Project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          <div className="group relative flex flex-col items-stretch hover:scale-105 transition cursor-pointer shadow-md p-2">
            <div className="w-full h-64 overflow-hidden rounded-md bg-gray-200 flex-shrink-0 group-hover:opacity-75">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.alt || "Project Image"}
                  width={750}
                  height={300}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="mt-4 flex justify-between flex-grow">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {project?.name}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
