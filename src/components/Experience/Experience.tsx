import * as React from 'react';
import { Job } from './Job';

import { ExperienceSectionModel } from '@models';
import { richTextRenderer } from '@utils';

import './styles.scss';

export type ExperiencePropsType = {
  data?: ExperienceSectionModel;
};

export const Experience = ({ data }: ExperiencePropsType) => {
  if (!data) {
    return null;
  }

  const {
    index,
    title,
    description,
    work,
    workTitle,
    education,
    educationTitle,
  } = data;

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="experience__title">
          <span>{index}</span>
          <span>{title}</span>
          <span className="experience__line" />
        </h2>
        {richTextRenderer(description, 'experience__description')}

        <h2 className="experience__subtitle">
          <span>{workTitle}</span>
          <span className="experience__line" />
        </h2>
        <ul className="experience__list">
          {work.map((job, index) => (
            <li key={index} className="experience__item">
              <Job {...job} />
            </li>
          ))}
        </ul>

        <h2 className="experience__subtitle">
          <span>{educationTitle}</span>
          <span className="experience__line" />
        </h2>
        <ul className="experience__list">
          {education.map((job, index) => (
            <li key={index} className="experience__item">
              <Job {...job} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
