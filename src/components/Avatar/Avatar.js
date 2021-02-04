import cx from 'classnames';

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Avatar.scss';

const Avatar = ({ className }) => {
  return (
    <div className={cx(classes.root, className)}>
      <picture>
        <source srcset={mirigoyenWebp} type='image/webp' />
        <source srcset={mirigoyenJpeg} type='image/jpeg' />
        <img alt='Michael Irigoyen' height={200} src={mirigoyenJpeg} width={224} />
      </picture>
    </div>
  );
};

export default Avatar;