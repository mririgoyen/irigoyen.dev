import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Projects.scss';

const Projects = ({ setActive }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='projects'
      setActive={setActive}
    >
      <h1>Projects</h1>
    </SectionContainer>
  );
};

export default Projects;