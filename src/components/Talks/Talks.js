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
      <div className={classes.container}>
        <h1>Talks</h1>
      </div>
    </SectionContainer>
  );
};

export default Talks;