import { IconPropsType } from './types';
import { baseProps } from './base';
export const Activity = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M22 12h-4l-3 9-5-18-3 9H2" />
  </svg>
);
