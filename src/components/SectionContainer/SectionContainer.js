import { useEffect, useRef, useState } from 'preact/hooks';
import cx from 'classnames';

import useIntersection from '../../hooks/useIntersection';

import classes from './SectionContainer.scss';

const SectionContainer = ({
  animate = false,
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
      setActiveSection({ id, scrollTo: false });
      history.replaceState({}, '', `#${id}`);
      setDisplayed(true);
    }
  }, [ id, onScreen ]);

  return (
    <section
      id={id}
      className={cx(classes.root, className, {
        [classes.animate]: animate
      })}
    >
      <div
        className={cx(classes.container, {
          [classes.in]: animate && displayed
        })}
        ref={sectionRef}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;