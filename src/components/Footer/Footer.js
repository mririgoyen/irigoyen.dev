import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

import classes from './Footer.scss';

const Footer = () => {
  return (
    <footer className={classes.root}>
      <p className={classes.copyright}>&copy; {new Date().getFullYear()} Michael Irigoyen</p>
      <div className={classes.social}>
        <a
          aria-label='GitHub Profile'
          className={classes.github}
          href='https://github.com/goyney'
        >
          <Icon path={mdiGithub} size={1.5} title='GitHub Profile' />
        </a>
        <a
          aria-label='LinkedIn Profile'
          className={classes.linkedin}
          href='https://www.linkedin.com/in/michael-irigoyen/'
        >
          <Icon path={mdiLinkedin} size={1.5} title='LinkedIn Profile' />
        </a>
        <a
          aria-label='Twitter Profile'
          className={classes.twitter}
          href='https://twitter.com/mririgo'
        >
          <Icon path={mdiTwitter} size={1.5} title='Twitter Profile' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;