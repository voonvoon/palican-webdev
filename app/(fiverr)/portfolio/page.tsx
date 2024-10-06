import { getAllProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
// import { PortableText } from "next-sanity";

export default async function Fiverr() {
  // Fetch projects
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-750 min-h-screen">
      <h1 className="text-4xl font-bold text-white text-center mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <Image
              src={project.image} // Use your project image URL
              alt={project.name}
              width={400} // Set a specific width
              height={200} // Set a specific height
              className="object-cover h-48 w-full" // Set height and width for better responsiveness
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white text-center mb-2">
                {project.name}
              </h2>
              {/* Uncomment to display content
              <p className="text-sm font-light text-gray-300"><PortableText value={project?.content}/></p> 
              */}
              <a
                href={project.url} // Use your project link
                className="w-full text-center inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
