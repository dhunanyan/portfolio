'use client';
import * as React from 'react';
import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';

import { JobModel } from '@models';
import { richTextRenderer } from '@utils';

import './styles.scss';

export const Job = ({
  url,
  date,
  title,
  subtitle,
  description,
  skills,
}: JobModel) => {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const LIMIT = 2;

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
        {richTextRenderer(
          description,
          'job__description',
          showMore ? -1 : LIMIT
        )}
        <button
          className="job__button"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
        <ul className="job__skills">
          {skills.map((item, index) => (
            <li key={index} className="job__skill">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
