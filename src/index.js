import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/ibm-plex-serif/latin-400.css';
import '@fontsource/ibm-plex-serif/latin-400-italic.css';
import '@fontsource/ibm-plex-serif/latin-500.css';

import './style/defaults.scss';

import { Provider as PrerenderProvider } from '@preact/prerender-data-provider';

import Router from './Router';

const App = (props) => (
  <PrerenderProvider value={props}>
    <Router />
  </PrerenderProvider>
);

export default App;