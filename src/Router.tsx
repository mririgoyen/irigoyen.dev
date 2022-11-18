import { Fragment, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Router as PreactRouter, getCurrentUrl } from 'preact-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './routes/Home/Home';
import ContactCard from './routes/ContactCard/ContactCard';
import Blog from './routes/Blog/Blog';
import Download from './routes/Download/Download';
import ErrorPage from './routes/ErrorPage/ErrorPage';

const Router: FunctionComponent = () => {
  const [ headerScrollEnabled, setHeaderScrollEnabled ] = useState<boolean>(true);
  const [ activeSection, setActiveSection ] = useState({ id: 'home' });
  const [ footerVisible, setFooterVisible ] = useState<boolean>(true);

  useEffect(() => {
    const initialUrl = getCurrentUrl();
    setActiveSection({ id: initialUrl.split('/')[1] });
  }, []);

  const onRouteChange = (e: any) => {
    if (!e.current.props.activeHeader) {
      setActiveSection({ id: '' });
    }

    if (e.current.props.showHeaderScroll) {
      setHeaderScrollEnabled(true);
    } else {
      setHeaderScrollEnabled(false);
    }

    setFooterVisible(!e.current.props.disableFooter);
  };

  return (
    <Fragment>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        showScroll={headerScrollEnabled}
      />
      <PreactRouter onChange={onRouteChange}>
        <Home
          activeHeader
          activeSection={activeSection}
          path='/'
          setActiveSection={setActiveSection}
          showHeaderScroll
        />
        <ContactCard
          disableFooter
          path='/card/'
        />
        <Blog
          activeHeader
          path='/blog/'
        />
        <Blog
          activeHeader
          path='/blog/:postYear/:postMonth/:postDay/:postTitle'
          showHeaderScroll
        />

        <Download
          name='Michael Irigoyen Resume.pdf'
          path='/resume/download'
          file='https://github.com/mririgoyen/mririgoyen/blob/main/Michael%20Irigoyen%20Resume.pdf?raw=true'
        />
        <Download
          name='1UP - Empowering Communities with APIs.pptx'
          path='/presentations/1up-empowering-communities-with-apis'
          file='https://github.com/mririgoyen/talks/blob/main/1UP%20-%20Empowering%20Communities%20with%20APIs/1UP%20-%20Empowering%20Communities%20with%20APIs.pptx?raw=true'
        />
        <Download
          name='Design Your API for Humans.pptx'
          path='/presentations/design-your-api-for-humans'
          file='https://github.com/mririgoyen/talks/blob/main/Design%20Your%20API%20for%20Humans/Design%20Your%20API%20for%20Humans.pptx?raw=true'
        />
        <Download
          name='The API User Experience.pptx'
          path='/presentations/the-api-user-experience'
          file='https://github.com/mririgoyen/talks/blob/main/The%20API%20User%20Experience/The%20API%20User%20Experience.pptx?raw=true'
        />
        <Download
          name='Continuous DevOps.pptx'
          path='/presentations/continuous-devops'
          file='https://github.com/mririgoyen/talks/blob/main/Continuous%20DevOps/Continuous%20DevOps.pptx?raw=true'
        />
        <Download
          name='Nobody Cares About Your UI.pptx'
          path='/presentations/nobody-cares-about-your-ui'
          file='https://github.com/mririgoyen/talks/blob/main/Nobody%20Cares%20About%20Your%20UI/Nobody%20Cares%20About%20Your%20UI.pptx?raw=true'
        />

        <ErrorPage default path='/404' />
      </PreactRouter>
      <Footer footerVisible={footerVisible} />
    </Fragment>
  );
};

export default Router;
