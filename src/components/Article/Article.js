/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'preact/hooks';
import readingTime from 'reading-time';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiFacebook, mdiTwitter } from '@mdi/js';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import ErrorPage from '../../routes/ErrorPage/ErrorPage';

import defaultImage from '../../assets/images/facebook-card.png';
import mirigoyenWebp from '../../assets/images/mirigoyen.webp';
import mirigoyenJpeg from '../../assets/images/mirigoyen.jpg';

import classes from './Article.scss';

const Article = ({ id }) => {
  const [ error, setError ] = useState(false);
  const [ article, setArticle ] = useState();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const article = await import(`../../../posts/${id}.md`);

        try {
          const image = await import(`../../assets/blog/${article.default.attributes.image}`);
          article.default.image = image.default;
          const imageExt = article.default.attributes.image.split('.')[1];
          article.default.imageMime = `image/${imageExt === 'jpg' ? 'jpeg' : imageExt}`;
        } catch (err) {
          article.default.image = defaultImage;
        }

        article.attributes.readingTime = readingTime(article.body);
        setArticle(article.default);
      } catch (err) {
        setError(true);
      }
    };
    getArticle();
  }, []);

  useEffect(() => {
    if (article?.attributes?.title) {
      document.title = `${article.attributes.title} by Michael Irigoyen`;
    }
  }, [ article ]);

  if (error) {
    return <ErrorPage type='article' />;
  }

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {!article && <CircularProgress />}
        {!!article && (
          <article>
            <figure className={classes.image}>
              <picture>
                <source srcset={article.image} type={article.imageMime} />
                <img
                  alt={article.attributes.title}
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
                  href={`https://facebook.com/sharer.php?u=${window.location.href}`}
                  rel='nofollow'
                  target='_blank'
                  title='Share on Facebook'
                >
                  <Icon path={mdiFacebook} size={1} />
                </a>
                <a
                  className={classes.twitter}
                  href={`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`${article.attributes.title} by Michael Irigoyen`)}`}
                  rel='nofollow'
                  target='_blank'
                  title='Share on Twitter'
                >
                  <Icon path={mdiTwitter} size={1} />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(article.attributes.title)}&body=Check%20out%20this%20article%20I%20found%3A%20${encodeURIComponent(window.location.href)}`}
                  rel='nofollow'
                  target='_blank'
                  title='Share via Email'
                >
                  <Icon path={mdiEmailOutline} size={1} />
                </a>
              </div>
              <h1>{article.attributes.title}</h1>
              <ArticleAuthor
                publishDate={article.attributes.date}
                readingTime={article.attributes.readingTime.text}
              />
              <div className={classes.content}>
                <article.react />
              </div>
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
        )}
      </div>
    </div>
  );
};

export default Article;