import { Router } from 'preact-router';

import Header from '../Header/Header';

import Home from '../../routes/Home/Home';
import Blog from '../../routes/Blog/Blog';

import classes from './App.scss';

const App = () => (
  <div className={classes.root}>
    <Header />
    <Router>
      <Home path='/' />
      <Blog path='/blog/' user='me' />
    </Router>
  </div>
);

export default App;
