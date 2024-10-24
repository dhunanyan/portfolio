import * as React from 'react';

export const Experience = () => (
  <div className="experience">
    <div className="experience__container">
      <h3 className="experience__title">
        Senior Frontend Engineer, Accessibility · Klaviyo
      </h3>
      <ul className="experience__list">
        {['JavaScript', 'TypeScript', 'React', 'Storybook'].map(
          (item, index) => (
            <li key={index} className="experience__item">
              <p>{item}</p>
            </li>
          )
        )}
      </ul>
      <p className="experience__description">
        Build and maintain critical components used to construct Klaviyo&apos;s
        frontend, across the whole product. Work closely with cross-functional
        teams, including developers, designers, and product managers, to
        implement and advocate for best practices in web accessibility.
      </p>
    </div>
  </div>
);
