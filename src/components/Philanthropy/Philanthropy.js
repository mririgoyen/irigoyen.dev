import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Philanthropy.scss';

const Philanthropy = ({ setActive }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='philanthropy'
      setActive={setActive}
    >
      <h1>Philanthropy</h1>
    </SectionContainer>
  );
};

export default Philanthropy;