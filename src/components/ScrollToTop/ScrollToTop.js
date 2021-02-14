import { useEffect, useState } from 'preact/hooks';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';

import classes from './ScrollToTop.scss';

const ScrollToTop = () => {
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window?.pageYOffset > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      aria-label='Scroll to Top'
      aria-hidden={!scrolled}
      className={cx(classes.root, {
        [classes.hide]: !scrolled
      })}
      tabIndex='-1'
      title='Scroll to Top'
      onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
    >
      <Icon path={mdiArrowUp} size={1} />
    </button>
  );
};

export default ScrollToTop;