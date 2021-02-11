import { Fragment } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useRecoilValue } from 'recoil';

import { activeState } from '../../atoms/activeState';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
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

  useEffect(() => document.title = 'Michael Irigoyen - Front-End Software Engineer', []);

  useEffect(() => {
    if (activeSection.scrollTo) {
      const section = sections.find((s) => s.id === activeSection.id).ref.current.base;
      window.scrollTo({ behavior: 'smooth', top: section.offsetTop });
    }
  }, [ activeSection ]);

  return (
    <Fragment>
      {sections.map((section) => (<section.component ref={section.ref} />))}
      <ScrollToTop />
    </Fragment>
  );
};

export default Home;
