import { IconPropsType } from './types';
import { baseProps } from './base';
export const Github = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-.09-1.9 2.1 2.1 0 0 0-.8-1.2c3.1-.35 6.4-1.54 6.4-7A5.4 5.4 0 0 0 19 4.77 5 5 0 0 0 18.91 1S17.73.65 15 2.48a13.3 13.3 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5 5 0 0 0 5 4.77a5.4 5.4 0 0 0-1.5 3.73c0 5.42 3.3 6.61 6.4 7a2.1 2.1 0 0 0-.8 1.2A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </svg>
);
