import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';

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

  const [ active, setActive ] = useState('home');
  const [ visibilities, setVisibilities ] = useState(initialVisibility);

  const reportVisibility = (section, inView) => {
    setVisibilities({ ...visibilities, [section]: inView });
  };

  useEffect(() => {
    console.log({ visibilities });

    const current = Object.keys(visibilities).filter((v) => visibilities[v]).pop();
    setActive(current);
  }, [ visibilities ]);

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
