import SectionContainer from '../SectionContainer/SectionContainer';

import PictogrammersWebp from '../../assets/images/pictogrammers.webp';
import PictogrammersPng from '../../assets/images/pictogrammers.png';
import GamecenterWebp from '../../assets/images/gamecenter.webp';
import GamecenterJpeg from '../../assets/images/gamecenter.jpg';

import classes from './Projects.scss';

const Projects = ({ setActiveSection }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='projects'
      setActiveSection={setActiveSection}
    >
      <header>
        <h2>Projects</h2>
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
            <h3>Pictogrammers</h3>
            <p className={classes.subheading}>
              <em>Iconography for Designers & Developers</em>
            </p>
            <p><a href='https://github.com/Pictogrammers'>Pictogrammers</a> is an open-source community developing high-quality icons for use by designers and developers in web and application development. As a core contributor, I help maintain our icon databases, <a href='https://github.com/Templarian/MaterialDesign/issues'>field issues on GitHub</a>, assist in creation and maintenance of our supporting websites, and have personally contributed more than 1000 icons to our <a href='https://materialdesignicons.com/'>Material Design Icons</a> library!</p>
          </div>
        </div>

        <div className={classes.item}>
          <figure>
            <picture>
              <source srcset={GamecenterWebp} type='image/webp' />
              <source srcset={GamecenterJpeg} type='image/jpeg' />
              <img
                alt='Accusoft GameCenter'
                height={194}
                loading='lazy'
                src={GamecenterJpeg}
                width={275}
              />
            </picture>
          </figure>
          <div className={classes.info}>
            <h3>Accusoft GameCenter</h3>
            <p className={classes.subheading}>
              <em>Supporting the Extra Life fundraiser</em>
            </p>
            <p>Accusoft has been participating in the <a href='#philanthropy' onClick={() => setActiveSection({ id: 'philanthropy', scrollTo: true })}>Extra Life fundraiser for the past several years</a>. Every year, we hold a classic arcade tournament on game day to bring awareness to our fundraising efforts and to have a bit of fun.</p>
            <p>However, the COVID-19 pandemic that started in 2020 forced all employees to work remotely. I didn't want this to prevent the company from coming together on game day this year, so I came up with the idea for the Accusoft GameCenter.</p>
            <p>Over the course of about a month, I put together a completely virtual way for the company to come together and play three classic arcade games, right in our browsers. Using the <a href='https://www.mamedev.org/'>MAME emulator</a>, <a href='https://emscripten.org/'>Emscripten</a>, and a React application I developed, employees could play each game and their scores would be tracked in real-time.</p>
            <p>Leaderboards allowed everyone to get a little competitive, and we had a lot of fun! Other features built into the GameCenter includes an avatar generator and an achievement system.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;