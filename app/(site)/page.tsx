import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";
import PaginationControl from "./components/PaginationControl";
import Plan from "./components/Plan";

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

  //blogs
  const blogs = await getBlogs();

  return (
    <div className="p-8">
      <div className="text-5xl font-extrabold pt-16 pb-16 pl-8">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
          Pelican Webdev
        </span>
      </div>

      <p className="text-lg text-gray-600 pl-8">Aloha everyone!</p>

      <p className="text-sm text-gray-400 pl-8">
        I specialize in building e-commerce solutions, delivering tailored websites for businesses and individuals. My expertise extends to creating custom personal and company websites, ensuring a professional and engaging online presence.
      </p>
      <h2 className="mt-12 font-bold text-gray-700 text-3xl ml-10">
        My Projects
      </h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-16 ">
        {displayedProjects.map((project) => (
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


      <h2 className="mt-12 font-bold text-gray-700 text-3xl ml-10 text-center">
        My Services
      </h2>

      <Plan />

      <h2 className="mt-12 font-bold text-gray-700 text-3xl ml-10 text-center">My Blogs</h2>

      {/* <div className="mt-5 grid md:grid-cols-4 lg:grid-cols-5 gap-8 p-4 mb-32 scroll">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog?.slug}`} key={blog._id}>
            <div className="group relative flex flex-col items-stretch hover:scale-105 transition cursor-pointer shadow-md p-1 ">
              <div className="w-full h-64 overflow-hidden rounded-md bg-gray-200 flex-shrink-0 group-hover:opacity-75">
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
                  <h3 className="text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {blog?.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
      <div className="mt-5 overflow-x-auto pb-4">
        <div className="inline-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog?.slug}`} key={blog._id}>
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
                    <h3 className="text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {blog?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
