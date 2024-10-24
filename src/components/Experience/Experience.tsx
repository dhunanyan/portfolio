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

      <p className="experience__description">
        Welcome to my <span>Experience</span> section! Here, you&apos;ll find a
        detailed overview of my professional journey, including the roles
        I&apos;ve held and the skills I&apos;ve developed along the way. From
        internships to full-time positions, I&apos;ve continuously expanded my
        knowledge and expertise in software engineering, especially in{' '}
        <span>web development</span>. I&apos;ve also had the opportunity to
        contribute to complex projects and work alongside talented teams, which
        has greatly shaped my career.
      </p>

      <p className="experience__description">
        Explore my experience below to learn more about the positions I&apos;ve
        held and the skills I&apos;ve acquired.
      </p>

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
