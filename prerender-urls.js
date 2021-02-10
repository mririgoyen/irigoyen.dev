const fs = require('fs');
const fm = require('front-matter');
const ellipsize = require('ellipsize');
const readingTime = require('reading-time');

const defaultTitle = 'Michael Irigoyen - Front-End Software Engineer';
const defaultMetadata = {
  description: 'I\'m a Chicago-based software engineer with a passion for front-end development and user experience.',
  'og:image': 'https://www.irigoyen.dev/assets/images/facebook-card.png',
  'og:type': 'website',
  'og:url': 'https://www.irigoyen.dev/',
  'twitter:card': 'summary',
  'twitter:creator': '@mririgo',
  'twitter:image': 'https://www.irigoyen.dev/assets/images/twitter-card.png',
  'twitter:site': '@mririgo'
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
    const readTime = readingTime(article.body);

    output.push({
      meta: {
        ...defaultMetadata,
        description: ellipsize(article.body, 60),
        'og:article:author': 'Michael Irigoyen',
        'og:article:published_time': article.attributes.date,
        'og:image': `https://www.irigoyen.dev/assets/blog/${article.attributes.image}`,
        'og:type': 'article',
        'og:url': `https://www.irigoyen.dev${articleUrl}`,
        'twitter:card': 'summary_large_image',
        'twitter:data1': readTime.text,
        'twitter:image': `https://www.irigoyen.dev/assets/blog/${article.attributes.image}`,
        'twitter:label1': 'Reading time'
      },
      title: `${article.attributes.title} | Michael Irigoyen`,
      url: articleUrl
    });

    return output;
  }, [{
    meta: {
      ...defaultMetadata,
      'og:url': 'https://www.irigoyen.dev/blog/'
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
