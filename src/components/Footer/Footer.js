import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

import classes from './Footer.scss';

const Footer = () => {
  return (
    <footer className={classes.root}>
      <div className={classes.copyright}>
        <p>© {new Date().getFullYear()} Michael Irigoyen</p>
      </div>
      <div className={classes.social}>
        <a href='https://github.com/goyney'>
          <Icon path={mdiGithub} size={1.5} />
        </a>
        <a href='https://www.linkedin.com/in/michael-irigoyen/'>
          <Icon path={mdiLinkedin} size={1.5} />
        </a>
        <a href='https://twitter.com/mririgo'>
          <Icon path={mdiTwitter} size={1.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;