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

export const Ovsx = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg height={size} width={size} viewBox="0 0 131 131">
    <path
      d="M30 44.2L52.6 5H7.3zM4.6 88.5h45.3L27.2 49.4zm51 0l22.6 39.2 22.6-39.2z"
      fill={color}
    />
    <path
      d="M52.6 5L30 44.2h45.2zM27.2 49.4l22.7 39.1 22.6-39.1zm51 0L55.6 88.5h45.2z"
      fill={color}
    />
  </svg>
);

export const Vscm = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth="0"
    viewBox="0 0 16 16"
    height={size}
    width={size}
  >
    <path d="M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z"></path>
  </svg>
);

export const Docs = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M12 7v14" />
    <path d="M16 12h2" />
    <path d="M16 8h2" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    <path d="M6 12h2" />
    <path d="M6 8h2" />
  </svg>
);

export const Box = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg {...baseProps(size, color)}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);
