import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project; // project cuz folder-> projects/[project]./page.tsx

  const project = await getProject(slug);

  return (
    <div className="p-16">
      <header className="flex item-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow p-2">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition "
        >
          View Project
        </a>
      </header>

      {/* contents */}
      <div className="text-sm text-gray-700 mt-10">
        <PortableText value={project.content} />
      </div>

      {/* image here */}
      <Image
        src={project.image}
        alt={project.alt}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      ></Image>
    </div>
  );
}
