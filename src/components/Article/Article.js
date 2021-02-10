import { useEffect, useState } from 'preact/hooks';
import { Helmet } from 'react-helmet';
import readingTime from 'reading-time';
import ellipsize from 'ellipsize';

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
  // TODO: Update to the default image URL
  const [ socialImageUrl, setSocialImageUrl ] = useState('https://www.irigoyen.dev/assets/blog/blog-image.jpg');

  useEffect(() => {
    const getArticle = async () => {
      try {
        const article = await import(`../../../posts/${id}.md`);

        try {
          const image = await import(`../../assets/blog/${article.default.attributes.image}`);
          article.default.image = image.default;
          setSocialImageUrl(`https://www.irigoyen.dev/assets/blog/${article.default.attributes.image}`);
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

  const shortDesc = ellipsize(article.body, 60);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{article.attributes.title} | Michael Irigoyen</title>
        <meta name='description' content={shortDesc} />
        <meta name='author' content='Michael Irigoyen' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${article.attributes.title} | Michael Irigoyen`} />
        <meta name='twitter:description' content={shortDesc} />
        <meta name='twitter:image' content={socialImageUrl} />
        <meta name='twitter:label1' content='Reading time' />
        <meta name='twitter:data1' content={article.attributes.readingTime.text} />
        <meta property='og:type' content='article' />
        <meta property='og:article:author' content='Michael Irigoyen' />
        <meta property='og:article:published_time' content={article.attributes.date} />
        <meta property='og:url' content={`https://www.irigoyen.dev/blog/${id}`} />
        <meta property='og:title' content={`${article.attributes.title} | Michael Irigoyen`} />
        <meta property='og:description' content={shortDesc} />
        <meta property='og:image' content={socialImageUrl} />
      </Helmet>
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