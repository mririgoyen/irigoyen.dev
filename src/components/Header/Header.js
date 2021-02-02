import classes from './Header.scss';

const Header = () => (
  <header class={classes.header}>
    <nav>
      <a className={classes.current} href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#philanthropy'>Philanthropy</a>
      <a href='#resume'>Resume</a>
      <a href='#contact'>Contact</a>
    </nav>
  </header>
);

export default Header;
