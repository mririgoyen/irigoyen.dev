const staticRoutes = require('./prerender/getStaticRoutes');
const getBlogRoutes = require('./prerender/getBlogRoutes');
const generateSitemap = require('./sitemap/generateSitemap');
const generateRss = require('./syndication/generateRss');
const generateWebfinger = require('./webfinger/generateWebfinger');

const blogRoutes = getBlogRoutes();
const prerenderedRoutes = staticRoutes.concat(blogRoutes);
generateSitemap(prerenderedRoutes);
generateRss(blogRoutes);
generateWebfinger();

module.exports = prerenderedRoutes;
