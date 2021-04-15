import { RoutableProps } from 'preact-router';

export interface ErrorPageProps extends RoutableProps {
  type?: 'article' | 'page';
}
