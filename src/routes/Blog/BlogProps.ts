import { RoutableProps } from 'preact-router';

export interface BlogProps extends RoutableProps {
  activeHeader?: boolean;
  postDay?: string;
  postMonth?: string;
  postTitle?: string;
  postYear?: string;
  showHeaderScroll?: boolean;
}
