import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

import useConfig from '../../hooks/useConfig';

import classes from './Home.scss';

const Home = () => {
  const { config } = useConfig();
  const initialVisibility = config.reduce((output, { id }) => {
    output[id] = id === 'home';
    return output;
  }, {});

  const [ active, setActive ] = useState(initialVisibility);
  const reportVisibility = (section, inView) => setActive({ ...active, [section]: inView });
  const getLastestActive = () => Object.keys(active).filter((a) => active[a]).pop();

  return (
    <Fragment>
      <Header active={getLastestActive()} />
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
