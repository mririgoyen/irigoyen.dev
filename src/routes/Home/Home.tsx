import { FunctionComponent } from 'preact';
import { useRef } from 'preact/hooks';

import { HomeProps } from './HomeProps';

import useMetaTags from '../../hooks/useMetaTags';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';
import Talks from '../../components/Talks/Talks';
import Philanthropy from '../../components/Philanthropy/Philanthropy';
import Contact from '../../components/Contact/Contact';

import classes from './Home.scss';

const Home: FunctionComponent<HomeProps> = ({ setActiveSection }) => {
  const sections = [
    { component: Hero, id: 'home', ref: useRef() },
    { component: About, id: 'about', ref: useRef() },
    { component: Resume, id: 'resume', ref: useRef() },
    { component: Projects, id: 'projects', ref: useRef() },
    { component: Talks, id: 'talks', ref: useRef() },
    { component: Philanthropy, id: 'philanthropy', ref: useRef() },
    { component: Contact, id: 'contact', ref: useRef() }
  ];

  const updateMetaTags = useMetaTags();

  return (
    <div className={classes.root} role='main'>
      {updateMetaTags()}
      {sections.map((section) => (<section.component ref={section.ref} setActiveSection={setActiveSection} />))}
    </div>
  );
};

export default Home;
