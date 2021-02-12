import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/ibm-plex-serif';
import '@fontsource/ibm-plex-serif/400-italic.css';
import '@fontsource/ibm-plex-serif/500.css';

import './style/defaults.scss';

import { RecoilRoot } from 'recoil';
import { Provider as PrerenderProvider } from '@preact/prerender-data-provider';

import Router from './Router';

const App = (props) => (
  <PrerenderProvider value={props}>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </PrerenderProvider>
);

export default App;