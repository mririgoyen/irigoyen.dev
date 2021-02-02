import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';

import classes from './Home.scss';

const Home = () => (
  <div class={classes.home}>
    <Hero />
    <About />
  </div>
);

export default Home;
