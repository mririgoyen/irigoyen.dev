const fs = require('fs');

const generateWebfinger = () => {
  const webfinger = {
    aliases: [
      'https://hachyderm.io/@mririgoyen',
      'https://hachyderm.io/users/mririgoyen'
    ],
    links: [
      {
        href: 'https://hachyderm.io/@mririgoyen',
        rel: 'http://webfinger.net/rel/profile-page',
        type: 'text/html'
      },
      {
        href: 'https://hachyderm.io/users/mririgoyen',
        rel: 'self',
        type: 'application/activity+json'
      },
      {
        rel: 'http://ostatus.org/schema/1.0/subscribe',
        template: 'https://hachyderm.io/authorize_interaction?uri={uri}'
      }
    ],
    subject: 'acct:mririgoyen@hachyderm.io'
  };

  fs.mkdirSync('./dist/.well-known', { recursive: true });
  fs.writeFileSync('./dist/.well-known/webfinger', JSON.stringify(webfinger));
};

module.exports = generateWebfinger;
