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
      <header className="flex item-center justify-between">
        <h1 className=" text-2xl font-bold drop-shadow p-2 max-[400px]:text-2xl">
          {blog.title.toUpperCase()}
        </h1>
      </header>

      {/* contents */}
      <div className="text-sm text-gray-700 mt-10 p-4">
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
      <br/>
      <br/>
      
      <FrequentlyAsk />
      <ContactForm />
    </div>
  );
}
