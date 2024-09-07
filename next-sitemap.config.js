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
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NODE_ENV === 'production' ? 'https://pelicanwebdev.com' : 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  // Optionally, include additional paths if needed
  additionalPaths: async (config) => {
    return [
      { loc: '/', changefreq: 'daily', priority: 0.8 },
      { loc: '/blogs', changefreq: 'daily', priority: 0.8 },
      { loc: '/projects', changefreq: 'daily', priority: 0.8 },
    ];
  },
};


