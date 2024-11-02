import { parseJobs } from './parseJobs';
import { parseMedia } from './parseMedia';

import { AboutSectionModel, CommonSectionModel } from '@models';
import {
  AboutSectionResponseType,
  CommonSectionResponseType,
  ExperienceSectionResponseType,
} from '@config';

export const parseAboutSection = ({
  items: [
    {
      fields: {
        id,
        index,
        title,
        description,
        skills,
        github,
        linkedin,
        profile,
        profilePlaceholder,
      },
    },
  ],
}: AboutSectionResponseType): AboutSectionModel => ({
  id,
  index,
  title,
  description,
  skills,
  github: parseMedia(github),
  linkedin: parseMedia(linkedin),
  profile: parseMedia(profile),
  profilePlaceholder,
});

export const parseCommonSections = ({
  items,
}: CommonSectionResponseType): CommonSectionModel[] =>
  items.map(
    ({
      fields: { id, index, title, subtitle, info, description, button },
    }) => ({
      id,
      index,
      title,
      subtitle,
      info,
      description,
      button,
    })
  );

export const parseExperienceSection = ({
  items: [
    {
      fields: {
        id,
        index,
        title,
        description,
        work,
        workTitle,
        education,
        educationTitle,
      },
    },
  ],
}: ExperienceSectionResponseType) => ({
  id,
  index,
  title,
  description,
  work: parseJobs(work),
  workTitle,
  education: parseJobs(education),
  educationTitle,
});
