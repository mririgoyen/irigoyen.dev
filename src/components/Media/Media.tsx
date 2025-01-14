import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiPodcast } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';
import Button from '../Button/Button';

import { MediaProps } from './MediaProps';

import HassPodcastWebp from '../../assets/images/hasspodcast.webp';
import HassPodcastJpeg from '../../assets/images/hasspodcast.jpg';

import classes from './Media.scss';

const Talks: FunctionComponent<MediaProps> = ({ setActiveSection }) => {
  return (
    <SectionContainer
      className={classes.root}
      id='media'
      setActiveSection={setActiveSection}
    >
      <header>
        <h2>In The Media</h2>
      </header>
      <div className={classes.items}>
        <div className={classes.item}>
          <figure role='none'>
            <picture>
              <source srcset={HassPodcastWebp} type='image/webp' />
              <source srcset={HassPodcastJpeg} type='image/jpeg' />
              <img
                alt='Home Assistant Podcast'
                height={194}
                loading='lazy'
                src={HassPodcastJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='home-assistant-podcast'>Home Assistant Podcast</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Spotlight – Material Design Icons & Home Assistant</em>
              <span className={classes.bullet}>&bull;</span>
              <span>December 18, 2021</span>
            </p>
            <p>I sat down with <a href='https://bsky.app/profile/philhawthorne.com' rel='noreferrer' target='_blank'>Phil Hawthorne</a> and Rohan Karamandi and we had a chat about <a href='https://pictogrammers.com/library/mdi/' rel='noreferrer' target='_blank'>Material Design Icons</a>, how they work with <a href='https://www.home-assistant.io/' rel='noreferrer' target='_blank'>Home Assistant</a>, and all things home automation.</p>
            <Button
              aria-describedby='home-assistant-podcast'
              href='https://hasspodcast.io/sp008/'
              rel='noopener'
              startIcon={<Icon path={mdiPodcast} size={.9} />}
              target='_blank'
            >
              Listen to Podcast
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Talks;
