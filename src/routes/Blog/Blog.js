import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import frontmatter from 'front-matter';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    const posts = require.context('../../../posts', false, /\.md$/);

    const loadArticles = async (offset = 0, limit = 5) => {
      const filteredPosts = posts.keys().reverse().slice(offset, limit);

      const postsContent = await Promise.all(filteredPosts.map(async (path) => {
        const response = await fetch(`/posts/${path}`);
        if (response.ok) {
          const content = await response.text();
          return frontmatter(content);
        }
      }));

      setArticles(postsContent);
    };

    loadArticles();
  }, []);

  return (
    <Fragment>
      {!articles.length ? (
        <div>Loading...</div>
      ) : articles.map((article, i) => (
        <div key={i}>
          <h1>{article.attributes.title}</h1>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      ))}
    </Fragment>
  );
};

export default Blog;
