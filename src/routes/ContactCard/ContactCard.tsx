import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';

import { ContactCardProps } from './ContactCardProps';

import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';

import classes from './ContactCard.scss';

const ContactCard: FunctionComponent<ContactCardProps> = () => {
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} />
      <h2>Michael Irigoyen</h2>
      <p className={classes.subheading}>I am a Chicago-based <em>software engineer</em> with a passion for <em>front-end development</em> and <em>user experience</em>.</p>
      <Button
        href='https://github.com/mririgoyen/mririgoyen/blob/main/michael-irigoyen.vcf?raw=true'
        startIcon={<Icon path={mdiAccountPlus} size={1} />}
      >
        Add to Contacts
      </Button>
    </div>
  );
};

export default ContactCard;
