import cx from 'clsx';

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Avatar.scss';

const Avatar = ({ className }) => {
  return (
    <picture className={cx(classes.root, className)}>
      <source srcset={mirigoyenWebp} type='image/webp' />
      <source srcset={mirigoyenJpeg} type='image/jpeg' />
      <img
        alt='Michael Irigoyen'
        height={225}
        loading='lazy'
        src={mirigoyenJpeg}
        width={200}
      />
    </picture>
  );
};

export default Avatar;