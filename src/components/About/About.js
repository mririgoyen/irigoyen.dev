import Icon from '@mdi/react';
import { mdiFileDownloadOutline } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';
import Avatar from '../Avatar/Avatar';

import classes from './About.scss';

const About = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='about'
      reportVisibility={reportVisibility}
    >
      <Avatar className={classes.avatar} />
      <div className={classes.about}>
        <h1>About Me</h1>
        <p>I'm a software engineer who has been working in the industry for over fifteen years. I enjoy music, gaming, iconography, and home improvement projects. I love to continuously learn new things and I find expanding my knowledge base often comes while helping others do the same. One of my passions is the <a href='#philanthropy'>Extra Life fundraiser</a>, which raises money for kids in Children's Miracle Network Hospitals.</p>
        <div className={classes.contact}>
          <div className={classes.details}>
            <h2>Contact Details</h2>
            <p>Michael Irigoyen</p>
            <p><a href='mailto:michael@irigoyen.dev'>michael@irigoyen.dev</a></p>
          </div>
          <div className={classes.actions}>
            <a href='/resume'>
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