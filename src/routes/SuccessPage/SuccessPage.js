import { useEffect } from 'preact/hooks';

import useMetaTags from '../../hooks/useMetaTags';
import Button from '../../components/Button/Button';

import classes from './SuccessPage.scss';

const SuccessPage = () => {
  const updateMetaTags = useMetaTags();

  useEffect(() => {
    document.body.classList.add(classes.success);
    return () => document.body.classList.remove(classes.success);
  }, []);

  return (
    <div className={classes.root}>
      {updateMetaTags({ robotsBehavior: 'noindex,nofollow' })}
      <div className={classes.container}>
        <h1>
          Contact Request Sent
        </h1>
        <p>Thank you for your interest! I will respond to you as soon as I can.</p>
        <p>
          <Button href='/' native>
            Return to the Homepage
          </Button>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;