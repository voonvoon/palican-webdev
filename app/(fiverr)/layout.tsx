
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en" className="h-full">
    <html lang="en">
      <body className="bg-gray-800">{children}</body>
    </html>
    </html>
  );
}

