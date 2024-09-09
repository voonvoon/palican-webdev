// import { getPage } from "@/sanity/sanity-utils";
// import { PortableText } from "next-sanity";

// type Props = {
//   params: { slug: string };
// };

// export default async function Page({ params }: Props) {
//   const page = await getPage(params.slug);

//   return (
//     <div className="p-16">
//       <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow ">
//         {page.title}
//       </h1>
//       <div className="text-sm text-gray-700 mt-10">
//         <PortableText value={page.content} />
//       </div>
//     </div>
//   );
// }

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Jumbotron from "../components/Jumbotron";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="p-16">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl font-extrabold drop-shadow">
        {page.title}
      </h1>

      {params.slug === "about" && (
        <div className="flex flex-col items-center justify-center mt-10 space-x-6">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            //className="rounded-sm shadow-xl border-1"
            className="rounded-lg border-1 shadow-2xl transition-transform transform hover:scale-105 hover:opacity-95"
          />

          <div className="text-sm font-semibold font-serif text-gray-700 mt-5">
            <Jumbotron
              text={[
                "Welcome to Palican Webdev..",
                "I'm Peter😎",
                "Nice to meet you ...😃",
                "I specializing in building e-commerce for small business..",
                "Ask me anything, I will be happy to answer..."
              ]}
            />
          </div>
        </div>
      )}

      <div className="text-sm text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
