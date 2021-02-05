import { ScrollingProvider } from 'react-scroll-section';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Resume from '../../components/Resume/Resume';
import Projects from '../../components/Projects/Projects';
import Talks from '../../components/Talks/Talks';
import Philanthropy from '../../components/Philanthropy/Philanthropy';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <ScrollingProvider>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Talks />
      <Philanthropy />
      <Contact />
      <Footer />
    </ScrollingProvider>
  );
};

export default Home;
