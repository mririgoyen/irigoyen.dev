import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';

import classes from './Footer.scss';

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
