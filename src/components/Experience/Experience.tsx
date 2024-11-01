import * as React from 'react';

import { Job } from './Job';
import { Descriptions } from '../Descriptions';

import { ExperienceData } from '@data';

import './styles.scss';

const { title, descriptionsList, work, education } = ExperienceData;

export const Experience = () => (
  <section id="experience" className="experience">
    <div className="experience__container">
      <h2 className="experience__title">
        <span>{title[0]}</span>
        <span>{title[1]}</span>
        <span className="experience__line" />
      </h2>
      <Descriptions
        className="experience__description"
        descriptionsList={descriptionsList}
      />

      <h2 className="experience__subtitle">
        <span>{work.title}</span>
        <span className="experience__line" />
      </h2>
      <ul className="experience__list">
        {work.list.map((job, index) => (
          <li key={index} className="experience__item">
            <Job {...job} />
          </li>
        ))}
      </ul>

      <h2 className="experience__subtitle">
        <span>{education.title}</span>
        <span className="experience__line" />
      </h2>
      <ul className="experience__list">
        {education.list.map((job, index) => (
          <li key={index} className="experience__item">
            <Job {...job} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
