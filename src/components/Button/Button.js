import cx from 'classnames';

import classes from './Button.scss';

const Button = ({
  children,
  className,
  disabled,
  href,
  native,
  onClick = () => {},
  startIcon,
  type = 'button',
  variant = 'neutral',
  ...rest
}) => {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      aria-disabled={href && disabled || undefined}
      className={cx(classes.root, classes[variant], {
        [classes.disabled]: disabled
      }, className)}
      disabled={!href && disabled || undefined}
      href={href}
      native={href && native || undefined}
      onClick={onClick}
      type={!href ? type : undefined}
      {...rest}
    >
      {startIcon && <span className={classes['start-icon']}>{startIcon}</span>}
      {children}
    </Element>
  );
};

export default Button;