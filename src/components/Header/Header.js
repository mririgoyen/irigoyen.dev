import { useState } from 'preact/hooks';
import cx from 'classnames';
import { useScrollSections } from 'react-scroll-section';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiClose, mdiHome, mdiMenu } from '@mdi/js';

import classes from './Header.scss';

const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const sections = useScrollSections();
  const activeSection = sections.find((s) => s.selected)?.id || 'home';

  return (
    <header className={classes.header}>
      <div className={classes.mobile}>
        <p>
          <em>irigoyen.dev</em>
          <Icon className={classes.chevron} path={mdiChevronRight} size={1} />
          {activeSection === 'home' ? <Icon path={mdiHome} size={1} /> : activeSection}
        </p>
        <button aria-label='Menu' onClick={() => setMenuOpen(!menuOpen)}>
          <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} />
        </button>
      </div>
      <nav
        className={cx({
          [classes.active]: menuOpen
        })}
      >
        {sections.map((section) => (
          <button
            aria-label={section.id}
            className={cx({ [classes.current]: section.selected })}
            key={section.id}
            onClick={() => {
              section.onClick();
              history.pushState({}, '', `#${section.id}`);
              setMenuOpen(false);
            }}
            selected={section.selected}
          >
            {section.id === 'home' ? <Icon path={mdiHome} size={1} /> : section.id}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
