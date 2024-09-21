import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import FrequentAsk from "../../components/FrequentlyAsk";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project; // project cuz folder-> projects/[project]./page.tsx

  const project = await getProject(slug);

  return (
    <div className="p-1 mb-16">
      <header>
        <h1 className="mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl font-extrabold drop-shadow p-2 max-[400px]:text-2xl">
          {project.name}
        </h1>
      </header>
      <a
        href={project.url}
        title="View Project"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-lg text-gray-500 font-bold py-2 px-2 m-2 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
      >
        View Project
      </a>

      {/* contents */}
      <div className="text-sm text-gray-700 mt-10 p-4">
        <PortableText value={project.content} />
      </div>

      {/* image here */}
      <Image
        src={project.image}
        alt={project.alt}
        width={480}
        height={270}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      ></Image>
      <ContactForm />
      <FrequentAsk />
    </div>
  );
}
