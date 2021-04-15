import { JSX } from 'preact';

export interface SectionContainerProps {
  children: string | string[] | JSX.Element | JSX.Element[];
  className?: string;
  id: string;
  setActiveSection({ id }: { id: string }): void;
}
