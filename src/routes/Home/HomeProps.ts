import { RoutableProps } from 'preact-router';

export interface HomeProps extends RoutableProps {
  activeHeader?: boolean;
  activeSection: { id: string };
  setActiveSection({ id }: { id: string }): void;
  showHeaderScroll?: boolean;
};
