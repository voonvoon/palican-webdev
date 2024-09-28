import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";
import PaginationControl from "./components/PaginationControl";
import Plan from "./components/Plan";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

import Head from "next/head";
import TechShowcase from "./components/TechShowcase";
import FrequentlyAsk from "./components/FrequentlyAsk";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import ImageSection from "./components/Image";
import Title from "./components/Title";
import SEO from "./components/SEO";

import {
  localBusinessStructuredData,
  productWebsiteStructuredData,
} from "./strutureData/structuredData";

export const revalidate = 0; // Disable caching

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1");
  const itemsPerPage = 4;
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />{" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productWebsiteStructuredData),
        }}
      />{" "}
      <Head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10927177282"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10927177282');
        `,
          }}
        />
      </Head>
      <div className="p-8">
        <Title />

        {/* <h1 className="text-5xl font-extrabold pt-16 pb-8 pl-8">
        <ParticlesBackground />
          Welcome to{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
            Pelican Webdev
          </span>
        </h1>

        <h2 className="text-xl text-gray-500 pl-8 font-bold animate-fadeIn mb-8">
          {" "}
          E-commerce & Website Developer in Malaysia
        </h2>

        <div className="text-base text-gray-600 pl-8 animate-fadeIn">
          <Jumbotron
            text={[
              "Welcome to Palican Webdev...",
              "Specialize in developing e-commerce solutions",
              "Website Design And Development Service",
            ]}
          />
        </div>

        <p className="text-sm text-gray-400 pl-8 animate-fadeIn">
          I specialize in developing custom e-commerce solutions tailored to the
          unique needs of businesses and individuals. I also offer website
          design and development services to create professional, engaging
          websites that enhance online presence and drive results.
        </p>
        <h2 className="mt-12 font-bold text-gray-700 text-3xl ml-10">
          My Works
        </h2> */}

        {/* <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-16 ">
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
      </div> */}
        <Projects displayedProjects={displayedProjects} />

        <PaginationControl
          currentPage={currentPage}
          hasNextPage={hasNextPage}
        />

        <h2
          id="my-services"
          className="mt-12 mb-6 font-bold text-gray-700 text-3xl text-center"
        >
          Plans & Price
        </h2>

        <Plan />

        <ImageSection />
        <SEO />
        <About />

        <TechShowcase />
        <h2 className="mt-12 font-bold text-gray-700 text-3xl text-center">
          My Blogs
        </h2>

        <Blog blogs={blogs} />
        <FrequentlyAsk />
        <ContactForm />
      </div>
    </>
  );
}
