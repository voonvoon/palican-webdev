import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import PaginationControl from "./components/PaginationControl";

export const revalidate = 0; // Disable caching

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1");
  const itemsPerPage = 3;
  const start = (currentPage - 1) * itemsPerPage;

  // Fetch one extra item to determine if there are more pages
  const projects = await getProjects(start, itemsPerPage + 1);

  // Check if there are more items than the current page limit
  const hasNextPage = projects.length > itemsPerPage;

  // Slice the projects array to only show the current page items
  const displayedProjects = hasNextPage
    ? projects.slice(0, itemsPerPage)
    : projects;

  return (
    <div className="p-8">
      <div className="text-5xl font-extrabold p-10">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Pelican Webdev
        </span>
      </div>
      <p className="mt-3 text-xl text-gray-600 p-8">
        Aloha everyone! Check out my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl ml-10">
        My Projects
      </h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {displayedProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <div className="group relative flex flex-col items-stretch hover:scale-105 transition cursor-pointer">
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
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {project?.name}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <PaginationControl currentPage={currentPage} hasNextPage={hasNextPage} />
    </div>
  );
}
