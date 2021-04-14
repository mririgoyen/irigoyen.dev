import { FunctionComponent } from 'preact';
import { Fragment } from 'preact';

import { BlogProps } from './BlogProps';

import useMetaTags from '../../hooks/useMetaTags';

import ArticleListing from '../../components/ArticleListing/ArticleListing';
import Article from '../../components/Article/Article';

const Blog: FunctionComponent<BlogProps> = ({
  postDay,
  postMonth,
  postTitle,
  postYear
}) => {
  const updateMetaTags = useMetaTags();
  const articleView = postYear && postMonth && postYear && postTitle;

  return (
    <Fragment>
      {updateMetaTags({ articleView })}
      {articleView ? (
        <Article url={`/blog/${postYear}/${postMonth}/${postDay}/${postTitle}`} />
      ) : (
        <ArticleListing />
      )}
    </Fragment>
  );
};

export default Blog;
