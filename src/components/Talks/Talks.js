import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';

import OneUpWebp from '../../assets/1up.webp';
import OneUpJpeg from '../../assets/1up.jpg';
import HumansWebp from '../../assets/humans.webp';
import HumansJpeg from '../../assets/humans.jpg';
import ApiUxWebp from '../../assets/apiux.webp';
import ApiUxJpeg from '../../assets/apiux.jpg';
import DevOpsWebp from '../../assets/devops.webp';
import DevOpsJpeg from '../../assets/devops.jpg';
import UiWebp from '../../assets/ui.webp';
import UiJpeg from '../../assets/ui.jpg';

import classes from './Talks.scss';

const Talks = ({ reportVisibility }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='talks'
      reportVisibility={reportVisibility}
    >
      <div className={classes.container}>
        <header>
          <h1>Talks & Presentations</h1>
        </header>
        <div className={classes.items}>
          <div className={classes.item}>
            <figure>
              <picture>
                <source srcset={OneUpWebp} type='image/webp' />
                <source srcset={OneUpJpeg} type='image/jpeg' />
                <img alt='Michael presenting 1UP: Empowering Communities with APIs' height={194} src={OneUpJpeg} width={275} />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>1UP: Empowering Communities with APIs</h2>
              <h3>
                <em>Presented at API: World &mdash; San Jose, CA</em>
                <span className={classes.bullet}>&bull;</span>
                <span>October 9, 2019</span>
              </h3>
              <p>Good APIs can level-up the dev life. But great APIs can bring an "Extra Life" to kids in need. In this talk, we discuss building a JavaScript API that can be used in 3 different ways from the same source code with the goal of making it easier to help raise money for sick kids in our communities via the Extra-Life charity.</p>
              <a href='/presentations/1up-empowering-communities-with-apis'>
                <Icon path={mdiArrowDown} size={.9} />
                Download Slide Deck
              </a>
            </div>
          </div>

          <div className={cx(classes.item, classes.reverse)}>
            <figure>
              <picture>
                <source srcset={HumansWebp} type='image/webp' />
                <source srcset={HumansJpeg} type='image/jpeg' />
                <img alt='Michael presenting Design Your API for Humans' height={194} src={HumansJpeg} width={275} />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>Design Your API for Humans</h2>
              <h3>
                <em>Presented on Main Stage at API: World &mdash; San Jose, CA</em>
                <span className={classes.bullet}>&bull;</span>
                <span>September 12, 2018</span>
              </h3>
              <p>Throw away the notion of building something for a computer to consume. Let's determine what your users need to successfully and easily implement your interface.</p>
              <a href='/presentations/design-your-api-for-humans'>
                <Icon path={mdiArrowDown} size={.9} />
                Download Slide Deck
              </a>
            </div>
          </div>

          <div className={classes.item}>
            <figure>
              <picture>
                <source srcset={ApiUxWebp} type='image/webp' />
                <source srcset={ApiUxJpeg} type='image/jpeg' />
                <img alt='Michael presenting The API User Experience' height={194} src={ApiUxJpeg} width={275} />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>The API User Experience</h2>
              <h3>
                <em>Presented at API: World &mdash; San Jose, CA</em>
                <span className={classes.bullet}>&bull;</span>
                <span>September 11, 2018</span>
              </h3>
              <p>Why aren't people using your API? Why aren't people using your product? Let's determine how to define why and discuss a successful implementation and usage process.</p>
              <a href='/presentations/the-api-user-experience'>
                <Icon path={mdiArrowDown} size={.9} />
                Download Slide Deck
              </a>
            </div>
          </div>

          <div className={cx(classes.item, classes.reverse)}>
            <figure>
              <picture>
                <source srcset={DevOpsWebp} type='image/webp' />
                <source srcset={DevOpsJpeg} type='image/jpeg' />
                <img alt='Michael before presenting Continuous DevOps' height={194} src={DevOpsJpeg} width={275} />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>Continuous DevOps</h2>
              <h3>
                <em>Presented at DeveloperWeek &mdash; San Francisco, CA</em>
                <span className={classes.bullet}>&bull;</span>
                <span>February 14, 2017</span>
              </h3>
              <p>DevOps emphasizes Quality of Life improvements at all stages of the software delivery process, not just through Continuous Integration/Deployment. Learn more about our approach into implementing Continuous DevOps.</p>
              <a href='/presentations/continuous-devops'>
                <Icon path={mdiArrowDown} size={.9} />
                Download Slide Deck
              </a>
            </div>
          </div>

          <div className={classes.item}>
            <figure>
              <picture>
                <source srcset={UiWebp} type='image/webp' />
                <source srcset={UiJpeg} type='image/jpeg' />
                <img alt='Michael presenting Nobody Cares About Your UI' height={194} src={UiJpeg} width={275} />
              </picture>
            </figure>
            <div className={classes.info}>
              <h2>Nobody Cares About Your UI</h2>
              <h3>
                <em>Presented at BarCamp Tampa Bay &mdash; Tampa, FL</em>
                <span className={classes.bullet}>&bull;</span>
                <span>October 1, 2016</span>
              </h3>
              <p>For back-end developers jumping into front-end work, UI and UX can be very daunting. In this presentation we will answer: What is UI and UX design? What are common misconceptions? What external factors do we need to consider when working in the front-end?</p>
              <a href='/presentations/nobody-cares-about-your-ui'>
                <Icon path={mdiArrowDown} size={.9} />
                Download Slide Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Talks;