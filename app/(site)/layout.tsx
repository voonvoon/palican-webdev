import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Footer from "./components/Footer"; // Assuming Footer component is in the components folder
import ChatBox from "./components/ChatBox";
import Head from "next/head";
import Image from "next/image";
//import Logo from "./components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelican Webdev | E-commerce Website Designer in Malaysia",
  description:
    //"Malaysia-based full-stack web developer specializing in e-commerce solutions with Next.js, Node.js, and MongoDB. Building fast, scalable, and user-friendly websites for businesses.",
    "Pelican Webdev builds fast, scalable e-commerce websites. Trusted by businesses across Malaysia for web design and development using Next.js, Node.js, and MongoDB.", 
    icons: {
    icon: "/palican-logo.svg", // Add this line for the favicon
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
              logo: "https://pelicanwebdev.com/palican-logo.svg", // Replace with the correct logo URL
              name: "Pelican Webdev",
            }),
          }}
        />

        {/* Meta Tags for Social Sharing */}
        <meta
          property="og:image"
          content="https://pelicanwebdev.com/palican-logo.svg"
        />
        <meta property="og:site_name" content="Pelican Webdev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://pelicanwebdev.com/palican-logo.svg"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-800 shadow-xl">
          {/* <Link
            href="/"
            className=" p-1 ml-3 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold logo-animation"
          >
            Palican Webdev
          </Link>  */}
          <Link
            href="/"
            className="p-1 ml-5 flex flex-col items-center justify-center"
          >
            <Image
              src="/palican-logo.svg"
              alt="Palican Webdev Logo"
              width={35} // Adjust the width as per your design
              height={35} // Adjust the height as per your design
              className="logo-animation"
            />
            <span className="text-white text-[10px] font-bold">
              Palican Webdev
            </span>
            {/* Adjust text size using text-[8px] for very small text */}
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-600 p-1 mr-1 sm:text-base">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="relative inline-block text-white hover:text-blue-500"
              >
                {page.title}
                <span className="absolute left-0 bottom-0 w-full h-2 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </div>
        </header>

        {/* Main content area with flex-grow to take up available space */}
        <main className="flex-grow py-5 pt-20">{children}</main>
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
