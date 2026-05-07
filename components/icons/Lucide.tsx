import { IconPropsType } from './types';

const baseProps = (size: number, color: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const Menu = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const X = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Mail = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const Github = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-.09-1.9 2.1 2.1 0 0 0-.8-1.2c3.1-.35 6.4-1.54 6.4-7A5.4 5.4 0 0 0 19 4.77 5 5 0 0 0 18.91 1S17.73.65 15 2.48a13.3 13.3 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5 5 0 0 0 5 4.77a5.4 5.4 0 0 0-1.5 3.73c0 5.42 3.3 6.61 6.4 7a2.1 2.1 0 0 0-.8 1.2A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <path d="M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Send = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M14.54 10.54 21 4" />
    <path d="M20.07 4.93 14.54 19.46a1 1 0 0 1-1.84.07L9.6 13.3a1 1 0 0 0-.46-.46l-6.23-3.1a1 1 0 0 1 .07-1.84L17.5 2.37a1 1 0 0 1 1.22 1.22z" />
  </svg>
);

export const CheckCircle = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Briefcase = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const GraduationCap = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="m22 10-10-5-10 5 10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);

export const Calendar = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M8 2v4M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const ExternalLink = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const FileText = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const ArrowDown = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

export const ArrowRight = ({
  size = 24,
  color = 'currentColor',
}: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Npm = ({ size = 128, color = 'currentColor' }: IconPropsType) => (
  <svg height={size} width={size} viewBox="0 0 128 128">
    <path
      fill={color}
      d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
    />
  </svg>
);
