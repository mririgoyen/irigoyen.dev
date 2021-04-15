import { Fragment, FunctionComponent } from 'preact';

import { ArticleAuthorProps } from './ArticleAuthorProps';

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './ArticleAuthor.scss';

const ArticleAuthor: FunctionComponent<ArticleAuthorProps> = ({
  prettyDate,
  publishDate,
  readingTime,
  singleLine = true
}) => {
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
        {singleLine ? <span className={classes.bullet}>&bull;</span> : <br />}
        <time dateTime={publishDate}>{prettyDate}</time>
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
