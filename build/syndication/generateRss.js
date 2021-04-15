const fs = require('fs');
const { Feed } = require('feed');

const { baseUrl, defaultDesc, defaultTitle } = require('../defaults');

const generateRss = (blogRoutes) => {
  if (!Array.isArray(blogRoutes) || !blogRoutes.length) {
    // eslint-disable-next-line no-console
    console.warn('WARNING: Unable to generate RSS feed.');
    return;
  }

  const generalInfo = blogRoutes.shift();
  const [ updateYear, updateMonth, updateDay ] = generalInfo.lastmod.split('-');

  const feed = new Feed({
    author: {
      email: 'michael@irigoyen.dev',
      link: 'https://www.irigoyen.dev',
      name: 'Michael Irigoyen'
    },
    copyright: `Copyright ${new Date().getFullYear()} Michael Irigoyen`,
    description: defaultDesc,
    favicon: `${baseUrl}favicon.ico`,
    feedLinks: {
      atom: `${baseUrl}blog/atom.xml`,
      json: `${baseUrl}blog/feed.json`
    },
    generator: 'irigoyen.dev',
    id: `${baseUrl}blog/`,
    image: `${baseUrl}assets/icons/favicon-48x48.png`,
    language: 'en',
    link: `${baseUrl}blog/`,
    title: `Blog | ${defaultTitle}`,
    updated: new Date(updateYear, updateMonth - 1, updateDay)
  });

  blogRoutes.forEach((blog) => {
    const postUrl = `${baseUrl}${blog.url.substring(1)}`;
    const [ postYear, postMonth, postDay ] = blog.lastmod.split('-');
    feed.addItem({
      author: {
        email: 'michael@irigoyen.dev',
        link: 'https://www.irigoyen.dev',
        name: 'Michael Irigoyen'
      },
      content: blog.article.body,
      date: new Date(postYear, postMonth - 1, postDay),
      description: blog.meta.description,
      id: postUrl,
      image: blog.meta['og:image'].content,
      link: postUrl,
      title: blog.article.title
    });
  });

  fs.writeFileSync('./dist/feed.rss', feed.rss2());
  fs.writeFileSync('./dist/feed.xml', feed.atom1());
  fs.writeFileSync('./dist/feed.json', feed.json1());
};

module.exports = generateRss;
