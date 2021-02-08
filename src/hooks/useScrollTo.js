import { useScrollSections } from 'react-scroll-section';

const useScrollTo = () => {
  const sections = useScrollSections();

  const scrollTo = (section) => () => {
    const { onClick } = sections.find((s) => s.id === section);
    if (typeof onClick === 'function') {
      history.pushState({}, '', `#${section}`);
      onClick();
    }
  };

  return scrollTo;
};

export default useScrollTo;