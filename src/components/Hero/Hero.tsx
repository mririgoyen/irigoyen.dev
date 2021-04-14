import { FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import Icon from '@mdi/react';
import { mdiArrowDownCircleOutline, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

import useIntersection from '../../hooks/useIntersection';

import { HeroProps } from './HeroProps';

import classes from './Hero.scss';

const Hero: FunctionComponent<HeroProps> = ({ setActiveSection }) => {
  const heroRef = useRef<HTMLDivElement>();
  const [ offset, setOffset ] = useState<number>(0);
  const onScreen = useIntersection(heroRef, { rootMargin: '300px', threshold: .1 });

  useEffect(() => {
    const parallaxShift = () => setOffset(window.pageYOffset / 5);

    if (onScreen) {
      setActiveSection({ id: 'home' });
      history.replaceState({}, '', '/');
      window.addEventListener('scroll', parallaxShift);
    } else {
      window.removeEventListener('scroll', parallaxShift);
    }

    return () => window.removeEventListener('scroll', parallaxShift);
  }, [ onScreen ]);

  return (
    <section
      className={classes.root}
      id='home'
      style={{
        backgroundPositionY: offset
      }}
    >
      <div className={classes.hero} ref={heroRef}>
        <h1>I'm Michael Irigoyen.</h1>
        <p className={classes.subheading}>I am a Chicago-based <em>software engineer</em> with a passion for <em>front-end development</em> and <em>user experience</em>. <a href='#about' onClick={() => setActiveSection({ id: 'about' })}>Start scrolling</a> to learn more.</p>
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
      </div>
      <a className={classes.scroll} href='#about' onClick={() => setActiveSection({ id: 'about' })}>
        <Icon path={mdiArrowDownCircleOutline} size={1.5} />
        <span>Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;