import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelican Webdev",
  description:
    "Full-stack web developer specializing in e-commerce solutions using Next.js, Node.js, and MongoDB. Helping businesses build fast, scalable, and user-friendly websites.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //get all of our pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 p-4">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Pelican Eccom
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {pages.map((page) => (
              <Link href={`/${page.slug}`} key={page._id} className="hover:underline transition">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
