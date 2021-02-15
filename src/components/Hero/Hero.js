import { useEffect, useRef, useState } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import Icon from '@mdi/react';
import { mdiArrowDownCircleOutline, mdiGithub, mdiLinkedin } from '@mdi/js';

import { activeState } from '../../atoms/activeState';
import useIntersection from '../../hooks/useIntersection';

import classes from './Hero.scss';

const Hero = () => {
  const heroRef = useRef();
  const [ offset, setOffset ] = useState(0);
  const onScreen = useIntersection(heroRef, { rootMargin: '300px', threshold: .1 });
  const setActiveSection = useSetRecoilState(activeState);

  useEffect(() => {
    const parallaxShift = () => setOffset(window.pageYOffset / 5);

    if (onScreen) {
      setActiveSection({ id: 'home', scrollTo: false });
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
        <p className={classes.subheading}>I am a Chicago-based <em>software engineer</em> with a passion for <em>front-end development</em> and <em>user experience</em>. <a href='#about' onClick={() => setActiveSection({ id: 'about', scrollTo: true })}>Start scrolling</a> to learn more.</p>
        <div className={classes.social}>
          <a aria-label='GitHub Profile' href='https://github.com/goyney'>
            <Icon path={mdiGithub} size={1.5} />
          </a>
          <a aria-label='LinkedIn Profile' href='https://www.linkedin.com/in/michael-irigoyen/'>
            <Icon path={mdiLinkedin} size={1.5} />
          </a>
        </div>
      </div>
      <a className={classes.scroll} href='#about' onClick={() => setActiveSection({ id: 'about', scrollTo: true })}>
        <Icon path={mdiArrowDownCircleOutline} size={1.5} />
        <span>Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;