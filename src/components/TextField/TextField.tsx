import { FunctionComponent } from 'preact';
import cx from 'clsx';

import { TextFieldProps } from './TextFieldProps';

import classes from './TextField.scss';

const TextField: FunctionComponent<TextFieldProps> = ({
  autocomplete = false,
  disabled = false,
  error = false,
  label,
  multiline = false,
  name,
  onChange = () => {},
  required = false,
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
        autocomplete={autocomplete || undefined}
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