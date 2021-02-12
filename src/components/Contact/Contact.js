import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Contact.scss';

const Contact = () => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='contact'
    >
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className={classes.methods}>
        <dl>
          <dt>Email</dt>
          <dd>
            <a href='mailto:michael@irigoyen.dev'>michael@irigoyen.dev</a>
          </dd>
        </dl>
        <dl>
          <dt>Twitter</dt>
          <dd>
            <a href='https://twitter.com/mririgo'>@mririgo</a>
          </dd>
        </dl>
      </div>
    </SectionContainer>
  );
};

export default Contact;