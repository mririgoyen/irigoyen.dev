import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/ibm-plex-serif';
import '@fontsource/ibm-plex-serif/400-italic.css';
import '@fontsource/ibm-plex-serif/500.css';

import './style/defaults.scss';

import { RecoilRoot } from 'recoil';

import Router from './Router';

const App = () => (
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

export default App;