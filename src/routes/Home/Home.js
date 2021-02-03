import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

import useConfig from '../../hooks/useConfig';

import classes from './Home.scss';

const Home = ({ reportVisibility }) => {
  const { config } = useConfig();

  return (
    <div className={classes.root}>
      <Hero reportVisibility={reportVisibility} />
      <div className={classes.container}>
        {config.filter((s) => s.id !== 'home').map((section) => {
          return <section.component reportVisibility={reportVisibility} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
