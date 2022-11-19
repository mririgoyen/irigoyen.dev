import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiMastodon } from '@mdi/js';

import classes from './Footer.scss';

import PolyworkSvg from '../../assets/images/polywork.svg';

const Footer: FunctionComponent = () => {
  return (
    <footer className={classes.root}>
      <div role='presentation'>
        <p className={classes.copyright}>&copy; {new Date().getFullYear()} Michael Irigoyen</p>
        <div className={classes.social}>
          <a
            aria-label='GitHub Profile'
            className={classes.github}
            href='https://github.com/mririgoyen'
          >
            <Icon path={mdiGithub} size={1.5} title='GitHub Profile' />
          </a>
          <a
            aria-label='Mastodon Profile'
            className={classes.mastodon}
            href='https://fosstodon.org/@mririgoyen'
            rel='me'
          >
            <Icon path={mdiMastodon} size={1.5} title='Mastodon Profile' />
          </a>
          <a
            aria-label='Polywork Profile'
            className={classes.polywork}
            href='https://poly.irigoyen.dev'
          >
            <PolyworkSvg />
          </a>
          <a
            aria-label='LinkedIn Profile'
            className={classes.linkedin}
            href='https://www.linkedin.com/in/michael-irigoyen/'
          >
            <Icon path={mdiLinkedin} size={1.5} title='LinkedIn Profile' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
