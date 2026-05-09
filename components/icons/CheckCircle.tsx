import { IconPropsType } from './types';
import { baseProps } from './base';
export const CheckCircle = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
