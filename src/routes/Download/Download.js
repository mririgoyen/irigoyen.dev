import { useState } from 'preact/hooks';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

import useInterval from '../../hooks/useInterval';
import useMetaTags from '../../hooks/useMetaTags';

import Avatar from '../../components/Avatar/Avatar';

import classes from './Download.scss';

const Download = ({ file, name }) => {
  const [ downloaded, setDownloaded ] = useState(false);
  const updateMetaTags = useMetaTags();

  useInterval(() => {
    setDownloaded(true);
    window.location.replace(file);
  }, !downloaded ? 3000 : null);

  return (
    <div className={classes.root}>
      {updateMetaTags({ robotsBehavior: 'noindex' })}
      <div className={classes.about}>
        <Avatar />
        <a href='/'>Michael Irigoyen</a>
      </div>
      <div className={classes.container}>
        <p>Your file should begin downloading shortly.</p>
        <a href={file}>
          <p className={classes.file}>
            <Icon path={mdiArrowDown} size={.8} />
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