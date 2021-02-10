import { useEffect } from 'preact/hooks';

import classes from './ErrorPage.scss';

const ErrorPage = () => {
  useEffect(() => {
    document.body.classList.add(classes.error);
    return () => document.body.classList.remove(classes.error);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          <span>— 404 —</span>
          Page Not Found
        </h1>
        <p>The page you are looking for could not be found.</p>
        <p>
          <a href='/' native>Return to the Homepage</a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;