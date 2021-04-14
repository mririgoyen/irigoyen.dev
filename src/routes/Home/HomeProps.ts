import { RoutableProps } from 'preact-router';

export interface HomeProps extends RoutableProps {
  setActiveSection({ id }: { id: string }): void;
};
