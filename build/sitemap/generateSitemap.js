const { simpleSitemapAndIndex } = require('sitemap');

const { baseUrl } = require('../defaults');

const generateSitemap = (routes) => {
  const filteredRoutes = routes.filter((r) => !r.omitSitemap);

  simpleSitemapAndIndex({
    destinationDir: './dist',
    gzip: false,
    hostname: baseUrl,
    sourceData: filteredRoutes
  });
};

module.exports = generateSitemap;
