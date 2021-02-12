const fs = require('fs');
const fm = require('front-matter');
const removeMarkdown = require('markdown-to-text').default;
const ellipsize = require('ellipsize');
const readingTime = require('reading-time');
const { simpleSitemapAndIndex } = require('sitemap');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const defaultTitle = 'Michael Irigoyen - Front-End Software Engineer';
const defaultDesc = 'I\'m a Chicago-based software engineer with a passion for front-end development and user experience.';
const defaultMetadata = {
  description: defaultDesc,
  'og:description': { content: defaultDesc, property: 'og:description' },
  'og:image': { content: 'https://www.irigoyen.dev/assets/images/facebook-card.png', property: 'og:image' },
  'og:title': { content: defaultTitle, property: 'og:title' },
  'og:type': { content: 'website', property: 'og:type' },
  'og:url': { content: 'https://www.irigoyen.dev/', property: 'og:url' },
  title: defaultTitle,
  'twitter:card': 'summary',
  'twitter:creator': '@mririgo',
  'twitter:description': defaultDesc,
  'twitter:image': 'https://www.irigoyen.dev/assets/images/twitter-card.png',
  'twitter:site': '@mririgo',
  'twitter:title': defaultTitle
};

const staticRoutes = [
  { meta: defaultMetadata, title: defaultTitle, url: '/' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/resume/download' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/1up-empowering-communities-with-apis' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/design-your-api-for-humans' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/the-api-user-experience' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/continuous-devops' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/nobody-cares-about-your-ui' }
];

const getBlogRoutes = () => {
  const rawPosts = fs.readdirSync(`${__dirname}/posts`);

  const posts = rawPosts.reduce((output, path) => {
    const [ fileName, extension ] = path.split('.');

    if (extension !== 'md') {
      return output;
    }

    const article = fm(fs.readFileSync(`${__dirname}/posts/${path}`, 'utf8'));
    const articleUrl = `/blog/${fileName.replace(/^(\d+)-(\d+)-(\d+)-/, '$1/$2/$3/')}`;
    const articleTitle = `${article.attributes.title} by Michael Irigoyen`;
    const articleDesc = ellipsize(article.attributes.description || removeMarkdown(article.body).replace(/\n/g, ''), 200);
    const articleImage = fs.existsSync(`${__dirname}/src/assets/blog/${article.attributes.image}`) ? `https://www.irigoyen.dev/assets/blog/${article.attributes.image}` : 'https://www.irigoyen.dev/assets/images/facebook-card.png';
    const articlePublished = dayjs.utc(article.attributes.date).format('YYYY-MM-DD');
    const readTime = readingTime(article.body);

    output.push({
      lastmod: articlePublished,
      meta: {
        ...defaultMetadata,
        author: 'Michael Irigoyen',
        description: articleDesc,
        'og:article:author': { content: 'Michael Irigoyen', property: 'og:article:author' },
        'og:article:published_time': { content: articlePublished, property: 'og:article:published_time' },
        'og:description': { content: articleDesc, property: 'og:description' },
        'og:image': { content: articleImage, property: 'og:image' },
        'og:title': { content: articleTitle, property: 'og:title' },
        'og:type': { content: 'article', property: 'og:type' },
        'og:url': { content: `https://www.irigoyen.dev${articleUrl}`, property: 'og:url' },
        title: articleTitle,
        'twitter:card': 'summary_large_image',
        'twitter:data1': readTime.text,
        'twitter:description': articleDesc,
        'twitter:image': articleImage,
        'twitter:label1': 'Reading time',
        'twitter:title': articleTitle
      },
      title: articleTitle,
      url: articleUrl
    });

    return output;
  }, []);

  posts.unshift({
    lastmod: dayjs.utc(Math.max(...posts.map((e) => new Date(e.lastmod)))).format('YYYY-MM-DD'),
    meta: {
      ...defaultMetadata,
      'og:url': { content: 'https://www.irigoyen.dev/blog/', property: 'og:url' },
      title: `Blog | ${defaultTitle}`
    },
    title: `Blog | ${defaultTitle}`,
    url: '/blog'
  });

  return posts;
};

const prerenderRoutes = () => {
  const allRoutes = staticRoutes.concat(getBlogRoutes());
  return allRoutes;
};

const generateSitemap = () => {
  const allRoutes = prerenderRoutes();
  const filteredRoutes = allRoutes.filter((r) => !r.omitSitemap);

  simpleSitemapAndIndex({
    destinationDir: './build',
    gzip: false,
    hostname: 'https://www.irigoyen.dev',
    sourceData: filteredRoutes
  });
};

generateSitemap();

module.exports = prerenderRoutes;
