import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Talks from '../../components/Talks/Talks';
import Resume from '../../components/Resume/Resume';
import Philanthropy from '../../components/Philanthropy/Philanthropy';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

import classes from './Home.scss';

const Home = ({ setActive }) => {
  return (
    <div className={classes.root}>
      <Hero setActive={setActive} />
      <div className={classes.container}>
        <About setActive={setActive} />
        <Projects setActive={setActive} />
        <Talks setActive={setActive} />
        <Resume setActive={setActive} />
        <Philanthropy setActive={setActive} />
        <Contact setActive={setActive} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
