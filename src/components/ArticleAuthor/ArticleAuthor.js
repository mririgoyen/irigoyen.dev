import { Fragment } from 'preact';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc).extend(timezone);

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './ArticleAuthor.scss';

const ArticleAuthor = ({
  publishDate,
  readingTime
}) => {
  const prettyDate = dayjs.tz(publishDate, 'America/Chicago').format('MMMM D, YYYY');

  return (
    <div className={classes.root}>
      <picture>
        <source srcset={mirigoyenWebp} type='image/webp' />
        <source srcset={mirigoyenJpeg} type='image/jpeg' />
        <img
          alt='Michael Irigoyen'
          height={45}
          loading='lazy'
          src={mirigoyenJpeg}
          width={40}
        />
      </picture>
      <p>
        Written by Michael Irigoyen
        <span className={classes.bullet}>&bull;</span>
        <time datetime={publishDate}>{prettyDate}</time>
        {!!readingTime && (
          <Fragment>
            <span className={classes.bullet}>&bull;</span>
            <span className={classes.estimate}>{readingTime}</span>
          </Fragment>
        )}
      </p>
    </div>
  );
};

export default ArticleAuthor;