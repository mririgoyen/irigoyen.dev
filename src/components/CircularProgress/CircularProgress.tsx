import { FunctionComponent } from 'preact';

import classes from './CircularProgress.scss';

const CircularProgress: FunctionComponent = () => {
  return (
    <div className={classes.root}>
      <svg
        height='65px'
        viewBox='0 0 66 66'
        width='65px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          fill='none'
          stroke-width='6'
          stroke-linecap='round'
          cx='33'
          cy='33'
          r='30'
        />
      </svg>
      <p>One Moment Please...</p>
    </div>
  );
};

export default CircularProgress;
