import { useEffect, useRef, useState } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import cx from 'classnames';

import { activeState } from '../../atoms/activeState';
import useIntersection from '../../hooks/useIntersection';

import classes from './SectionContainer.scss';

const SectionContainer = ({
  animate = false,
  children,
  className,
  id
}) => {
  const sectionRef = useRef();
  const [ displayed, setDisplayed ] = useState(false);
  const onScreen = useIntersection(sectionRef, { rootMargin: '200px', threshold: .1 });
  const setActiveSection = useSetRecoilState(activeState);

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