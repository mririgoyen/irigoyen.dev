import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiHandHeart } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';
import Button from '../Button/Button';

import { PhilanthropyProps } from './PhilanthropyProps';

import ELTeamWebp from '../../assets/images/elteam.webp';
import ELTeamJpeg from '../../assets/images/elteam.jpg';

import classes from './Philanthropy.scss';

const Philanthropy: FunctionComponent<PhilanthropyProps> = ({ setActiveSection }) => {
  return (
    <SectionContainer
      className={classes.root}
      id='philanthropy'
      setActiveSection={setActiveSection}
    >
      <header>
        <h2>Philanthropy</h2>
      </header>
      <div className={classes.intro}>
        <figure>
          <picture>
            <source srcset={ELTeamWebp} type='image/webp' />
            <source srcset={ELTeamJpeg} type='image/jpeg' />
            <img
              alt='Accusoft Extra Life Team - 2019'
              height={268}
              loading='lazy'
              src={ELTeamJpeg}
              width={574}
            />
          </picture>
          <figcaption>Accusoft Extra Life Team 2019</figcaption>
        </figure>
        <div>
          <p>For the past eight years, I have been participating in the <a href='https://www.extra-life.org/participant/goyney'>Extra Life</a> fundraiser. Extra Life works to save local kids through the power of gaming, and 100% of all donations go directly to Children's Miracle Network Hospitals. From 2017 to 2020, I led the Accusoft Team and we raised over $30,000 in those four years!</p>
          <p>I have been a huge advocate for Extra Life over the years, because I believe so strongly in its goal: to give hope to children who are confronting scary things no child should have to face. In addition to raising money for Extra Life, I have also:</p>
          <ul>
            <li>Created an <a href='https://www.npmjs.com/package/extra-life'>NPM module wrapping the Extra Life API</a>, allowing fundraisers to build interactive applications to help them in their fundraising goals.</li>
            <li><a href='#talks' onClick={() => setActiveSection({ id: 'talks' })}>Given a presentation</a> about the creation of that NPM module at API: World 2019.</li>
          </ul>
          <p>If I have ever helped you in the past, and you are looking for a way to give back or if you are just feeling generous, please consider donating to this amazing cause! #ForTheKids</p>
          <div className={classes.action}>
            <Button
              className={classes.button}
              href='https://www.extra-life.org/participant/goyney'
              startIcon={<Icon path={mdiHandHeart} size={1} />}
              variant='dark'
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Philanthropy;