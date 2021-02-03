import { Router } from 'preact-router';

import Download from '../../routes/Download/Download';
import Home from '../../routes/Home/Home';
import ErrorPage from '../../routes/ErrorPage/ErrorPage';

import classes from './App.scss';

const App = () => {
  return (
    <div className={classes.root}>
      <Router>
        <Home path='/' />

        <Download
          name='Michael Irigoyen.pdf'
          path='/resume'
          file='/Michael%20Irigoyen.pdf'
        />
        <Download
          name='1UP: Empowering Communities with APIs.pptx'
          path='/presentations/1up-empowering-communities-with-apis'
          file='https://github.com/goyney/presentations/blob/main/1UP_%20Empowering%20Communities%20with%20APIs.pptx?raw=true'
        />
        <Download
          name='Design Your API for Humans.pptx'
          path='/presentations/design-your-api-for-humans'
          file='https://github.com/goyney/presentations/blob/main/Design%20Your%20API%20for%20Humans.pptx?raw=true'
        />
        <Download
          name='The API User Experience.pptx'
          path='/presentations/the-api-user-experience'
          file='https://github.com/goyney/presentations/blob/main/The%20API%20User%20Experience.pptx?raw=true'
        />
        <Download
          name='Continuous DevOps.pptx'
          path='/presentations/continuous-devops'
          file='https://github.com/goyney/presentations/blob/main/Continuous%20DevOps.pptx?raw=true'
        />
        <Download
          name='Nobody Cares About Your UI.pptx'
          path='/presentations/nobody-cares-about-your-ui'
          file='https://github.com/goyney/presentations/blob/main/FED%20UP%20-%20Nobody%20Cares%20About%20Your%20UI.pptx?raw=true'
        />

        <ErrorPage default />
      </Router>
    </div>
  );
};

export default App;
