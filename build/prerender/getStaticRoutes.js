const { defaultMetadata, defaultTitle } = require('../defaults');

module.exports = [
  { meta: defaultMetadata, title: defaultTitle, url: '/' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/card' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/resume/download' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/1up-empowering-communities-with-apis' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/design-your-api-for-humans' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/the-api-user-experience' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/continuous-devops' },
  { meta: { ...defaultMetadata, robots: 'noindex' }, omitSitemap: true, title: defaultTitle, url: '/presentations/nobody-cares-about-your-ui' },
  {
    meta: {
      ...defaultMetadata,
      'og:title': { content: 'Page Not Found | Michael Irigoyen', property: 'og:title' },
      robots: 'nofollow,noindex',
      title: 'Page Not Found | Michael Irigoyen',
      'twitter:title': 'Page Not Found | Michael Irigoyen'
    },
    omitSitemap: true,
    title: 'Page Not Found | Michael Irigoyen', url: '/404'
  }
];
