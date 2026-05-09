import { IconPropsType } from './types';
import { baseProps } from './base';
export const Send = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M14.54 10.54 21 4" />
    <path d="M20.07 4.93 14.54 19.46a1 1 0 0 1-1.84.07L9.6 13.3a1 1 0 0 0-.46-.46l-6.23-3.1a1 1 0 0 1 .07-1.84L17.5 2.37a1 1 0 0 1 1.22 1.22z" />
  </svg>
);
