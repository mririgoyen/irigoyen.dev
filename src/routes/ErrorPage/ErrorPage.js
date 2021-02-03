import { Link } from 'preact-router/match';

import classes from './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          <span>— 404 —</span>
          Page Not Found
        </h1>
        <p>The page you are looking for could not be found.</p>
        <p>
          <Link href='/'>Return to the Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;