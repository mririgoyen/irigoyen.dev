import { useEffect, useState } from 'preact/hooks';

interface ReferenceInterface {
  current: HTMLElement
}

interface OptionsInterface {
  root?: HTMLElement | null;
  rootMargin: string;
  threshold: number;
  triggerOnce?: boolean;
}

interface UseIntersectionInterface {
  (ref: ReferenceInterface, options: OptionsInterface): boolean;
}

const useIntersection: UseIntersectionInterface = (ref, {
  root = null,
  rootMargin = '0px',
  threshold = 1,
  triggerOnce = false
}) => {
  const [ isIntersecting, setIntersecting ] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([ entry ]) => {
      if (triggerOnce) {
        if (isIntersecting) {
          return;
        }

        if (entry.isIntersecting) {
          return setIntersecting(true);
        }

        return;
      }

      setIntersecting(entry.isIntersecting);
    }, { root, rootMargin, threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.unobserve(ref.current);
  }, []);

  return isIntersecting;
};

export default useIntersection;
