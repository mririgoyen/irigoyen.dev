import { Fragment } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useRecoilValue } from 'recoil';
import { Helmet } from 'react-helmet';

import { activeState } from '../../atoms/activeState';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';
import Talks from '../../components/Talks/Talks';
import Philanthropy from '../../components/Philanthropy/Philanthropy';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  const sections = [
    { component: Hero, id: 'home', ref: useRef() },
    { component: About, id: 'about', ref: useRef() },
    { component: Resume, id: 'resume', ref: useRef() },
    { component: Projects, id: 'projects', ref: useRef() },
    { component: Talks, id: 'talks', ref: useRef() },
    { component: Philanthropy, id: 'philanthropy', ref: useRef() },
    { component: Contact, id: 'contact', ref: useRef() }
  ];

  const activeSection = useRecoilValue(activeState);

  useEffect(() => {
    if (activeSection.scrollTo) {
      const section = sections.find((s) => s.id === activeSection.id).ref.current.base;
      window.scrollTo({ behavior: 'smooth', top: section.offsetTop });
    }
  }, [ activeSection ]);

  return (
    <Fragment>
      <Helmet>
        <title>Michael Irigoyen - Front-End Software Engineer</title>
        <meta name='description' content="I'm a Chicago-based software engineer with a passion for front-end development and user experience." />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Michael Irigoyen - Front-End Software Engineer' />
        <meta name='twitter:description' content="I'm a Chicago-based software engineer with a passion for front-end development and user experience." />
        <meta name='twitter:image' content='https://www.irigoyen.dev/assets/images/twitter-card.png' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.irigoyen.dev/' />
        <meta property='og:title' content='Michael Irigoyen - Front-End Software Engineer' />
        <meta property='og:description' content="I'm a Chicago-based software engineer with a passion for front-end development and user experience." />
        <meta property='og:image' content='https://www.irigoyen.dev/assets/images/facebook-card.png' />
      </Helmet>
      {sections.map((section) => (<section.component ref={section.ref} />))}
    </Fragment>
  );
};

export default Home;
