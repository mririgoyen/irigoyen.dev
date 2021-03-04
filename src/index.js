import { Provider as PrerenderProvider } from '@preact/prerender-data-provider';
import { ThemeProvider } from 'use-theme';

import Router from './Router';

import './style/defaults.scss';

const App = (props) => {
  return (
    <PrerenderProvider value={props}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </PrerenderProvider>
  );
};

export default App;