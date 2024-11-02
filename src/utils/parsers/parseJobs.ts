import { JobModel } from '@models';
import { JobResponseType } from '@config';

export const parseJobs = (job: JobResponseType): JobModel[] =>
  job.map(
    ({ fields: { id, url, title, subtitle, date, description, skills } }) => ({
      id,
      url,
      subtitle,
      title,
      date,
      description,
      skills,
    })
  );
