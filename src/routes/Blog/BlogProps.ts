import { RoutableProps } from 'preact-router';

export interface BlogProps extends RoutableProps {
  postDay?: string;
  postMonth?: string;
  postTitle?: string;
  postYear?: string;
};
