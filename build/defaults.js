const baseUrl = 'https://www.irigoyen.dev/';
const defaultTitle = 'Michael Irigoyen - Front-End Software Engineer';
const defaultDesc = 'I\'m a Chicago-based software engineer with a passion for front-end development and user experience.';
const defaultMetadata = {
  description: defaultDesc,
  'og:description': { content: defaultDesc, property: 'og:description' },
  'og:image': { content: `${baseUrl}assets/images/facebook-card.png`, property: 'og:image' },
  'og:title': { content: defaultTitle, property: 'og:title' },
  'og:type': { content: 'website', property: 'og:type' },
  'og:url': { content: baseUrl, property: 'og:url' },
  title: defaultTitle,
  'twitter:card': 'summary',
  'twitter:creator': '@mririgo',
  'twitter:description': defaultDesc,
  'twitter:image': `${baseUrl}assets/images/twitter-card.png`,
  'twitter:site': '@mririgo',
  'twitter:title': defaultTitle,
  version: process.env.BUILD_ID || 'dev'
};

module.exports = {
  baseUrl,
  defaultDesc,
  defaultMetadata,
  defaultTitle
};
