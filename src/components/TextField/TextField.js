import cx from 'classnames';

import classes from './TextField.scss';

const TextField = ({
  disabled,
  error,
  label,
  multiline,
  name,
  onChange = () => {},
  type = 'text',
  required,
  value
}) => {
  const Element = multiline ? 'textarea' : 'input';

  return (
    <div
      className={cx(classes.root, {
        [classes.invalid]: !!error
      })}
    >
      <label for={name}>{label}{required && ' *'}</label>
      <Element
        aria-describedby={!!error && `${name}-error-text` || undefined}
        aria-invalid={!!error}
        disabled={disabled}
        id={name}
        onChange={(e) => onChange(e.target.value)}
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