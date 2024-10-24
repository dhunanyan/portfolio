import * as React from 'react';
import './styles.scss';

export type JobPropsType = {
  date: string;
  title: string;
  descriptionList: string[];
  skillsList: string[];
};

export const Job = ({
  date,
  title,
  descriptionList,
  skillsList,
}: JobPropsType) => (
  <div className="job">
    <div className="job__date">
      <p>{date}</p>
    </div>
    <div className="job__content">
      <h3 className="job__title">{title}</h3>
      <ul className="job__descriptions">
        {descriptionList.map((paragraph, index) => (
          <li key={index} className="job__description">
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
      <ul className="job__skills">
        {skillsList.map((item, index) => (
          <li key={index} className="job__skill">
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
