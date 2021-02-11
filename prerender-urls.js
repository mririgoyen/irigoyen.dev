const fs = require('fs');
const fm = require('front-matter');
const ellipsize = require('ellipsize');
const readingTime = require('reading-time');

const defaultTitle = 'Michael Irigoyen - Front-End Software Engineer';
const defaultDesc = 'I\'m a Chicago-based software engineer with a passion for front-end development and user experience.';
const defaultMetadata = {
  description: defaultDesc,
  'og:description': { content: defaultDesc, property: 'og:description' },
  'og:image': { content: 'https://www.irigoyen.dev/assets/images/facebook-card.png', property: 'og:image' },
  'og:title': { content: defaultTitle, property: 'og:title' },
  'og:type': { content: 'website', property: 'og:type' },
  'og:url': { content: 'https://www.irigoyen.dev/', property: 'og:url' },
  'twitter:card': 'summary',
  'twitter:creator': '@mririgo',
  'twitter:description': defaultDesc,
  'twitter:image': 'https://www.irigoyen.dev/assets/images/twitter-card.png',
  'twitter:site': '@mririgo',
  'twitter:title': defaultTitle
};

const staticRoutes = [
  { meta: defaultMetadata, title: defaultTitle, url: '/' },
  { meta: defaultMetadata, title: defaultTitle, url: '/resume' },
  { meta: defaultMetadata, title: defaultTitle, url: '/presentations/1up-empowering-communities-with-apis' },
  { meta: defaultMetadata, title: defaultTitle, url: '/presentations/design-your-api-for-humans' },
  { meta: defaultMetadata, title: defaultTitle, url: '/presentations/the-api-user-experience' },
  { meta: defaultMetadata, title: defaultTitle, url: '/presentations/continuous-devops' },
  { meta: defaultMetadata, title: defaultTitle, url: '/presentations/nobody-cares-about-your-ui' }
];

const getBlogRoutes = () => {
  const rawPosts = fs.readdirSync(`${__dirname}/posts`);

  return rawPosts.reduce((output, path) => {
    const [ fileName, extension ] = path.split('.');

    if (extension !== 'md') {
      return output;
    }

    const article = fm(fs.readFileSync(`${__dirname}/posts/${path}`, 'utf8'));
    const articleUrl = `/blog/${fileName.replace(/^(\d+)-(\d+)-(\d+)-/, '$1/$2/$3/')}`;
    const aritcleTitle = `${ellipsize(article.attributes.title, 33)} | Michael Irigoyen`;
    const articleDesc = ellipsize(article.body, 60);
    const readTime = readingTime(article.body);

    output.push({
      meta: {
        ...defaultMetadata,
        author: 'Michael Irigoyen',
        description: articleDesc,
        'og:article:author': { content: 'Michael Irigoyen', property: 'og:article:author' },
        'og:article:published_time': { content: article.attributes.date, property: 'og:article:published_time' },
        'og:description': { content: articleDesc, property: 'og:description' },
        'og:image': { content: `https://www.irigoyen.dev/assets/blog/${article.attributes.image}`, property: 'og:image' },
        'og:title': { content: aritcleTitle, property: 'og:title' },
        'og:type': { content: 'article', property: 'og:type' },
        'og:url': { content: `https://www.irigoyen.dev${articleUrl}`, property: 'og:url' },
        'twitter:card': 'summary_large_image',
        'twitter:data1': readTime.text,
        'twitter:description': articleDesc,
        'twitter:image': `https://www.irigoyen.dev/assets/blog/${article.attributes.image}`,
        'twitter:label1': 'Reading time',
        'twitter:title': aritcleTitle
      },
      title: aritcleTitle,
      url: articleUrl
    });

    return output;
  }, [{
    meta: {
      ...defaultMetadata,
      'og:url': { content: 'https://www.irigoyen.dev/blog/', property: 'og:url' }
    },
    title: `Blog | ${defaultTitle}`,
    url: '/blog'
  }]);
};

const prerenderRoutes = () => {
  const blogRoutes = getBlogRoutes();
  return staticRoutes.concat(blogRoutes);
};

module.exports = prerenderRoutes;
