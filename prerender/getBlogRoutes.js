const fs = require('fs');
const fm = require('front-matter');
const removeMarkdown = require('markdown-to-text').default;
const ellipsize = require('ellipsize');
const readingTime = require('reading-time');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const dayjs = require('dayjs').extend(utc).extend(timezone);
const markdownItAnchor = require('markdown-it-anchor');
const markdownItLinks = require('markdown-it-link-attributes');
const markdownItPrism = require('markdown-it-prism');
const md = require('markdown-it')()
  .use(markdownItAnchor)
  .use(markdownItPrism)
  .use(markdownItLinks, {
    attrs: { rel: 'noopener nofollow', target: '_blank' },
    pattern: /^(?!https?:\/\/(www.)?irigoyen.dev*$)(?!#)(?!\/).*/
  });

const { baseUrl, defaultMetadata, defaultTitle } = require('./defaults');

const getBlogRoutes = () => {
  const rawPosts = fs.readdirSync(`${__dirname}/../posts`);

  const posts = rawPosts.reduce((output, path) => {
    const [ fileName, extension ] = path.split('.');

    if (extension !== 'md') {
      return output;
    }

    const article = fm(fs.readFileSync(`${__dirname}/../posts/${path}`, 'utf8'));
    const articleUrl = `/blog/${fileName.replace(/^(\d+)-(\d+)-(\d+)-/, '$1/$2/$3/')}/`;
    const articleTitle = `${article.attributes.title} by Michael Irigoyen`;
    const articleDesc = ellipsize(article.attributes.description || removeMarkdown(article.body).replace(/\n/g, ''), 200);
    const articlePublished = dayjs.utc(article.attributes.date).format('YYYY-MM-DD');
    const { text: articleReadTime } = readingTime(article.body);
    const articleImageExists = fs.existsSync(`${__dirname}/../src/assets/blog/${article.attributes.image}`);
    const articleImageExtension = articleImageExists ? article.attributes.image.split('.')[1] : undefined;
    const articleImageMime = articleImageExtension ? `image/${articleImageExtension === 'jpg' ? 'jpeg' : articleImageExtension}` : undefined;
    const articleImagePath = articleImageExists ? `${baseUrl}assets/blog/${article.attributes.image}` : `${baseUrl}assets/images/facebook-card.png`;

    output.push({
      article: {
        body: md.render(article.body),
        image: articleImageExists ? `/assets/blog/${article.attributes.image}` : undefined,
        imageMime: articleImageMime,
        publishDate: dayjs.tz(articlePublished, 'America/Chicago').format('MMMM D, YYYY'),
        readingTime: articleReadTime,
        title: article.attributes.title
      },
      lastmod: articlePublished,
      meta: {
        ...defaultMetadata,
        author: 'Michael Irigoyen',
        description: articleDesc,
        'og:article:author': { content: 'Michael Irigoyen', property: 'og:article:author' },
        'og:article:published_time': { content: articlePublished, property: 'og:article:published_time' },
        'og:description': { content: articleDesc, property: 'og:description' },
        'og:image': { content: articleImagePath, property: 'og:image' },
        'og:title': { content: articleTitle, property: 'og:title' },
        'og:type': { content: 'article', property: 'og:type' },
        'og:url': { content: `${baseUrl}${articleUrl}`, property: 'og:url' },
        title: articleTitle,
        'twitter:card': 'summary_large_image',
        'twitter:data1': articleReadTime,
        'twitter:description': articleDesc,
        'twitter:image': articleImagePath,
        'twitter:label1': 'Reading time',
        'twitter:title': articleTitle
      },
      title: articleTitle,
      url: articleUrl
    });

    return output;
  }, []);

  posts.unshift({
    articles: posts.reverse().map((post) => ({
      description: post.meta.description,
      image: post.article.image,
      imageMime: post.article.imageMime,
      prettyDate: post.article.publishDate,
      publishDate: post.lastmod,
      route: post.url,
      title: post.article.title
    })),
    lastmod: dayjs.utc(Math.max(...posts.map((e) => new Date(e.lastmod)))).format('YYYY-MM-DD'),
    meta: {
      ...defaultMetadata,
      'og:url': { content: `${baseUrl}blog/`, property: 'og:url' },
      title: `Blog | ${defaultTitle}`
    },
    title: `Blog | ${defaultTitle}`,
    url: '/blog/'
  });

  return posts;
};

module.exports = getBlogRoutes;