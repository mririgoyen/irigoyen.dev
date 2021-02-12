import { Fragment } from 'preact';

import useMetaTags from '../../hooks/useMetaTags';

import ArticleListing from '../../components/ArticleListing/ArticleListing';
import Article from '../../components/Article/Article';

const Blog = ({ postDay, postMonth, postTitle, postYear, url }) => {
  const updateMetaTags = useMetaTags(url);
  const articleView = postYear && postMonth && postYear && postTitle;

  return (
    <Fragment>
      {updateMetaTags({ articleView })}
      {articleView ? (
        <Article id={`${postYear}-${postMonth}-${postDay}-${postTitle}`} />
      ) : (
        <ArticleListing />
      )}
    </Fragment>
  );
};

export default Blog;
