import { Provider as PrerenderProvider } from '@preact/prerender-data-provider';

import Router from './Router';

import './style/defaults.scss';

const App = (props) => {
  return (
    <PrerenderProvider value={props}>
      <Router />
    </PrerenderProvider>
  );
};

export default App;