import { useCallback, useState } from 'preact/hooks';
import { Router } from 'preact-router';

import Header from '../Header/Header';
import Home from '../../routes/Home/Home';
import Blog from '../../routes/Blog/Blog';

import classes from './App.scss';

const App = () => {
  const [ active, setActive ] = useState();

  const reportVisibility = useCallback((section, inView) => {
    if (inView) {
      setActive(section);
    }
  }, [ setActive ]);

  return (
    <div className={classes.root}>
      <Header active={active} />
      <Router>
        <Home path='/' reportVisibility={reportVisibility} />
        <Blog path='/blog/' user='me' />
      </Router>
    </div>
  );
};

export default App;
