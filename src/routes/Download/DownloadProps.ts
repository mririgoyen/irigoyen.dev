import { RoutableProps } from 'preact-router';

export interface DownloadProps extends RoutableProps {
  file: string;
  name: string;
};
