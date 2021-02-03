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
        <header>
          <h1>Talks & Presentations</h1>
        </header>
      </div>
    </SectionContainer>
  );
};

export default Talks;