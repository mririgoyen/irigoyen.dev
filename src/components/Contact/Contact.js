import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Contact.scss';

const Contact = ({ setActive }) => {
  return (
    <SectionContainer
      animate
      className={classes.root}
      id='contact'
      setActive={setActive}
    >
      <div className={classes.container}>
        <h1>Contact Me</h1>
        <div className={classes.outro}>
          <p>Feel free to reach out to me at any time.</p>
          <div className={classes.methods}>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href='mailto:michael@irigoyen.dev'>michael@irigoyen.dev</a>
              </dd>
              <dt>Twitter</dt>
              <dd>
                <a href='https://twitter.com/mririgo'>@mririgo</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;