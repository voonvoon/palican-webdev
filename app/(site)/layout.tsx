import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Footer from "./components/Footer"; // Assuming Footer component is in the components folder
import ChatBox from "./components/ChatBox";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelican Webdev",
  description:
    "Full-stack web developer specializing in e-commerce solutions using Next.js, Node.js, and MongoDB. Helping businesses build fast, scalable, and user-friendly websites.",
  icons: {
    icon: "/Pelican_logo.png", // Add this line for the favicon
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en" className="h-full">
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

        {/* Structured Data for Logo(For Google search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              url: "https://pelicanwebdev.com/", // Replace with your actual URL
              logo: "https://pelicanwebdev.com/Pelican_logo.png", // Replace with the correct logo URL
              name: "Pelican Webdev",
            }),
          }}
        />

        {/* Meta Tags for Social Sharing */}
        <meta
          property="og:image"
          content="https://yourwebsite.com/Pelican_logo.png"
        />
        <meta property="og:site_name" content="Pelican Webdev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/Pelican_logo.png"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between p-4 bg-gray-100 shadow-lg">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold logo-animation"
          >
            Pelican Webdev
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-600 p-4 sm:text-lg">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="relative inline-block text-gray-700 hover:text-blue-500"
              >
                {page.title}
                <span className="absolute left-0 bottom-0 w-full h-2 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </div>
        </header>

        {/* Main content area with flex-grow to take up available space */}
        <main className="flex-grow py-5">{children}</main>
        <ChatBox />

        <Footer />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "../globals.css";
// import Link from "next/link";
// import { getPages } from "@/sanity/sanity-utils";
// import Footer from "./components/Footer"; // Assuming Footer component is in the components folder
// import ChatBox from "./components/ChatBox";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pelican Webdev",
//   description:
//     "Full-stack web developer specializing in e-commerce solutions using Next.js, Node.js, and MongoDB. Helping businesses build fast, scalable, and user-friendly websites.",
//   icons: {
//     icon: "/Pelican_logo.png", // Add this line for the favicon
//   },
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pages = await getPages();

//   return (
//     <html lang="en" className="h-full">
//       <Head>
//         {/* Google Tag (gtag.js) */}
//         <script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=AW-10927177282"
//         ></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-10927177282');
//             `,
//           }}
//         />
//       </Head>
//       <body className="flex flex-col min-h-screen">
//         <header className="flex items-center justify-between p-4 bg-gray-100 shadow-lg">
//           <Link
//             href="/"
//             className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold logo-animation"
//           >
//             Pelican Webdev
//           </Link>
//           <div className="flex items-center gap-3 text-sm text-gray-600 p-4 sm:text-lg ">
//             {pages.map((page) => (
//               <Link
//                 href={`/${page.slug}`}
//                 key={page._id}
//                 className="relative inline-block text-gray-700 hover:text-blue-500"
//               >
//                 {page.title}
//                 <span className="absolute left-0 bottom-0 w-full h-2 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//               </Link>
//             ))}
//           </div>
//         </header>

//         {/* Main content area with flex-grow to take up available space */}
//         <main className="flex-grow py-5">{children}</main>
//         <ChatBox />

//         <Footer />
//       </body>
//     </html>
//   );
// }
