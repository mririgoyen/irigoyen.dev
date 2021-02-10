import ArticleListing from '../../components/ArticleListing/ArticleListing';
import Article from '../../components/Article/Article';

const Blog = ({
  postDay,
  postMonth,
  postTitle,
  postYear
}) => {
  if (postYear && postMonth && postYear && postTitle) {
    return <Article id={`${postYear}-${postMonth}-${postDay}-${postTitle}`} />;
  }

  return <ArticleListing />;
};

export default Blog;
