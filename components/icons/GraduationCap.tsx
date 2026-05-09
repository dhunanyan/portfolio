import { IconPropsType } from './types';
import { baseProps } from './base';
export const GraduationCap = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="m22 10-10-5-10 5 10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);
