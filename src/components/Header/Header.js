import { useEffect, useState } from 'preact/hooks';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';
import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness7, mdiChevronRight, mdiClose, mdiHome, mdiMenu } from '@mdi/js';

import useWindowSize from '../../hooks/useWindowSize';

import logoImageWebp from '../../assets/icons/favicon-48x48.webp';
import logoImagePng from '../../assets/icons/favicon-48x48.png';

import classes from './Header.scss';

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

const Header = ({ activeSection, setActiveSection, showScroll }) => {
  const { toggle: toggleTheme, value: isDarkMode } = useDarkMode(false);
  const [ themeControl, setThemeControl ] = useState();
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ scrollPercent, setScrollPercent ] = useState(0);
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

  useEffect(() => {
    setThemeControl(
      <li
        className={classes['theme-toggle']}
        onClick={toggleTheme}
        title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} mode`}
      >
        <Icon path={isDarkMode ? mdiBrightness7 : mdiBrightness4} size={1} />
      </li>
    );
  }, [ isDarkMode ]);

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

  const navHidden = windowSize.width <= classes['mobile-width'].match(/\d+/)[0] && !menuOpen;
  const sectionTitle = MENU_ITEMS.find((i) => i.id === activeSection.id) ? activeSection.id : undefined;

  return (
    <header className={classes.header}>
      <div className={classes.mobile}>
        <div className={classes['nav-container']}>
          <a
            onClick={() => {
              setMenuOpen(false);
              setActiveSection({ id: 'home' });
            }}
            href='/#home'
            native
          >
            <picture className={classes.logo}>
              <source srcset={logoImageWebp} type='image/webp' />
              <source srcset={logoImagePng} type='image/png' />
              <img
                alt=''
                height={24}
                src={logoImagePng}
                width={24}
              />
            </picture>
            irigoyen.dev
          </a>
          {sectionTitle && (
            <Fragment>
              <Icon className={classes.chevron} path={mdiChevronRight} size={1} />
              {activeSection.id === 'home' ? <Icon path={mdiHome} size={1} title='Home' /> : activeSection.id}
            </Fragment>
          )}
        </div>
        <button
          aria-label='Menu'
          className={cx({
            [classes.open]: menuOpen
          })}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} title='Close' />
        </button>
      </div>
      <nav
        aria-hidden={navHidden}
        className={cx({
          [classes.active]: menuOpen
        })}
      >
        <ul>
          {MENU_ITEMS.map(({ id, route: itemRoute }) => {
            return (
              <li>
                <a
                  aria-label={id}
                  className={cx(classes[id], {
                    [classes.current]: isSelected(id)
                  })}
                  href={`${itemRoute}${!['blog'].includes(id) ? `#${id}` : '' }`}
                  key={id}
                  native
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection({ id });
                  }}
                  tabIndex={navHidden ? -1 : undefined}
                >
                  {id === 'home' ? (
                    <em className={classes.home}>
                      <span className={classes['desktop-home']}>
                        <picture className={classes.logo}>
                          <source srcset={logoImageWebp} type='image/webp' />
                          <source srcset={logoImagePng} type='image/png' />
                          <img
                            alt=''
                            height={24}
                            src={logoImagePng}
                            width={24}
                          />
                        </picture>
                        irigoyen.dev
                      </span>
                      <span className={classes['mobile-home']}>
                        <Icon path={mdiHome} size={1} title='Home' />
                      </span>
                    </em>
                  ) : id}
                </a>
              </li>
            );
          })}
          {themeControl}
        </ul>
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
