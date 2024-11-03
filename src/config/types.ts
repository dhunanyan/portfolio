import { Document } from '@contentful/rich-text-types';

export type MediaResponseType = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
};

export type AboutSectionResponseType = {
  items: {
    fields: {
      id: string;
      index: string;
      title: string;
      description: Document;
      skills: { id: string; title: string; skills: string[] }[];
      cv: string;
      github: MediaResponseType;
      linkedin: MediaResponseType;
      profile: MediaResponseType;
      profilePlaceholder: string;
    };
  }[];
};

export type CommonSectionResponseType = {
  items: {
    fields: {
      id: string;
      index: string;
      title: string;
      subtitle: string;
      info: string;
      description: Document;
      button: string;
    };
  }[];
};

export type JobResponseType = {
  fields: {
    id: string;
    url: string;
    title: string;
    subtitle?: string;
    date: string;
    description: Document;
    skills: string[];
  };
}[];

export type ExperienceSectionResponseType = {
  items: {
    fields: {
      id: string;
      index: string;
      title: string;
      description: Document;
      work: JobResponseType;
      workTitle: string;
      education: JobResponseType;
      educationTitle: string;
    };
  }[];
};

export type BlogResponseType = {
  items: {
    fields: {
      id: string;
      image: MediaResponseType;
      title: string;
      lastUpdated: string;
      content: Document;
    };
  }[];
};
