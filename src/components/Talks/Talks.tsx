import { FunctionComponent } from 'preact';
import cx from 'clsx';
import Icon from '@mdi/react';
import { mdiArrowDown, mdiYoutube } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';
import Button from '../Button/Button';

import { TalksProps } from './TalksProps';

import OneUpWebp from '../../assets/images/1up.webp';
import OneUpJpeg from '../../assets/images/1up.jpg';
import HumansWebp from '../../assets/images/humans.webp';
import HumansJpeg from '../../assets/images/humans.jpg';
import ApiUxWebp from '../../assets/images/apiux.webp';
import ApiUxJpeg from '../../assets/images/apiux.jpg';
import DevOpsWebp from '../../assets/images/devops.webp';
import DevOpsJpeg from '../../assets/images/devops.jpg';
import UiWebp from '../../assets/images/ui.webp';
import UiJpeg from '../../assets/images/ui.jpg';

import classes from './Talks.scss';

const Talks: FunctionComponent<TalksProps> = ({ setActiveSection }) => {
  return (
    <SectionContainer
      className={classes.root}
      id='talks'
      setActiveSection={setActiveSection}
    >
      <header>
        <h2>Talks & Presentations</h2>
      </header>
      <div className={classes.items}>
        <div className={classes.item}>
          <figure role='none'>
            <picture>
              <source srcset={OneUpWebp} type='image/webp' />
              <source srcset={OneUpJpeg} type='image/jpeg' />
              <img
                alt='Michael presenting 1UP: Empowering Communities with APIs'
                height={194}
                loading='lazy'
                src={OneUpJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='empowering-communities'>1UP: Empowering Communities with APIs</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Presented at API: World &mdash; San Jose, CA</em>
              <span className={classes.bullet}>&bull;</span>
              <span>October 9, 2019</span>
            </p>
            <p>Good APIs can level-up the dev life, but great APIs can bring an "Extra Life" to kids in need. In this talk, we discuss building a JavaScript API that can be used in 3 different ways from the same source code with the goal of making it easier to help raise money for sick kids in our communities via the Extra Life fundraiser.</p>
            <Button
              aria-describedby='empowering-communities'
              href='/presentations/1up-empowering-communities-with-apis/'
              startIcon={<Icon path={mdiArrowDown} size={.9} />}
            >
              Download Slides
            </Button>
          </div>
        </div>

        <div className={cx(classes.item, classes.reverse)}>
          <figure role='none'>
            <picture>
              <source srcset={HumansWebp} type='image/webp' />
              <source srcset={HumansJpeg} type='image/jpeg' />
              <img
                alt='Michael presenting Design Your API for Humans'
                height={194}
                loading='lazy'
                src={HumansJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='api-for-humans'>Design Your API for Humans</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Presented on Main Stage at API: World &mdash; San Jose, CA</em>
              <span className={classes.bullet}>&bull;</span>
              <span>September 12, 2018</span>
            </p>
            <p>Throw away the notion of building something for a computer to consume. Let's determine what your users need to successfully and easily implement your interface.</p>
            <Button
              aria-describedby='api-for-humans'
              href='/presentations/design-your-api-for-humans/'
              startIcon={<Icon path={mdiArrowDown} size={.9} />}
            >
              Download Slides
            </Button>
          </div>
        </div>

        <div className={classes.item}>
          <figure role='none'>
            <picture>
              <source srcset={ApiUxWebp} type='image/webp' />
              <source srcset={ApiUxJpeg} type='image/jpeg' />
              <img
                alt='Michael presenting The API User Experience'
                height={194}
                loading='lazy'
                src={ApiUxJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='api-ux'>The API User Experience</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Presented at API: World &mdash; San Jose, CA</em>
              <span className={classes.bullet}>&bull;</span>
              <span>September 11, 2018</span>
            </p>
            <p>Why aren't people using your API? Why aren't people using your product? Let's determine how to define why and discuss a successful implementation and usage process.</p>
            <Button
              aria-describedby='nobody-cares'
              className={classes.button}
              href='https://www.youtube.com/watch?v=s5OmYYwv2Ws'
              startIcon={<Icon path={mdiYoutube} size={.9} />}
              target='_blank'
            >
              Watch Presentation
            </Button>
            <Button
              aria-describedby='api-ux'
              className={classes.button}
              href='/presentations/the-api-user-experience/'
              startIcon={<Icon path={mdiArrowDown} size={.9} />}
            >
              Download Slides
            </Button>
          </div>
        </div>

        <div className={cx(classes.item, classes.reverse)}>
          <figure role='none'>
            <picture>
              <source srcset={DevOpsWebp} type='image/webp' />
              <source srcset={DevOpsJpeg} type='image/jpeg' />
              <img
                alt='Michael before presenting Continuous DevOps'
                height={194}
                loading='lazy'
                src={DevOpsJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='continuous-devops'>Continuous DevOps</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Presented at DeveloperWeek &mdash; San Francisco, CA</em>
              <span className={classes.bullet}>&bull;</span>
              <span>February 14, 2017</span>
            </p>
            <p>DevOps emphasizes quality-of-life improvements at all stages of the software delivery process, not just through continuous integration/deployment. Learn more about Accusoft's approach into implementing Continuous DevOps.</p>
            <Button
              aria-describedby='continuous-devops'
              href='/presentations/continuous-devops/'
              startIcon={<Icon path={mdiArrowDown} size={.9} />}
            >
              Download Slides
            </Button>
          </div>
        </div>

        <div className={classes.item}>
          <figure role='none'>
            <picture>
              <source srcset={UiWebp} type='image/webp' />
              <source srcset={UiJpeg} type='image/jpeg' />
              <img
                alt='Michael presenting Nobody Cares About Your UI'
                height={194}
                loading='lazy'
                src={UiJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3 id='nobody-cares'>Nobody Cares About Your UI</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Presented at BarCamp Tampa Bay &mdash; Tampa, FL</em>
              <span className={classes.bullet}>&bull;</span>
              <span>October 1, 2016</span>
            </p>
            <p>For back-end developers jumping into front-end work, UI and UX can be very daunting. In this presentation we will answer: What is UI and UX design? What are common misconceptions? What external factors do we need to consider when working in the front-end?</p>
            <Button
              aria-describedby='nobody-cares'
              className={classes.button}
              href='https://www.youtube.com/watch?v=j5URKwTkpIQ'
              startIcon={<Icon path={mdiYoutube} size={.9} />}
              target='_blank'
            >
              Watch Presentation
            </Button>
            <Button
              aria-describedby='nobody-cares'
              className={classes.button}
              href='/presentations/nobody-cares-about-your-ui/'
              startIcon={<Icon path={mdiArrowDown} size={.9} />}
            >
              Download Slides
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Talks;