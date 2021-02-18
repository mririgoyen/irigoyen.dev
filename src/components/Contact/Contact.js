import { useState } from 'preact/hooks';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiAlertCircle, mdiCheck, mdiSend } from '@mdi/js';

import SectionContainer from '../SectionContainer/SectionContainer';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

import classes from './Contact.scss';

const Contact = ({ setActiveSection }) => {
  const [ formSuccess, setFormSuccess ] = useState(false);
  const [ formError, setFormError ] = useState(false);

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ message, setMessage ] = useState('');

  const [ firstNameError, setFirstNameError ] = useState(false);
  const [ lastNameError, setLastNameError ] = useState(false);
  const [ emailAddressError, setEmailAddressError ] = useState(false);
  const [ messageError, setMessageError ] = useState(false);

  const sanitizeInput = (input) => {
    const parsed = new DOMParser().parseFromString(input, 'text/html');
    return (parsed.body.textContent || '').trim();
  };

  const encodeFormData = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

  const handleSubmit = async () => {
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmailAddress = sanitizeInput(emailAddress);
    const sanitizedMessage = sanitizeInput(message);

    let error = false;

    if (!sanitizedFirstName.length) {
      setFirstNameError('Please provide your first name.');
      error = true;
    } else {
      setFirstNameError(false);
    }

    if (!sanitizedLastName.length) {
      setLastNameError('Please provide your last name.');
      error = true;
    } else {
      setLastNameError(false);
    }

    if (!sanitizedEmailAddress.length) {
      setEmailAddressError('Please provide your email address.');
      error = true;
    } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(sanitizedEmailAddress) === false) {
      setEmailAddressError('Please provide a valid email address.');
      error = true;
    } else {
      setEmailAddressError(false);
    }

    if (!sanitizedMessage.length) {
      setMessageError('Please leave me a message.');
      error = true;
    } else {
      setMessageError(false);
    }

    if (error) {
      return;
    }

    try {
      const response = await fetch('/', {
        body: encodeFormData({
          'email-address': emailAddress,
          'first-name': firstName,
          'form-name': 'contact-form',
          'last-name': lastName,
          message
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error('Unable to submit contact form');
      }

      setFormSuccess(true);
    } catch (err) {
      setFormError(true);
    }
  };

  return (
    <SectionContainer
      animate
      className={classes.root}
      id='contact'
      setActiveSection={setActiveSection}
    >
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className={classes.outro}>
        <div className={classes.info}>
          <p>Would you like me to speak at your event, be a guest on your podcast, or just simply get in touch with me?</p>
          <p>Send me a message! I'll respond as quickly as possible.</p>
        </div>
        <form data-netlify='true' name='contact-form'>
          {formError && (
            <div className={classes['form-error']}>
              <Icon path={mdiAlertCircle} size={.9} title='Alert' />
              Something unexpected happened. Please try again.
            </div>
          )}
          <div className={classes.name}>
            <TextField
              disabled={formSuccess}
              error={firstNameError}
              label='First Name'
              name='first-name'
              onChange={setFirstName}
              value={firstName}
            />
            <TextField
              disabled={formSuccess}
              error={lastNameError}
              label='Last Name'
              name='last-name'
              onChange={setLastName}
              value={lastName}
            />
          </div>
          <TextField
            disabled={formSuccess}
            error={emailAddressError}
            label='Email Address'
            name='email-address'
            onChange={setEmailAddress}
            type='email'
            value={emailAddress}
          />
          <TextField
            disabled={formSuccess}
            error={messageError}
            label='Message'
            multiline
            name='message'
            onChange={setMessage}
            value={message}
          />
          <Button
            className={cx(classes.submit, {
              [classes.submitted]: formSuccess
            })}
            disabled={formSuccess}
            onClick={handleSubmit}
            startIcon={<Icon path={formSuccess ? mdiCheck : mdiSend} size={.9} />}
            variant='dark'
          >
            {formSuccess ? 'Sent' : 'Send'}
          </Button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Contact;