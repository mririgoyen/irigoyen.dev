import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import cx from 'classnames';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';

import defaultImage from '../../assets/images/facebook-card.png';

import classes from './ArticleListing.scss';

const ARTICLES_PER_PAGE = 3;

const ArticleListing = () => {
  const markdownFiles = require.context('../../../posts', false, /\.md$/, 'lazy');

  const [ visibleArticles, setVisibleArticles ] = useState([]);
  const [ page, setPage ] = useState(0);

  useEffect(() => document.title = 'Blog | Michael Irigoyen - Front-End Software Engineer', []);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await Promise.all(
        markdownFiles
          .keys()
          .reverse()
          .slice(0, (ARTICLES_PER_PAGE + 1) + (page * ARTICLES_PER_PAGE))
          .map(async (path) => {
            const post = await markdownFiles(path);
            post.route = `/blog/${path.split('.')[1].replace(/^\/(\d+)-(\d+)-(\d+)-/, '$1/$2/$3/')}`;

            try {
              const image = await import(`../../assets/blog/${post.attributes.image}`);
              post.image = image.default;
              const imageExt = post.attributes.image.split('.')[1];
              post.imageMime = `image/${imageExt === 'jpg' ? 'jpeg' : imageExt}`;
            } catch (err) {
              post.image = defaultImage;
              post.imageMime = 'image/png';
            }

            return post;
          })
      );
      setVisibleArticles(posts);
    };

    loadPosts();
  }, [ markdownFiles, page ]);

  const renderLatestArticle = (article) => {
    return (
      <a className={cx(classes.article, classes.latest)} href={article.route}>
        <div>
          <div className={classes.badge}>Latest Post</div>
          <h1>{article.attributes.title}</h1>
          <ArticleAuthor publishDate={article.attributes.date} />
        </div>
        <figure>
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
      </a>
    );
  };

  const renderArticles = () => (
    <Fragment>
      {renderLatestArticle(visibleArticles[0])}
      <div className={classes.articles}>
        {visibleArticles.map((article, i) => {
          if (i === 0) {
            return;
          }

          return (
            <a className={classes.article} href={article.route} key={i}>
              <figure>
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
              <p>{article.attributes.title}</p>
            </a>
          );
        })}
      </div>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {!visibleArticles.length && <CircularProgress />}
        {!!visibleArticles.length && (
          <Fragment>
            {renderArticles()}
            {markdownFiles.keys().length !== visibleArticles.length && (
              <div className={classes.more}>
                <button onClick={() => setPage(page + 1)}>SHOW MORE</button>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ArticleListing;