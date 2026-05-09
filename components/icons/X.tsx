import { IconPropsType } from './types';
import { baseProps } from './base';
export const X = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
