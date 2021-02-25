import 'prismjs';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiFacebook, mdiLinkedin, mdiTwitter } from '@mdi/js';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import ErrorPage from '../../routes/ErrorPage/ErrorPage';

import defaultImage from '../../assets/images/facebook-card.png';
import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Article.scss';

const BASE_URL = 'https://www.irigoyen.dev';

const Article = ({ url }) => {
  const [ data, loading, error ] = usePrerenderData({ url });

  if (loading) {
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorPage type='article' />;
  }

  const { article, lastmod } = data;
  const articleImage = article.image || defaultImage;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <article role='main'>
          <figure className={classes.image}>
            <picture>
              <source srcset={articleImage} type={article.imageMime || 'image/png'} />
              <img
                alt={article.title}
                height={315}
                loading='lazy'
                src={articleImage}
                width={600}
              />
            </picture>
          </figure>
          <div className={classes.article}>
            <div className={classes.share}>
              <a
                className={classes.facebook}
                href={`https://facebook.com/sharer.php?u=${BASE_URL}${url}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on Facebook'
              >
                <Icon path={mdiFacebook} size={1} title='Share on Facebook' />
              </a>
              <a
                className={classes.twitter}
                href={`https://twitter.com/share?url=${encodeURIComponent(`${BASE_URL}${url}`)}&text=${encodeURIComponent(`${article.title} by @mririgo`)}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on Twitter'
              >
                <Icon path={mdiTwitter} size={1} title='Share on Twitter' />
              </a>
              <a
                className={classes.linkedin}
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${BASE_URL}${url}`)}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on LinkedIn'
              >
                <Icon path={mdiLinkedin} size={1} title='Share on LinkedIn' />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=Check%20out%20this%20article%20I%20found%3A%20${encodeURIComponent(`${BASE_URL}${url}`)}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share via Email'
              >
                <Icon path={mdiEmailOutline} size={1} title='Share via Email' />
              </a>
            </div>
            <h1>{article.title}</h1>
            <ArticleAuthor
              prettyDate={article.publishDate}
              publishDate={lastmod}
              readingTime={article.readingTime}
            />
            <div className={classes.content} dangerouslySetInnerHTML={{ __html: article.body }} />
            <div className={classes.author}>
              <picture>
                <source srcset={mirigoyenWebp} type='image/webp' />
                <source srcset={mirigoyenJpeg} type='image/jpeg' />
                <img
                  alt='Michael Irigoyen'
                  height={112.5}
                  loading='lazy'
                  src={mirigoyenJpeg}
                  width={100}
                />
              </picture>
              <div className={classes.bio}>
                <p className={classes.name}>Michael Irigoyen</p>
                <p>Michael Irigoyen is a Chicago-based software engineer with a passion for front-end development and user experience. You can find him at <a href='https://www.irigoyen.dev'>irigoyen.dev</a> and on <a href='https://twitter.com/mririgo'>Twitter</a>.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;