import * as React from 'react';
import { Skills } from './Skills';

export type DescriptionsPropsType = {
  skillsList: {
    id: string;
    title: string;
    skills: string[];
  }[];
};

export const SkillsMapping = ({ skillsList }: DescriptionsPropsType) => (
  <div className="about__skills-mapping">
    {skillsList.map(({ title, skills, id }, index) => (
      <div key={index}>
        <p
          className="about__description"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Skills id={id} skills={skills} />
        {skillsList.length - 1 !== index && <span className="about__line" />}
      </div>
    ))}
  </div>
);
