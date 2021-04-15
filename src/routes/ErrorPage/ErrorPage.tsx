import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

import { ErrorPageProps } from './ErrorPageProps';

import useMetaTags from '../../hooks/useMetaTags';
import Button from '../../components/Button/Button';

import classes from './ErrorPage.scss';

const ErrorPage: FunctionComponent<ErrorPageProps> = ({
  type = 'page'
}) => {
  const updateMetaTags = useMetaTags();

  useEffect(() => {
    document.body.classList.add(classes.error);
    return () => document.body.classList.remove(classes.error);
  }, []);

  return (
    <div className={classes.root}>
      {updateMetaTags({ robotsBehavior: 'noindex,nofollow' })}
      <div className={classes.container}>
        <h1>
          <span>— 404 —</span>
          {type} Not Found
        </h1>
        <p>The {type} you are looking for could not be found.</p>
        <p>
          <Button href={type === 'page' ? '/' : '/blog/'} native>
            Return to the {type === 'page' ? 'Homepage' : 'Blog'}
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
