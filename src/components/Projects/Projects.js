import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Projects.scss';

const Projects = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='projects'
      reportVisibility={reportVisibility}
    >
      <h1>Projects</h1>
    </SectionContainer>
  );
};

export default Projects;