import { IconPropsType } from './types';
import { baseProps } from './base';
export const Briefcase = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
