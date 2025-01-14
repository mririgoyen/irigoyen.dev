/* eslint-disable react/no-danger */
import 'prismjs';
import { FunctionComponent } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLinkedin } from '@mdi/js';
import { siBluesky, siFacebook } from 'simple-icons';

import { ArticleProps } from './ArticleProps';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import ErrorPage from '../../routes/ErrorPage/ErrorPage';

import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Article.scss';

const Article: FunctionComponent<ArticleProps> = ({ url }) => {
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
  const articleImageModern = article.image.replace('.png', '.webp');
  const shareUrl = `${config.baseUrl}${url.substring(1)}`;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <article role='main'>
          <figure className={classes.image}>
            <picture>
              <source srcset={articleImageModern} type='image/webp' />
              <source srcset={article.image} type={article.imageMime} />
              <img
                alt={article.title}
                height={315}
                loading='lazy'
                src={article.image}
                width={600}
              />
            </picture>
          </figure>
          <div className={classes.article}>
            <div className={classes.share}>
              <a
                className={classes.facebook}
                href={`https://facebook.com/sharer.php?u=${shareUrl}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on Facebook'
              >
                <Icon path={siFacebook.path} size={1} title='Share on Facebook' />
              </a>
              <a
                className={classes.bluesky}
                href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on Bluesky'
              >
                <Icon path={siBluesky.path} size={1} title='Share on Bluesky' />
              </a>
              <a
                className={classes.linkedin}
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${shareUrl}`)}`}
                rel='nofollow noreferrer'
                target='_blank'
                title='Share on LinkedIn'
              >
                <Icon path={mdiLinkedin} size={1} title='Share on LinkedIn' />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=Check%20out%20this%20article%20I%20found%3A%20${encodeURIComponent(`${shareUrl}`)}`}
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
                <p>Michael Irigoyen is a Chicago-based software engineer with a passion for front-end development and user experience. You can find him at <a href='https://www.irigoyen.dev'>irigoyen.dev</a> or on <a href='https://hachyderm.io/@mririgoyen' rel='me'>Mastodon</a>.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;
