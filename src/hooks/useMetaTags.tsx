import { JSX } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import MetaTags from 'react-meta-tags';

interface UpdateMetaTagsInterface {
  (options?: {
    articleView?: string | boolean;
    robotsBehavior?: string;
  }): JSX.Element | null;
}

const ARTICLE_ONLY_TAGS = [
  'author',
  { property: 'og:article:author' },
  { property: 'og:article:published_time' },
  'twitter:data1',
  'twitter:label1'
];

const useMetaTags = () => {
  const [ data, loading, error ] = usePrerenderData({ url: typeof window !== 'undefined' ? window.location.pathname : '/' });

  const updateMetaTags: UpdateMetaTagsInterface = ({ articleView = false, robotsBehavior = 'index' } = {}) => {
    if (loading || error) {
      return null;
    }

    data.meta.robots = robotsBehavior;

    if (!articleView) {
      ARTICLE_ONLY_TAGS.forEach((tag: any) => data.meta[tag?.property || tag] = tag?.property ? { ...tag, content: null } : null);
    }

    const tags = Object.keys(data.meta).map((tag, i) => {
      if (tag === 'title') {
        return [
          <title key={`title-${i}`}>{data.meta.title}</title>,
          <meta content={data.meta.title} key={`meta-${i}`} name='title' />
        ];
      }

      if (data.meta[tag]?.property) {
        return <meta content={data.meta[tag].content} key={`meta-${i}`} property={tag} />;
      }

      return <meta content={data.meta[tag]} key={`meta-${i}`} name={tag} />;
    });

    return <MetaTags>{tags}</MetaTags>;
  };

  return updateMetaTags;
};

export default useMetaTags;
