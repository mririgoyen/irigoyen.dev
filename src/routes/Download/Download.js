import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import Icon from '@mdi/react';
import { mdiArrowDownCircleOutline } from '@mdi/js';

import Avatar from '../../components/Avatar/Avatar';

import classes from './Download.scss';

const Download = ({ file, name }) => {
  useEffect(() => {
    window.location.replace(file);
  }, [ file ]);

  return (
    <div className={classes.root}>
      <Avatar />
      <div className={classes.about}>
        <Link href='/'>Michael Irigoyen</Link>
      </div>
      <div className={classes.container}>
        <p>Your file should begin downloading shortly.</p>
        <a href={file}>
          <p className={classes.file}>
            <Icon path={mdiArrowDownCircleOutline} size={.8} />
            {name}
          </p>
          <p className={classes.manual}>
            Click here if your download does not start.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Download;