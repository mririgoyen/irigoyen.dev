import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const Blog = () => {
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    const loadRecentPosts = async () => {
      const markdown = require.context('../../../posts', false, /\.md$/, 'lazy');

      const posts = await markdown.keys().reverse().reduce(async (prevPromise, path) => {
        const output = await prevPromise;
        const post = await markdown(path);

        if (post.attributes.published) {
          output.push(post);
        }

        return output;
      }, Promise.resolve([]));

      setArticles(posts);
    };

    loadRecentPosts();
  }, []);

  return (
    <Fragment>
      {!articles.length ? (
        <div>Loading...</div>
      ) : articles.map((article, i) => (
        <div key={i}>
          <h1>{article.attributes.title}</h1>
          <article.react />
        </div>
      ))}
    </Fragment>
  );
};

export default Blog;
