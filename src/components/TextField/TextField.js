import cx from 'classnames';

import classes from './TextField.scss';

const TextField = ({
  disabled,
  error,
  label,
  multiline,
  name,
  onChange = () => {},
  required,
  type = 'text',
  value
}) => {
  const Element = multiline ? 'textarea' : 'input';

  return (
    <div
      className={cx(classes.root, {
        [classes.invalid]: !!error
      })}
    >
      <label for={name}>{label}</label>
      <Element
        aria-describedby={!!error && `${name}-error-text` || undefined}
        aria-invalid={!!error}
        aria-required={required}
        disabled={disabled}
        id={name}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        type={!multiline && type || undefined}
        value={value}
      />
      {error && (
        <p className={classes['error-text']} id={`${name}-error-text`}>{error}</p>
      )}
    </div>
  );
};

export default TextField;