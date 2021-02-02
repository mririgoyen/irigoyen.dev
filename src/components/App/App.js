import { useState } from 'preact/hooks';
import { Router } from 'preact-router';

import Header from '../Header/Header';

import Home from '../../routes/Home/Home';
import Blog from '../../routes/Blog/Blog';

import classes from './App.scss';

const App = () => {
  const [ active, setActive ] = useState('home');

  return (
    <div className={classes.root}>
      <Header active={active} />
      <Router>
        <Home path='/' setActive={setActive} />
        <Blog path='/blog/' user='me' />
      </Router>
    </div>
  );
};

export default App;
