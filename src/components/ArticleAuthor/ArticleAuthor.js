import { Fragment } from 'preact';

import mirigoyenAvif from '../../assets/images/mirigoyen.avif';
import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './ArticleAuthor.scss';

const ArticleAuthor = ({
  prettyDate,
  publishDate,
  readingTime,
  singleLine = true
}) => {
  return (
    <div className={classes.root}>
      <picture>
        <source srcset={mirigoyenAvif} type='image/avif' />
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
        {singleLine ? <span className={classes.bullet}>&bull;</span> : <br/>}
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