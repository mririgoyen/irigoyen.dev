const fs = require('fs');

const staticRoutes = [
  { url: '/' },
  { url: '/resume' },
  { url: '/presentations/1up-empowering-communities-with-apis' },
  { url: '/presentations/design-your-api-for-humans' },
  { url: '/presentations/the-api-user-experience' },
  { url: '/presentations/continuous-devops' },
  { url: '/presentations/nobody-cares-about-your-ui' }
];

const getBlogRoutes = () => {
  const rawPosts = fs.readdirSync(`${__dirname}/posts`);

  return rawPosts.reduce((output, path) => {
    const [ fileName, extension ] = path.split('.');

    if (extension === 'md') {
      output.push({ url: `/blog/${fileName.replace(/^(\d+)-(\d+)-(\d+)-/, '$1/$2/$3/')}` });
    }

    return output;
  }, [ { url: '/blog' } ]);
};

module.exports = () => {
  const blogRoutes = getBlogRoutes();
  return staticRoutes.concat(blogRoutes);
};
