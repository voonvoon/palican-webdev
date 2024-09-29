import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import FrequentlyAsk from "../../components/FrequentlyAsk";
import ContactForm from "../../components/ContactForm";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog; // project cuz folder-> projects/[project]./page.tsx

  const blog = await getBlog(slug);

  return (
    <div className="p-1">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl font-bold drop-shadow p-6 max-[400px]:text-2xl">
          {blog.title.toUpperCase()}
        </h1>
      </div>

      {/* contents */}
      <div className="text-base text-gray-800 font-light mt-4 mb-12 p-6 leading-relaxed space-y-4 bg-white shadow-sm rounded-lg">
        <PortableText value={blog.content} />
      </div>

      {/* image here */}
      <Image
        src={blog.image}
        alt={blog.alt}
        width={480}
        height={270}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      ></Image>
      <br />
      <br />

      <FrequentlyAsk />
      <ContactForm />
    </div>
  );
}
