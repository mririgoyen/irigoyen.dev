import { useEffect, useRef, useState } from 'preact/hooks';
import cx from 'clsx';

import useIntersection from '../../hooks/useIntersection';

import classes from './SectionContainer.scss';

const SectionContainer = ({
  children,
  className,
  id,
  setActiveSection
}) => {
  const sectionRef = useRef();
  const [ displayed, setDisplayed ] = useState(false);
  const onScreen = useIntersection(sectionRef, { rootMargin: '200px', threshold: .1 });

  useEffect(() => {
    if (onScreen) {
      setActiveSection({ id });
      history.replaceState({}, '', `#${id}`);
      setDisplayed(true);
    }
  }, [ id, onScreen ]);

  return (
    <section
      id={id}
      className={cx(classes.root, className)}
    >
      <div
        className={classes.container}
        ref={sectionRef}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;