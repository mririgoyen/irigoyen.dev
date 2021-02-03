import { Fragment } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

import useConfig from '../../hooks/useConfig';

import classes from './Home.scss';

const Home = () => {
  const { config } = useConfig();

  const [ active, setActive ] = useState();

  const reportVisibility = useCallback((section, inView) => {
    if (inView) {
      setActive(section);
    }
  }, [ setActive ]);

  return (
    <Fragment>
      <Header active={active} />
      <div className={classes.root}>
        <Hero reportVisibility={reportVisibility} />
        <div className={classes.container}>
          {config.filter((s) => s.id !== 'home').map((section) => {
            return <section.component reportVisibility={reportVisibility} />;
          })}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
