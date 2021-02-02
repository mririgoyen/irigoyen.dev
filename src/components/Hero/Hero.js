import Icon from '@mdi/react';
import { mdiArrowDownCircleOutline, mdiGithub, mdiLinkedin } from '@mdi/js';

import classes from './Hero.scss';

const Hero = ({}) => {
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <h1>I'm Michael Irigoyen.</h1>
        <h2>I'm a Chicago based <em>software engineer</em> with a passion for <em>front-end development</em> and <em>user experience</em>. <a href='#about'>Start scrolling</a> to learn more <a href='#about'>about me</a>.</h2>
        <div className={classes.social}>
          <a href='https://github.com/goyney'>
            <Icon path={mdiGithub} size={1.5} />
          </a>
          <a href='https://www.linkedin.com/in/michael-irigoyen/'>
            <Icon path={mdiLinkedin} size={1.5} />
          </a>
        </div>
      </div>
      <a className={classes.scroll} href='#about'>
        <Icon path={mdiArrowDownCircleOutline} size={1.5} />
        <span>Scroll Down</span>
      </a>
    </div>
  );
};

export default Hero;