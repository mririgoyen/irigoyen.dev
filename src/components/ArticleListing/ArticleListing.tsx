import { Fragment, FunctionComponent } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import cx from 'clsx';
import Icon from '@mdi/react';
import { mdiAlertCircleOutline, mdiProgressPencil } from '@mdi/js';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';

import { ArticleInterface } from './ArticleListingProps';

import classes from './ArticleListing.scss';

const ArticleListing: FunctionComponent = () => {
  const [ data, loading, error ] = usePrerenderData({ url: '/blog/' });

  if (loading) {
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  const renderLatestArticle = (article: ArticleInterface) => {
    const articleImageModern = article.image.replace('.png', '.webp');

    return (
      <a className={cx(classes.article, classes.latest)} href={article.route} native>
        <div>
          <div className={classes.badge}>Latest Post</div>
          <h1>{article.title}</h1>
          <p className={classes.desc}>{article.description}</p>
          <ArticleAuthor
            prettyDate={article.prettyDate}
            publishDate={article.publishDate}
            readingTime={article.readingTime}
            singleLine={false}
          />
        </div>
        <figure>
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
      </a>
    );
  };

  const renderArticles = () => {
    if (error) {
      return (
        <div className={classes.empty}>
          <Icon path={mdiAlertCircleOutline} size={2} />
          An error occurred retrieving articles. Please check back later.
        </div>
      );
    }

    const { articles = [] } = data;

    return (
      <Fragment>
        {renderLatestArticle(articles[0])}
        {articles.length > 1 && (
          <div className={classes.articles}>
            {articles.map((article: ArticleInterface, i: number) => {
              if (i === 0) {
                return;
              }

              const articleImageModern = article.image.replace('.png', '.webp');

              return (
                <a
                  className={classes.article}
                  href={article.route}
                  key={i}
                  native
                  title={article.description}
                >
                  <figure>
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
                  <p>{article.title}</p>
                  <p className={classes.meta}>
                    <time dateTime={article.publishDate}>{article.prettyDate}</time>
                    {!!article.readingTime && (
                      <Fragment>
                        <span className={classes.bullet}>&bull;</span>
                        <span className={classes.estimate}>{article.readingTime}</span>
                      </Fragment>
                    )}
                  </p>
                </a>
              );
            })}
          </div>
        )}
        {articles.length < 2 && (
          <div className={classes.empty}>
            <Icon path={mdiProgressPencil} size={2} />
            New articles are in the works. Check back later!
          </div>
        )}
      </Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {renderArticles()}
      </div>
    </div>
  );
};

export default ArticleListing;
