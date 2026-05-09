import { IconPropsType } from './types';
import { baseProps } from './base';
export const Mail = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
