import { mdiHome } from '@mdi/js';

import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Projects from '../components/Projects/Projects';
import Talks from '../components/Talks/Talks';
import Philanthropy from '../components/Philanthropy/Philanthropy';
import Contact from '../components/Contact/Contact';

const useConfig = () => {
  return {
    config: [
      { icon: mdiHome, id: 'home', name: 'Home' },
      { component: About, id: 'about', name: 'About' },
      { component: Resume, id: 'resume', name: 'Resume' },
      { component: Projects, id: 'projects', name: 'Projects' },
      { component: Talks, id: 'talks', name: 'Talks' },
      { component: Philanthropy, id: 'philanthropy', name: 'Philanthropy' },
      { component: Contact, id: 'contact', name: 'Contact' }
    ]
  };
};

export default useConfig;