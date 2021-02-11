import { useEffect } from 'preact/hooks';

import classes from './ErrorPage.scss';

const ErrorPage = ({ type = 'page' }) => {
  useEffect(() => {
    document.body.classList.add(classes.error);
    return () => document.body.classList.remove(classes.error);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          <span>— 404 —</span>
          {type} Not Found
        </h1>
        <p>The {type} you are looking for could not be found.</p>
        <p>
          <a href={type === 'page' ? '/' : '/blog/'} native>Return to the {type === 'page' ? 'Homepage' : 'Blog'}</a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;