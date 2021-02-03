import { useState } from 'preact/hooks';
import { Router } from 'preact-router';

import useConfig from '../../hooks/useConfig';

import Header from '../Header/Header';
import Home from '../../routes/Home/Home';
import Blog from '../../routes/Blog/Blog';

import classes from './App.scss';

const App = () => {
  const [ active, setActive ] = useState([]);

  const { config } = useConfig();

  const sortSections = (a, b) => {
    return config.findIndex((e) => e.id === a) > config.findIndex((e) => e.id === b) ? 1 : -1;
  };

  const reportVisibility = (section, inView) => {
    if (inView && !active.includes(section)) {
      return setActive([...active, section].sort(sortSections));
    }

    if (!inView && active.includes(section)) {
      return setActive(active.filter((s) => s !== section).sort(sortSections));
    }
  };

  return (
    <div className={classes.root}>
      <Header active={active[0] || 'home'} />
      <Router>
        <Home path='/' reportVisibility={reportVisibility} />
        <Blog path='/blog/' user='me' />
      </Router>
    </div>
  );
};

export default App;
