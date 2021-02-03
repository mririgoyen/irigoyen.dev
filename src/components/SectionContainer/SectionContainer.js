import cx from 'classnames';

import useDisplayed from '../../hooks/useDisplayed';

import classes from './SectionContainer.scss';

const SectionContainer = ({ animate = false, children, className, id, reportVisibility }) => {
  const { displayed, ref } = useDisplayed({ id, reportVisibility });

  return (
    <section
      id={id}
      className={cx(classes.root, className, {
        [classes.animate]: animate
      })}
      ref={ref}
    >
      <div
        className={cx(classes.container, {
          [classes.in]: animate && displayed
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;