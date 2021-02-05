import { useRef } from 'preact/hooks';
import cx from 'classnames';
import { Section } from 'react-scroll-section';

import useIntersection from '../../hooks/useIntersection';

import classes from './SectionContainer.scss';

const SectionContainer = ({ animate = false, children, className, id }) => {
  const sectionRef = useRef();
  const onScreen = useIntersection(sectionRef, { rootMargin: '300px', threshold: .1, triggerOnce: true });

  return (
    <Section
      id={id}
      className={cx(classes.root, className, {
        [classes.animate]: animate
      })}
    >
      <div
        className={cx(classes.container, {
          [classes.in]: animate && onScreen
        })}
        ref={sectionRef}
      >
        {children}
      </div>
    </Section>
  );
};

export default SectionContainer;