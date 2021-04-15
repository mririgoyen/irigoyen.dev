export interface TextFieldProps {
  autocomplete?: string;
  disabled?: boolean;
  error?: string | null;
  label: string,
  multiline?: boolean;
  name: string;
  onChange?(value: string): void;
  required?: boolean;
  type?: 'email' | 'text';
  value: string;
}
