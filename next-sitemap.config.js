/** @type {import('next-sitemap').IConfig} */

const { createClient, groq } = require("next-sanity");

async function getBlogsForSiteMap() {
  const client = createClient({
    projectId: "zm1bbp7g",
    dataset: "production",
    apiVersion: "2024-08-30",
    useCdn: false, // Use false to ensure fresh data if needed
  });

  try {
    // Fetch slugs from your Sanity dataset
    const blogs = await client.fetch(
      groq`*[_type == 'blog'] { "slug": slug.current }`
    );


    // Return an array of slugs
    return blogs.map((blog) => blog.slug);
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    return [];
  }
}

async function getProjectsForSiteMap() {
  const client = createClient({
    projectId: "zm1bbp7g",
    dataset: "production",
    apiVersion: "2024-08-30",
    useCdn: false, // Use false to ensure fresh data if needed
  });

  try {
    // Fetch slugs from your Sanity dataset
    const projects = await client.fetch(
      groq`*[_type == 'project'] { "slug": slug.current }`
    );


    // Return an array of slugs
    return projects.map((project) => project.slug);
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    return [];
  }
}

module.exports = {
  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://pelicanwebdev.com"
      : "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async (config) => {
    try {
      // Fetch slugs for dynamic routes
      const blogSlugs = await getBlogsForSiteMap();
      const projectSlugs = await getProjectsForSiteMap();

      // Create paths for each blog
      const blogPaths = blogSlugs.map((slug) => ({
        loc: `/blogs/${slug}`,
        changefreq: "daily",
        priority: 0.8,
      }));

      // Create paths for each project
      const projectPaths = projectSlugs.map((slug) => ({
        loc: `/projects/${slug}`,
        changefreq: "daily",
        priority: 0.8,
      }));

      // Return the paths
      return [
        { loc: "/", changefreq: "daily", priority: 0.8 },
        { loc: "/about", changefreq: "daily", priority: 0.8 },
        { loc: "/contact", changefreq: "daily", priority: 0.8 },
        ...blogPaths,
        ...projectPaths,
      ];
    } catch (error) {
      console.error("Error generating additional paths:", error);
      return [];
    }
  },
};


//old code//

// // next-sitemap.config.js
// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.NODE_ENV === 'production' ? 'https://pelicanwebdev.com' : 'http://localhost:3000', // Adjust based on environment
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   changefreq: 'daily',
//   priority: 0.7,
// };

// next-sitemap.config.js
// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.NODE_ENV === 'production' ? 'https://pelicanwebdev.com' : 'http://localhost:3000',
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   changefreq: 'daily',
//   priority: 0.7,
//   // Optionally, include additional paths if needed
//   additionalPaths: async (config) => {
//     return [
//       { loc: '/', changefreq: 'daily', priority: 0.8 },
//       { loc: '/blogs', changefreq: 'daily', priority: 0.8 },
//       { loc: '/projects', changefreq: 'daily', priority: 0.8 },
//     ];
//   },
// };