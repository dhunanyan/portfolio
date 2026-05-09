import { IconPropsType } from './types';
import { baseProps } from './base';

export const Menu = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
