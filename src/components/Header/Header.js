import { useEffect, useState } from 'preact/hooks';
import { useRecoilState } from 'recoil';
import cx from 'classnames';
import { route } from 'preact-router';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiClose, mdiHome, mdiMenu } from '@mdi/js';

import { activeState } from '../../atoms/activeState';

import useWindowSize from '../../hooks/useWindowSize';

import classes from './Header.scss';

const miIcon = 'M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M18,18h-1.988V9.755h-0.106l-3.162,8.21h-1.486L8.095,9.738H7.989V18H6V6h2.536l3.397,8.695h0.134L15.465,6H18V18z';

const MENU_ITEMS = [
  { id: 'home', route: '/' },
  { id: 'about', route: '/' },
  { id: 'resume', route: '/' },
  { id: 'projects', route: '/' },
  { id: 'talks', route: '/' },
  { id: 'philanthropy', route: '/' },
  { id: 'contact', route: '/' },
  { id: 'blog', route: '/blog/' }
];

const Header = ({ showScroll }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ scrollPercent, setScrollPercent ] = useState(0);
  const [ activeSection, setActiveSection ] = useRecoilState(activeState);
  const windowSize = useWindowSize();

  useEffect(() => {
    const getScrollPercent = () => {
      const { body, documentElement } = document;
      const percent = (documentElement.scrollTop || body.scrollTop) / ((documentElement.scrollHeight || body.scrollHeight) - documentElement.clientHeight) * 100;
      setScrollPercent(percent.toFixed(2));
    };

    window.addEventListener('scroll', getScrollPercent);
    return () => window.removeEventListener('scroll', getScrollPercent);
  }, []);

  const isSelected = (id) => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '' && activeSection.id === id) {
        return true;
      }

      if (window.location.hash === `#${id}`) {
        return true;
      }
    }
  };

  return (
    <header className={classes.header}>
      <div
        aria-hidden={windowSize.width > 736}
        className={classes.mobile}
        role='presentation'
      >
        <p>
          <em onClick={() => route('/')}>
            <Icon className={classes.logo} path={miIcon} size={1} />
            irigoyen.dev
          </em>
          <Icon className={classes.chevron} path={mdiChevronRight} size={1} />
          {activeSection.id === 'home' ? <Icon path={mdiHome} size={1} /> : activeSection.id}
        </p>
        <button
          aria-label='Menu'
          className={cx({
            [classes.open]: menuOpen
          })}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} />
        </button>
      </div>
      <nav
        aria-hidden={windowSize.width <= 736 && !menuOpen}
        className={cx({
          [classes.active]: menuOpen
        })}
      >
        {MENU_ITEMS.map(({ id, route: itemRoute }) => {
          return (
            <button
              aria-label={id}
              className={cx(classes[id], {
                [classes.current]: isSelected(id)
              })}
              key={id}
              onClick={() => {
                setMenuOpen(false);
                route(`${itemRoute}`);
                setActiveSection({ id, scrollTo: itemRoute === '/' });

                if (itemRoute !== '/') {
                  window.scrollTo(0, 0);
                }
              }}
            >
              {id === 'home' ? (
                <em className={classes.home}>
                  <span className={classes['desktop-home']}>
                    <Icon className={classes.logo} path={miIcon} size={1} />
                    irigoyen.dev
                  </span>
                  <span className={classes['mobile-home']}>
                    <Icon path={mdiHome} size={1} />
                  </span>
                </em>
              ) : id}
            </button>
          );
        })}
      </nav>
      <div className={classes.progress}>
        <div
          style={{
            width: showScroll ? `${scrollPercent}%` : 0
          }}
        />
      </div>
    </header>
  );
};

export default Header;
