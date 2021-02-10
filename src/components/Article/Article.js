import { useEffect, useState } from 'preact/hooks';
import readingTime from 'reading-time';

import CircularProgress from '../CircularProgress/CircularProgress';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';

// TODO: Create a real default image
import defaultImage from '../../assets/blog/blog-image.jpg';
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
                <source srcset={article.image} type='image/jpeg' />
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