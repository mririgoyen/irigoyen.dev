import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Philanthropy.scss';

const Philanthropy = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='philanthropy'
      reportVisibility={reportVisibility}
    >
      <h1>Philanthropy</h1>
    </SectionContainer>
  );
};

export default Philanthropy;