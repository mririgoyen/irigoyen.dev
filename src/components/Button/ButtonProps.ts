import { JSX } from 'preact';

export interface ButtonProps {
  children: string | string[] | JSX.Element;
  className?: string;
  disabled?: boolean;
  download?: string | boolean;
  href?: string;
  native?: boolean;
  onClick?(e: JSX.TargetedMouseEvent<HTMLElement>): void;
  rel?: string;
  startIcon?: JSX.Element;
  target?: string;
  type?: 'button' | 'submit';
  variant?: 'dark' | 'light' | 'neutral';
}
