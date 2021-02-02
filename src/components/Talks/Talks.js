import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Talks.scss';

const Talks = ({ setActive }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='talks'
      setActive={setActive}
    >
      <h1>Talks</h1>
    </SectionContainer>
  );
};

export default Talks;