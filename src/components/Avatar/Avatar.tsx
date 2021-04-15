import { FunctionComponent } from 'preact';
import cx from 'clsx';

import { AvatarProps } from './AvatarProps';

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Avatar.scss';

const Avatar: FunctionComponent<AvatarProps> = ({ className }) => {
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
