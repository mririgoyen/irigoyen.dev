import Icon from '@mdi/react';
import { mdiFileDownloadOutline } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';

import mirigoyenImage from '../../assets/mirigoyen.jpg';

import classes from './About.scss';

const About = ({ setActive }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='about'
      setActive={setActive}
    >
      <div className={classes.avatar}>
        <img alt='Michael Irigoyen' src={mirigoyenImage} />
      </div>
      <div className={classes.about}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis ipsum ac porta consequat. Aliquam ac urna in massa auctor lobortis ut sit amet ante. Pellentesque laoreet ac lorem in aliquam. Nulla vitae nunc in nisl imperdiet faucibus eu sit amet tortor. Duis ac lacinia quam. Aenean interdum augue in vestibulum ultrices. Pellentesque convallis fringilla ipsum nec posuere. Vivamus ac porta tortor. Ut eu ultrices leo. Nunc id nunc nisi. Donec aliquam diam eu orci commodo ultricies. Nullam nisl leo, lacinia in porttitor quis, malesuada et ipsum. Phasellus diam velit, facilisis vel metus ut, dictum convallis lectus.</p>
        <div className={classes.contact}>
          <div className={classes.details}>
            <h2>Contact Details</h2>
            <p>Michael Irigoyen</p>
            <p><a href='mailto:michael@irigoyen.dev'>michael@irigoyen.dev</a></p>
          </div>
          <div className={classes.actions}>
            <a href='#'>
              <Icon path={mdiFileDownloadOutline} size={1} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;