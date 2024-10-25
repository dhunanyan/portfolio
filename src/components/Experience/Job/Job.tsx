'use client';
import * as React from 'react';
import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';

import './styles.scss';

export type JobPropsType = {
  url: string;
  date: string;
  title: string;
  subtitle?: string;
  descriptionList: string[];
  skillsList?: string[];
};

export const Job = ({
  url,
  date,
  title,
  subtitle,
  descriptionList,
  skillsList,
}: JobPropsType) => {
  const [isDisplayed, setIsDisplay] = React.useState<boolean>(false);

  const descriptionListToDisplay = React.useMemo(
    () => descriptionList.slice(0, isDisplayed ? descriptionList.length : 2),
    [descriptionList, isDisplayed]
  );

  return (
    <div className="job">
      <div className="job__date">
        <p>{date}</p>
      </div>
      <div className="job__content">
        <Link className="job__title" href={url} target="_blank">
          <h3>
            <span>{title}</span>
            <span>
              <IoMdLink />
            </span>
          </h3>
        </Link>
        {subtitle && <h3 className="job__subtitle">{subtitle}</h3>}
        <ul className="job__descriptions">
          {descriptionListToDisplay.map((paragraph, index) => (
            <li key={index} className="job__description">
              <p>
                {paragraph}{' '}
                {descriptionListToDisplay.length - 1 === index && (
                  <button
                    className="job__button"
                    onClick={() => setIsDisplay((prev) => !prev)}
                  >
                    {isDisplayed ? 'Show less' : '...Show more'}
                  </button>
                )}
              </p>
            </li>
          ))}
        </ul>
        {skillsList && (
          <ul className="job__skills">
            {skillsList.map((item, index) => (
              <li key={index} className="job__skill">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
