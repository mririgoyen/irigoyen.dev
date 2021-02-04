import SectionContainer from '../SectionContainer/SectionContainer';

import PictogrammersWebp from '../../assets/images/pictogrammers.webp';
import PictogrammersPng from '../../assets/images/pictogrammers.png';

import classes from './Projects.scss';

const Projects = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='projects'
      reportVisibility={reportVisibility}
    >
      <div className={classes.container}>
        <header>
          <h1>Projects</h1>
        </header>
        <div className={classes.items}>
          <div className={classes.item}>
            <figure className={classes.pictogrammers}>
              <picture>
                <source srcset={PictogrammersWebp} type='image/webp' />
                <source srcset={PictogrammersPng} type='image/png' />
                <img
                  alt='Pictogrammers'
                  height={275}
                  loading='lazy'
                  src={PictogrammersPng}
                  width={275}
                />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>Pictogrammers</h2>
              <h3>
                <em>Iconography for Developers</em>
              </h3>
              <p><a href='https://github.com/Pictogrammers'>Pictogrammers</a> is an open-source community developing high-quality icons for use by designers and developers in web and application development. As a core contributor, I help maintain our icon databases, <a href='https://github.com/Templarian/MaterialDesign/issues'>field issues on GitHub</a>, assist in creation and maintenance of our supporting websites, and have personally contributed more than 1000 icons to our <a href='https://materialdesignicons.com/'>Material Design Icons</a> library!</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;