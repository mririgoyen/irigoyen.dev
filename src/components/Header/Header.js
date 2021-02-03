import { useState } from 'preact/hooks';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiHome, mdiMenu } from '@mdi/js';

import useConfig from '../../hooks/useConfig';

import classes from './Header.scss';

const Header = ({ active }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const { config } = useConfig();

  return (
    <header className={classes.header}>
      <div className={classes.mobile}>
        <p><em>irigoyen.dev</em> <Icon className={classes.chevron} path={mdiChevronRight} size={1} /> {active === 'home' ? <Icon path={mdiHome} size={1} /> : active}</p>
        <button onClick={() => setMenuOpen(true)}>
          <Icon path={mdiMenu} size={1} />
        </button>
      </div>
      <nav
        className={cx({
          [classes.active]: menuOpen
        })}
        onClick={() => setMenuOpen(false)}
      >
        {config.map((section) => (
          <a
            className={cx({ [classes.current]: active === section.id })}
            href={`#${section.id}`}
          >
            {section.icon ? <Icon path={section.icon} size={1} /> : section.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
