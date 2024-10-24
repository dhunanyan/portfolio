import * as React from 'react';
import { Job } from './Job';
import { ExperienceData } from '@data';

import './styles.scss';

export const Experience = () => (
  <div className="experience">
    <div className="experience__container">
      <h2 className="experience__title">
        <span>02.</span> <span>Experience</span>
        <span className="experience__line" />
      </h2>

      <ul className="experience__list">
        {ExperienceData.map((job, index) => (
          <li key={index} className="experience__item">
            <Job {...job} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
