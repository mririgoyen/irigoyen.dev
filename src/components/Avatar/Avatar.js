import cx from 'classnames';

import mirigoyenImage from '../../assets/mirigoyen.jpg';

import classes from './Avatar.scss';

const Avatar = ({ className }) => {
  return (
    <div className={cx(classes.root, className)}>
      <img alt='Michael Irigoyen' src={mirigoyenImage} />
    </div>
  );
};

export default Avatar;