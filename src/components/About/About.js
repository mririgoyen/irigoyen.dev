import Icon from '@mdi/react';
import { mdiFileDownloadOutline } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';

import mirigoyenImage from '../../assets/mirigoyen.jpg';

import classes from './About.scss';

const About = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='about'
      reportVisibility={reportVisibility}
    >
      <div className={classes.avatar}>
        <img alt='Michael Irigoyen' src={mirigoyenImage} />
      </div>
      <div className={classes.about}>
        <h1>About Me</h1>
        <p>I'm a software engineer who has been working in the industry for over fifteen years. I enjoy music, gaming, iconography, and home improvement projects. I love to continuously learn new things and I find expanding my knowledge base often comes while helping others do the same. One of my passions is the Extra Life fundraiser, which raises money for kids in Children's Miracle Network Hospitals.</p>
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