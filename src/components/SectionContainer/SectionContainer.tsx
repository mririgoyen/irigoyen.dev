import { FunctionComponent } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import cx from 'clsx';

import { SectionContainerProps } from './SectionContainerProps';

import useIntersection from '../../hooks/useIntersection';

import classes from './SectionContainer.scss';

const SectionContainer: FunctionComponent<SectionContainerProps> = ({
  children,
  className,
  id,
  setActiveSection
}) => {
  const sectionRef = useRef();
  const onScreen = useIntersection(sectionRef, { rootMargin: '200px', threshold: .1 });

  useEffect(() => {
    if (onScreen) {
      setActiveSection({ id });
      history.replaceState({}, '', `#${id}`);
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