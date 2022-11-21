import { FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import Icon from '@mdi/react';
import { mdiArrowDownCircleOutline, mdiGithub, mdiLinkedin, mdiMastodon } from '@mdi/js';

import useIntersection from '../../hooks/useIntersection';

import { HeroProps } from './HeroProps';

import classes from './Hero.scss';

import PolyworkSvg from '../../assets/images/polywork.svg';

const Hero: FunctionComponent<HeroProps> = ({ setActiveSection }) => {
  const heroRef = useRef<HTMLDivElement>(null);
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
  }, [ onScreen, setActiveSection ]);

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
            href='https://github.com/mririgoyen'
          >
            <Icon path={mdiGithub} size={1.5} title='GitHub Profile' />
          </a>
          <a
            aria-label='Mastodon Profile'
            className={classes.mastodon}
            href='https://hachyderm.io/@mririgoyen'
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
      <a className={classes.scroll} href='#about' onClick={() => setActiveSection({ id: 'about' })}>
        <Icon path={mdiArrowDownCircleOutline} size={1.5} />
        <span>Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;
