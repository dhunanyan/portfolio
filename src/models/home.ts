import { Document } from '@contentful/rich-text-types';

export type CommonSectionModel = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  info: string;
  description: Document;
  button: string;
};

export type AboutSectionModel = {
  id: string;
  index: string;
  title: string;
  description: Document;
  skills: { id: string; title: string; skills: string[] }[];
  github: string;
  linkedin: string;
  profile: string;
  profilePlaceholder: string;
};

export type JobModel = {
  id: string;
  url: string;
  title: string;
  subtitle?: string;
  date: string;
  description: Document;
  skills: string[];
};

export type ExperienceSectionModel = {
  id: string;
  index: string;
  title: string;
  description: Document;
  work: JobModel[];
  workTitle: string;
  education: JobModel[];
  educationTitle: string;
};
