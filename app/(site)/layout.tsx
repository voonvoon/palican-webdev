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
            Pelican Webdev
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline transition"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>

      {/* footer */}

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.54 6.42c-.8.35-1.65.58-2.55.69a4.48 4.48 0 0 0 1.96-2.48 8.94 8.94 0 0 1-2.84 1.08 4.48 4.48 0 0 0-7.68 4.08A12.71 12.71 0 0 1 2.8 4.68a4.47 4.47 0 0 0 1.39 5.98 4.47 4.47 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.46.12-.96.18-1.46.18-.36 0-.71-.04-1.05-.1a4.47 4.47 0 0 0 4.18 3.12A8.96 8.96 0 0 1 1.64 20a12.66 12.66 0 0 0 6.88 2.02c8.27 0 12.8-6.85 12.8-12.79v-.58a9.15 9.15 0 0 0 2.23-2.33c-.81.36-1.69.6-2.6.71a4.52 4.52 0 0 0 1.97-2.48z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.54 6.42c-.8.35-1.65.58-2.55.69a4.48 4.48 0 0 0 1.96-2.48 8.94 8.94 0 0 1-2.84 1.08 4.48 4.48 0 0 0-7.68 4.08A12.71 12.71 0 0 1 2.8 4.68a4.47 4.47 0 0 0 1.39 5.98 4.47 4.47 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.46.12-.96.18-1.46.18-.36 0-.71-.04-1.05-.1a4.47 4.47 0 0 0 4.18 3.12A8.96 8.96 0 0 1 1.64 20a12.66 12.66 0 0 0 6.88 2.02c8.27 0 12.8-6.85 12.8-12.79v-.58a9.15 9.15 0 0 0 2.23-2.33c-.81.36-1.69.6-2.6.71a4.52 4.52 0 0 0 1.97-2.48z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.52 4.46 9.96 9.96 9.96s9.96-4.44 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm1.39 14.72c-.4.41-1.02.41-1.41 0-.4-.4-.4-1.02 0-1.41.39-.41 1.02-.41 1.41 0 .4.39.4 1.01 0 1.41zm-1.36-3.13H9.3v-5.7h2.73c.4 0 .71.31.71.71v4.27c0 .4-.31.71-.71.71zM12 5.27c-.74 0-1.34.6-1.34 1.34 0 .73.6 1.34 1.34 1.34s1.34-.61 1.34-1.34c0-.74-.6-1.34-1.34-1.34z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-400">
                Merara simfoni , Cheras 43300 Malaysia
              </p>
              <p className="text-gray-400">Email: hvlifeasy@gmail.com</p>
              <p className="text-gray-400">Phone: 018-3795728</p>
            </div>
          </div>

          <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-gray-500">
              &copy; 2024 Pelican Webdev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </html>
  );
}
