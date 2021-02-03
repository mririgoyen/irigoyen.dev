import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Talks.scss';

const Talks = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='talks'
      reportVisibility={reportVisibility}
    >
      <h1>Talks</h1>
    </SectionContainer>
  );
};

export default Talks;