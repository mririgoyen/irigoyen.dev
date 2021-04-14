export interface TextFieldProps {
  autocomplete?: boolean;
  disabled?: boolean;
  error?: boolean;
  label: string,
  multiline?: boolean;
  name: string;
  onChange?(e: Event): void;
  required?: boolean;
  type: 'email' | 'text';
  value: string;
};
