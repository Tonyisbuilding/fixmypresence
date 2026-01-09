/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fixmypresence.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  
  // Transform function for custom priority per page
  transform: async (config, path) => {
    // Higher priority for homepage
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Default transform
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Additional paths to include (if any static pages aren't auto-detected)
  additionalPaths: async (config) => {
    return [];
  },
};
