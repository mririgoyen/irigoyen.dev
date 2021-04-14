import { Fragment, FunctionComponent } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import cx from 'clsx';
import Icon from '@mdi/react';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';

import { ArticleInterface } from './ArticleListingProps';

import classes from './ArticleListing.scss';

const mdiProgressPencil = 'M15.84 10.2L14.83 11.21L12.76 9.18L13.77 8.16C13.97 7.95 14.31 7.94 14.55 8.16L15.84 9.41C16.05 9.62 16.06 9.96 15.84 10.2M8 13.91L12.17 9.72L14.24 11.8L10.08 16H8V13.91M13 2V4C17.39 4.54 20.5 8.53 19.96 12.92C19.5 16.56 16.64 19.43 13 19.88V21.88C18.5 21.28 22.45 16.34 21.85 10.85C21.33 6.19 17.66 2.5 13 2M11 2C9.04 2.18 7.19 2.95 5.67 4.2L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2.06M4.26 5.67C3 7.19 2.24 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67M2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06M7.06 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37H7.06Z';

const ArticleListing: FunctionComponent = () => {
  const [ data, loading ] = usePrerenderData({ url: '/blog/' });

  if (loading) {
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  const { articles = [] } = data;

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

  const renderArticles = () => (
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

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {renderArticles()}
      </div>
    </div>
  );
};

export default ArticleListing;